import os
import config
import objects.races as Races
import objects.classes as Classes
import objects.backgrounds as Backgrounds
from flask import Flask, url_for, redirect, render_template, request, json, session, flash, jsonify
from functools import wraps
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
# from objects.races import * as Races
# from objects.classes import *
# from objects.backgrounds import *
# from objects.tables import *

app = Flask(__name__)
app.config.from_object(config)
db = SQLAlchemy(app)


# ==================
# Global Variables
# ==================
STR = 0
DEX = 1
CON = 2
INT = 3
WIS = 4
CHR = 5

SKILL = 0
WEAPON = 1
ARMOR = 2
SAVING = 3
LANG = 4
TOOL = 5

current_character = None

# ==================
# Models: User & Character
# ==================

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    pw_hash = db.Column(db.String(256), nullable=False)
    characters = db.relationship('Character', backref='User', lazy=True)


    def __init__(self, username, password, email):
        self.username = username
        self.email = email
        self.set_password(password)

    def set_password(self, password):
        self.pw_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.pw_hash, password)

    def serialize(self):
        return {
                'id' : str(self.id),
                'username': str(self.username)
            }


    def __repr__(self):
        return '<User %r>' % self.username


class Character(db.Model):
    # Fields
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    # Strings
    name = db.Column(db.String(80), unique=False, nullable=False)
    race = db.Column(db.String(80), unique=False, nullable=False)
    character_class = db.Column(db.String(80), unique=False, nullable=False) # Stored as "[Class] [Level]"
    background = db.Column(db.String(80), unique=False, nullable=False)
    # Ability Scores
    char_str = db.Column(db.Integer, unique=False, nullable=False)
    char_dex = db.Column(db.Integer, unique=False, nullable=False)
    char_con = db.Column(db.Integer, unique=False, nullable=False)
    char_int = db.Column(db.Integer, unique=False, nullable=False)
    char_wis = db.Column(db.Integer, unique=False, nullable=False)
    char_cha = db.Column(db.Integer, unique=False, nullable=False)
    # Stats
    max_HP = db.Column(db.Integer, unique=False, nullable=False)
    current_HP = db.Column(db.Integer, unique=False, nullable=False)
    temp_HP = db.Column(db.Integer, unique=False, nullable=False)
    armor_class = db.Column(db.Integer, unique=False, nullable=False)
    # Appearance
    age = db.Column(db.Integer, unique=False, nullable=False)
    height = db.Column(db.String(80), unique=False, nullable=False)
    weight = db.Column(db.String(80), unique=False, nullable=False)
    hair_color = db.Column(db.String(80), unique=False, nullable=False)
    eye_color = db.Column(db.String(80), unique=False, nullable=False)
    skin_color = db.Column(db.String(80), unique=False, nullable=False)
    # Personality
    personality_traits = db.Column(db.String(300), unique=False, nullable=False)
    ideals = db.Column(db.String(300), unique=False, nullable=False)
    bonds = db.Column(db.String(300), unique=False, nullable=False)
    flaws = db.Column(db.String(300), unique=False, nullable=False)
    # Relational Tables
    features = db.relationship('CharacterFeatures', backref='Character', lazy=True)
    proficiencies = db.relationship('CharacterProficiencies', backref='Character', lazy=True)
    equipment = db.relationship('CharacterEquipment', backref='Character', lazy=True)
    spells = db.relationship('CharacterSpells', backref='Character', lazy=True)


    def __init__(self, new=True, char_id=1, stats=[10,10,10,10,10,10], \
        race_string="Dwarf Hill", class_string="Fighter", background_string="Soldier", \
        equipment_list = [], skill_list=["Athletics", "Acrobatics", "Intimidation","Survival"]):
        self._new = new
        self.prof_list = set()
        self.equipment_list = []
        self.feature_list = set()
        self.spell_list = set()
        if (new):
            self.option_list = []
            self.max_HP = 0
            self.armor_class = 10
            self.set_ability_scores(stats)
            self.set_race(Races.RaceFactory().make_race(race_string))
            self.set_class(Classes.ClassFactory().make_class(class_string))
            self.set_background(Backgrounds.BackgroundFactory().make_background(background_string))
            self.add_profs(skill_list)
            self.add_equipment(equipment_list)
            self.new_character()
        else:
            self.get_character(char_id)


    def set_ability_scores(self, stats):
        self.char_str = stats[STR]
        self.char_dex = stats[DEX]
        self.char_con = stats[CON]
        self.char_int = stats[INT]
        self.char_wis = stats[WIS]
        self.char_cha = stats[CHR]
        self.str_mod = int((self.char_str - 10)/2)
        self.dex_mod = int((self.char_dex - 10)/2)
        self.con_mod = int((self.char_con - 10)/2)
        self.int_mod = int((self.char_int - 10)/2)
        self.wis_mod = int((self.char_wis - 10)/2)
        self.cha_mod = int((self.char_cha - 10)/2)

    def set_race(self, race):
        self.race = race.race_name
        self._race_object = race

    def set_class(self, char_class):
        self.character_class = char_class.class_name
        self._class_object = char_class

    def set_background(self, background):
        self.background = background.background_name
        self._background_object = background

    def add_profs(self, skill_list):
        for skill in skill_list:
            self.prof_list.add(skill)

    def add_features(self, feature_list):
        for feat in feature_list:
            self.feature_list.add(feat)

    def add_equipment(self, equipment_list):
        for e in equipment_list:
            self.equipment_list.append(e)

    def add_spells(self, spell_list):
        for s in spell_list:
            self.spell_list.add(s)

    def create_option(self, num_select, prompt, op_list):
        self.option_list.append((num_select, prompt, op_list))

    def get_options(self):
    	temp_list = []
    	for o in self.option_list:
    		temp_list.append(self.serialize_option(o))
    	return temp_list

    def serialize_option(self, option):
    	return {
    		'num': option[0],
    		'prompt': option[1],
    		'selection': option[2]
    	}

    def new_character(self):
        self._race_object.new_race(self)
        self._class_object.new_class(self)
        self._background_object.new_background(self)



    # Option list will contain tuples of the format (String, String, List)
    # The first string will be the number of options and number of choices to be made separated by pipes
    # The second string will be A prompt for the user
    # The inner list will be a list of strings to choose from


# ==================
# Models: Features
# ==================

class CharacterFeatures(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    character = db.Column(db.Integer, db.ForeignKey('character.id'), nullable=False)
    feature_id = db.Column(db.Integer, unique=True, nullable=False)

class FeatureLookup(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    feature_name = db.Column(db.String(80), unique=False, nullable=False)
    feature_text = db.Column(db.String(1000), unique=False, nullable=False)
    # Other fields if time allows!
    def __init__(self, name, text):
        self.feature_name = name
        self.feature_text = text


# ==================
# Proficiencies
# ==================
class CharacterProficiencies(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    character = db.Column(db.Integer, db.ForeignKey('character.id'), nullable=False)
    proficiency_id = db.Column(db.Integer, unique=True, nullable=False)

class ProficiencyLookup(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    proficiency_name = db.Column(db.String(80), unique=False, nullable=False)
    proficiency_type = db.Column(db.String(80), unique=False, nullable=False)

    def __init__(self, p_name, p_type):
        self.proficiency_name = p_name
        self.proficiency_type = p_type


# ==================
# Equipment
# ==================
class CharacterEquipment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    character = db.Column(db.Integer, db.ForeignKey('character.id'), nullable=False)
    item_id = db.Column(db.Integer, unique=False, nullable=False)
    equipped = db.Column(db.Boolean, unique=False, default=False) # True or False

class EquipmentLookup(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String(80), unique=False, nullable=False)
    item_type = db.Column(db.String(80), unique=False, nullable=False) # Armor, weapon, gear, tool, mount, vehicle, or tradable
    item_weight = db.Column(db.Float, unique=False, nullable=False)
    item_value = db.Column(db.Float, unique=False, nullable=False) # Kept this String because currency
    item_description = db.Column(db.String(800), unique=False, nullable=False)
    # Weapon stuff
    weapon_category = db.Column(db.String(80), unique=False, nullable=False) # Can be a simple or martial weapon
    weapon_is_ranged = db.Column(db.Boolean, unique=False, default=False) # Boolean, either it is or isn't
    weapon_is_thrown = db.Column(db.Boolean, unique=False, default=False) # Separate but similar to ranged
    weapon_range = db.Column(db.String(20), unique=False, default=False) # If it is either,show the range values (e.g., 60/120)
    weapon_properties = db.Column(db.String(80), unique=False, nullable=False) # For weapons; could be finesse, versatile, heavy, etc
    weapon_damage = db.Column(db.String(80), unique=False, nullable=False) # String because versatile weapons have 2 values
    damage_type = db.Column(db.String(80), unique=False, nullable=False) # Piercing, bludgeoning, or slashing?
    # Armor stuff
    armor_category = db.Column(db.String(80), unique=False, nullable=False) # Light, medium, or heavy?
    armor_bonus = db.Column(db.Integer, unique=False, nullable=False) # String because some add dex, some don't
    armor_disadvantage = db.Column(db.Boolean, unique=False, nullable=False) # Boolean, sometimes you suck at stealthing with armor
    armor_strength = db.Column(db.Integer, unique=False, nullable=False) # Sometimes you need to be strong to wear armor

    def __init__(self, e_name="", e_type="", e_weight=0.0, e_value=0.0, e_desc="", w_cat="", w_range_bool=False, w_thrown=False, \
        w_range="", w_props="", w_damage="", w_type="", a_cat="", a_bonus=0, a_dis=False, a_str=False):
        self.item_name = e_name
        self.item_type = e_type
        self.item_weight = e_weight
        self.item_value = e_value
        self.item_description = e_desc
        self.weapon_category = w_cat
        self.weapon_is_ranged = w_range_bool
        self.weapon_is_thrown = w_thrown
        self.weapon_range = w_range
        self.weapon_properties = w_props
        self.weapon_damage = w_damage
        self.damage_type = w_type
        self.armor_category = a_cat
        self.armor_bonus = a_bonus
        self.armor_disadvantage = a_dis
        self.armor_strength = a_str


# ==================
# Spells
# ==================
class CharacterSpells(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    character = db.Column(db.Integer, db.ForeignKey('character.id'), nullable=False)
    spell_id = db.Column(db.Integer, unique=True, nullable=False)
    prepared = db.Column(db.String(20), unique=False, nullable=False) # True or False
    casting_ability = db.Column(db.String(80), unique=False, nullable=False)

class SpellLookup(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    spell_name = db.Column(db.String(80), unique=False, nullable=False)
    spell_level = db.Column(db.Integer, unique=False, nullable=False) # Levels are 0-9
    spell_school = db.Column(db.String(80), unique=False, nullable=False)
    spell_cast = db.Column(db.String(80), unique=False, nullable=False) # Casting time
    spell_range = db.Column(db.String(80), unique=False, nullable=False) # Varies between self, touch, and a distance
    spell_duration = db.Column(db.String(80), unique=False, nullable=False) # Varies between instant, mins, and more
    concentration = db.Column(db.Boolean, unique=False, default=False) # A part of duration but really it either is or isn't
    # Components
    verbal_component = db.Column(db.Boolean, unique=False, default=False) 
    somatic_component = db.Column(db.Boolean, unique=False, default=False) 
    material_component = db.Column(db.Boolean, unique=False, default=False) 
    material_description = db.Column(db.String(200), unique=False, nullable=False)
    ritual_component = db.Column(db.Boolean, unique=False, default=False) 
    # Caster Lists
    bard_list = db.Column(db.Boolean, unique=False, default=False)
    druid_list = db.Column(db.Boolean, unique=False, default=False)
    cleric_list = db.Column(db.Boolean, unique=False, default=False)
    paladin_list = db.Column(db.Boolean, unique=False, default=False)
    ranger_list = db.Column(db.Boolean, unique=False, default=False)
    sorcerer_list = db.Column(db.Boolean, unique=False, default=False)
    warlock_list = db.Column(db.Boolean, unique=False, default=False)
    wizard_list = db.Column(db.Boolean, unique=False, default=False)
    # Spell Description
    spell_description = db.Column(db.String(1000), unique=False, nullable=False)

    def __init__(self, name, level, school, cast, s_range, duration, conc, verbal, somatic, material, mat_desc, ritual, \
    bard, druid, cleric, paladin, ranger, sorcerer, warlock, wizard, spell_desc):
        self.spell_name = name
        self.spell_level = level
        self.spell_school = school
        self.spell_cast = cast
        self.spell_range = s_range
        self.spell_duration = duration
        self.concentration = conc
        self.verbal_component = verbal
        self.somatic_component = somatic
        self.material_component = material
        self.material_description = mat_desc
        self.ritual_component = ritual
        self.bard_list = bard
        self.druid_list = druid
        self.cleric_list = cleric
        self.paladin_list = paladin
        self.ranger_list = ranger
        self.sorcerer_list = sorcerer
        self.warlock_list = warlock
        self.wizard_list = wizard
        self.spell_description = spell_desc



# ==================
# Helper Functions
# ==================
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'logged_in_user' not in session:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function


# ==================
# Routing
# ==================

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = User.query.filter_by(username=request.form['username']).first()
        if user is None or not user.check_password(request.form['password']):
            flash('Username or password incorrect')
            return redirect('login')

        else:
            session['logged_in_user'] = user.id
            return redirect('/')

    return render_template('login.html')

@app.route('/logout')
def logout():
    session.pop('logged_in_user')
    return redirect('login')


@app.route('/register', methods=['GET', 'POST'])
def register():
    # If user submitted the form
    if request.method == 'POST':
        # Check to see if username exists already
        check_username = User.query.filter_by(username=request.form['username']).first()
        if check_username is None:
            if request.form['password'] == request.form['confirm_password']:
                # Create the new user
                new_user = User(request.form['username'], request.form['password'], request.form['email'])

                db.session.add(new_user)
                db.session.commit()
                session['logged_in_user'] = new_user.id
                flash('Registration Successful!')

                return redirect('/')
            else:
                flash('Passwords do not match!')
                return redirect('register')
        else:
            flash('Username already exists')
            return redirect('register')
    return render_template('registration.html')


@app.route('/password', methods=['GET', 'POST'])
def password():
    return render_template('index.html')


@app.route('/')
@login_required
def index():
    # Get user's characters
    characters = Character.query.filter_by(user=session['logged_in_user']).all()
    # Since most stuff is hardcoded to the SPA frontend there's not much else to send.
    return render_template('index.html',
                            characters=characters,
                            races=Races.RACE_LIST)


# Web
@app.route('/create_character', methods=['POST'])
def create_character():
    if request.method == 'POST':
        print 'post request'
        # Form data for creating a character goes here
        # This is where the character gets instantiated and saved to the db
        # not json encoded just request.form['name attribute of html element']

        # Either return a 200 and ajax refresh on form submission or use flash messages to
        # tell the user the character was created

    
    return redirect('index')


# API calls
@app.route('/get_options', methods=['GET'])
def get_options():
    if request.method == 'GET':
        # When this method is called send back a json object of the characters
        # request.args key value pair
        # a request should look like http://localhost:5000/get_characters?user_id=1234
        current_character = Character(stats=request.args('abilityArray'), \
        race_string=request.args('race_subrace'), class_string=request.args('class') , background_string=request.args('background'), \
        equipment_list=request.args('equipmentArray'), skill_list=request.args('skillsArray'))
        options = character.get_options()


        return jsonify(options=options)

    else:
        return json.dumps({'success':False}), 400, {'ContentType':'application/json'} 


@app.route('/get_characters', methods=['GET'])
def get_characters():
    if request.method == 'GET':
        # When this method is called send back a json object of the characters
        # request.args key value pair
        # a request should look like http://localhost:5000/get_characters?user_id=1234
        characters = Character.query.filter_by(user=request.args('user_id').all())

        return jsonify(characters=characters)

    else:
        return json.dumps({'success':False}), 400, {'ContentType':'application/json'} 

@app.route('/login_mobile', methods=['GET', 'POST'])
def login_mobile():
    if request.method == 'POST':
        data = request.get_json(force=True)
        user = User.query.filter_by(username=data['username']).first()
        if user is None or not user.check_password(data['password']):

            return json.dumps({'success':False}), 400, {'ContentType':'application/json'} 

        else:
            # Need to return user id/object and associated data
            characters = Character.query.filter_by(user=user.id).all()

            return jsonify(user.serialize())

    return render_template('login.html')
