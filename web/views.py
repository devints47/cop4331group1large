import os
from flask import Flask, url_for, redirect, render_template, request, json, session, flash, jsonify
from functools import wraps
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from objects.races import *
from objects.classes import *
from objects.backgrounds import *

app = Flask(__name__)
app.config.from_object('config')
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


    def __init__(self, username, password):
        self.username = username
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
    item_weight = db.Column(db.Integer, unique=False, nullable=False)
    item_value = db.Column(db.String(20), unique=False, nullable=False) # Kept this String because currency
    item_description = db.Column(db.String(300), unique=False, nullable=False)
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
    armor_bonus = db.Column(db.String(80), unique=False, nullable=False) # String because some add dex, some don't
    armor_disadvantage = db.Column(db.String(80), unique=False, nullable=False) # Boolean, sometimes you suck at stealthing with armor
    armor_strength = db.Column(db.String(80), unique=False, nullable=False) # Sometimes you need to be strong to wear armor


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
    verbal_component = db.Column(db.Boolean, unique=False, default=False) 
    # Caster Lists
    bard_list = db.Column(db.Boolean, unique=False, default=False)
    druid_list = db.Column(db.Boolean, unique=False, default=False)
    cleric_list = db.Column(db.Boolean, unique=False, default=False)
    paladin_list = db.Column(db.Boolean, unique=False, default=False)
    ranger_list = db.Column(db.Boolean, unique=False, default=False)
    sorcerer_list = db.Column(db.Boolean, unique=False, default=False)
    warlock_list = db.Column(db.Boolean, unique=False, default=False)
    wizard_list = db.Column(db.Boolean, unique=False, default=False)


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
                new_user = User(request.form['username'], request.form['password'])

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

@app.route('/')
def index():
    c = Character()
    return render_template('index.html')