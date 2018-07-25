import os
import config
import objects.races as Races
from flask import Flask, url_for, redirect, render_template, request, json, session, flash, jsonify
from functools import wraps
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
# from objects.races import * as Races
from objects.classes import *
from objects.backgrounds import *
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


    def __repr__(self):
        return '<User %r>' % self.username


class Character(db.Model):
    # Fields
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    name = db.Column(db.String(80), unique=False, nullable=False)
    race = db.Column(db.String(80), unique=False, nullable=False)
    character_class_1 = db.Column(db.String(80), unique=False, nullable=False) # Stored as "[Class] [Level]"
    character_class_2 = db.Column(db.String(80), unique=False, nullable=False) # Stored as "[Class] [Level]"
    background = db.Column(db.String(80), unique=False, nullable=False)
    max_HP = db.Column(db.Integer, unique=False, nullable=False)
    current_HP = db.Column(db.Integer, unique=False, nullable=False)
    temp_HP = db.Column(db.Integer, unique=False, nullable=False)
    # Relational Tables
    features = db.relationship('CharacterFeatures', backref='Character', lazy=True)
    proficiencies = db.relationship('CharacterProficiencies', backref='Character', lazy=True)
    equipment = db.relationship('CharacterEquipment', backref='Character', lazy=True)
    spells = db.relationship('CharacterSpells', backref='Character', lazy=True)


    def __init__(self, stats=[10,10,10,10,10,10], race_string="Dwarf Hill", \
        class_string="Fighter", background_string="Soldier", \
        skill_list=["Athletics", "Acrobatics", "Intimidation","Survival"]):
        #set all base stats
        self._ability_scores = stats
        self._race_object = RaceFactory().make_race(race_string)
        self._character_class_object = ClassFactory().make_class(class_string)
        self._background_object = BackgroundFactory().make_background(background_string)
        self._create_profs()
        self.add_skill_profs(skill_list)
        self.new_character()


    def _create_profs(self):
        self._skill_profs = set()
        self._weapon_profs = set()
        self._armor_profs = set()
        self._saving_profs = set()
        self._language_profs = set()
        self._profs = [self._skill_profs, self._weapon_profs, self._armor_profs, self._saving_profs, self._language_profs]


    def new_character(self):
        self._option_list = []
        self._race_object.new_race(self)
        # must implement later
        '''
        self._character_class_object.new_class(self)
        self._background_object.new_background(self)
        '''
        # PROMPT USER WITH OPTION LIST


    def increase_ability_score(self, ability, increment):
        self._ability_scores[ability] += increment

    # Adding proficiencies (FOR NOW)
    def add_skill_profs(self, skill_list):
        for item in skill_list:
            self._profs[SKILL].add(item)

    def add_weapon_profs(self, weapon_list):
        for item in weapon_list:
            self._profs[WEAPON].add(item)

    def add_armor_profs(self, armor_list):
        for item in armor_list:
            self._profs[ARMOR].add(item)

    def add_saving_profs(self, saving_list):
        for item in saving_list:
            self._profs[SAVING].add(item)

    def add_lang_profs(self, lang_list):
        for item in lang_list:
            self._profs[LANG].add(item)


    # Option list will contain tuples of the format (String, String, List)
    # The first string will be the number of options and number of choices to be made separated by pipes
    # The second string will be A prompt for the user
    # The inner list will be a list of strings to choose from
    def create_option(self, option_number, choice_number, prompt_string, option_list):
        self._option_list.append((str(option_number) + "|" + str(choice_number), prompt_string, option_list))


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
    feature_type = db.Column(db.String(80), unique=False, nullable=False)
    feature_text = db.Column(db.String(500), unique=False, nullable=False)
    # Other fields if time allows!


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
    armor_dex = db.Column(db.Integer, unique=False, nullable=False) # String because some add dex, some don't
    armor_strength = db.Column(db.Boolean, unique=False, nullable=False) # Sometimes you need to be strong to wear armor

    def __init__(self, e_name, e_type, e_weight, e_value, e_desc, w_cat, w_range_bool, w_thrown, \
        w_range, w_props, w_damage, w_type, a_cat, a_bonus, a_dis, a_dex, a_str):
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
        self.armor_dex_cap = a_dex
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



class Race(object):
    def __init__(self):
        self._hello = 'world'


class Dwarf(Race):
    size = 'medium'
    def __init__(self, character, subrace):
        Race.__init__(self)
        subrace = subrace
        print self._hello

    def ability_score_boost(subrace):
        character.constitution += 2
        if subrace == "Hill":
            character.wis += 1
        else:
            character.str += 2



class userClass(object):
    asdf = 1



class Fighter(userClass):
    asdf = 1


class Background(db.Model):
    id = db.Column(db.Integer, primary_key=True)



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
        user = User.query.filter_by(username=request.args['username']).first()
        if user is None or not user.check_password(request.args['password']):

            return json.dumps({'success':False}), 400, {'ContentType':'application/json'} 

        else:
            # Need to return user id/object and associated data
            return jsonify('data:data')

    return render_template('login.html')
