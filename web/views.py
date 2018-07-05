import os
from flask import Flask, url_for, redirect, render_template, request, json, session, flash, jsonify
from functools import wraps
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from races import *
from classes import *
from backgrounds import *

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


# ==================
# Models
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
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer, db.ForeignKey('user.id'),
            nullable=False)
    name = db.Column(db.String(80), unique=False, nullable=False)
    race = db.Column(db.String(80), unique=False, nullable=False)
    character_class = db.Column(db.String(80), unique=False, nullable=False)
    background = db.Column(db.String(80), unique=False, nullable=False)
    max_HP = db.Column(db.String(80), unique=False, nullable=False)
    current_HP = db.Column(db.String(80), unique=False, nullable=False)
    # Below are some tables that need to be created for each character
    '''
    features = db.relationship('CharacterFeatures', backref='Character', lazy=True)
    proficiencies = db.relationship('CharacterProficiencies', backref='Character', lazy=True)
    equipment = db.relationship('CharacterEquipment', backref='Character', lazy=True)
    spells = db.relationship('CharacterSpells', backref='Character', lazy=True)
    '''

    def __init__(self, stats=[10,10,10,10,10,10], race_string="Dwarf Hill", \
    	class_string="Fighter", background_string="Soldier", \
    	skill_list=["Athletics", "Acrobatics", "Intimidation","Survival"]):
        #set all base stats
        self._ability_scores = stats
        self._race_object = RaceFactory.make_race(race_string)
        self._character_class_object = ClassFactory.make_class(class_string)
        self._background_object = BackgroundFactory.make_background(background_string)
        self.add_skills(skill_list)
        self.new_character()


    def add_skills(self, skill_list):
    	self._skill_proficiencies.append(skill_list)


    def new_character(self):
    	self._race_object.new_race(self)
    	# must implement later
    	'''
    	self._character_class_object.new_class(self)
    	self._background_object.new_background(self)
    	'''


    def increase_ability_score(self, ability, increment):
    	self._ability_scores[ability] += increment






# ==================
# Features
# ==================



# ==================
# Proficiencies
# ==================



# ==================
# Equipment
# ==================


# ==================
# Spells
# ==================



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
    base_stats = [1,2,3,4,5,6]
    subrace = 'Hill'
    dwarf = Dwarf(subrace)
    return render_template('index.html')