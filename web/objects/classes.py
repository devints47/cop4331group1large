import os

# ==================
# Global Variables
# ==================
STR = 0
DEX = 1
CON = 2
INT = 3
WIS = 4
CHR = 5

SIMPLE_WEAPONS = ["Club","Dagger","Greatclub","Handaxe","Javelin","Light Hammer","Mace","Quarterstaff","Sickle","Spear","Unarmed Strike","Light Crossbow","Dart","Shortbow","Sling", "Simple Weapon"]
MARTIAL_WEAPONS = ["Battleaxe","Flail","Glaive","Greataxe","Greatsword","Halberd","Lance","Longsword","Maul","Morningstar","Pike","Rapier","Scimitar","Shortsword","Trident","War pick","Warhammer","Whip","Blowgun","Heavy Crossbow","Longbow","Net"]

# ==================
# Classes
# ==================


class CharacterClass(object):
    def __init__(self, char_class, HP, level_HP, saving_list):
        self.class_name = char_class
        self.archetype = ""
        self.start_HP = HP
        self.hit_dice = HP
        self.HP_per_level = level_HP
        self.feature_list = []
        self.saving_throws = saving_list
        self.prof_list = []
        self.start_equipment = []
        self.spell_list = []
        # Level 1 stats
        self.level = 1
        self.proficiency_bonus = 2
        print ("Created a " + self.class_name)


    def level_up(self): # Need to add a bunch of universal ifs, like proficiency bonus changes
        self.level += 1

class ClassFactory(object):
    def make_class(self, class_string):
        if (class_string == "Barbarian"):
            return Barbarian(class_string)
        elif (class_string == "Bard"):
            return Bard(class_string)
        elif (class_string == "Cleric"):
            return Cleric(class_string)
        elif (class_string == "Druid"):
            return Druid(class_string)
        elif (class_string == "Fighter"):
            return Fighter(class_string)
        elif (class_string == "Monk"):
            return Monk(class_string)
        elif (class_string == "Paladin"):
            return Paladin(class_string)
        elif (class_string == "Ranger"):
            return Ranger(class_string)
        elif (class_string == "Rogue"):
            return Rogue(class_string)
        elif (class_string == "Sorcerer"):
            return Sorcerer(class_string)
        elif (class_string == "Warlock"):
            return Warlock(class_string)
        elif (class_string == "Wizard"):
            return Wizard(class_string)
        else:
            return Fighter("Fighter")



class Barbarian(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 12, 7, [STR, CON])

    def new_class(self, character):
        character.max_HP += self.start_HP + character.con_mod
        character.armor_class += character.dex_mod
        character.add_profs(SIMPLE_WEAPONS)
        character.add_profs(MARTIAL_WEAPONS)
        character.add_profs(["Light Armor", "Medium Armor","Shield","Strength","Constitution"])
        character.armor_class += character.con_mod


class Bard(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 8, 5, [DEX, CHR])

    def new_class(self, character):
        character.max_HP += self.start_HP + character.con_mod
        character.armor_class += character.dex_mod
        character.add_profs(SIMPLE_WEAPONS)
        character.add_profs(["Hand Crossbow","Longsword","Rapier","Shortsword"])
        character.add_profs(["Light Armor","Dexterity","Charisma"])
        character.add_features(["Spellcasting (Charisma)","Bardic Inspiration"])

class Cleric(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 8, 5, [WIS, CHR])

    def new_class(self, character):
        character.max_HP += self.start_HP + character.con_mod
        character.armor_class += character.dex_mod
        character.add_profs(SIMPLE_WEAPONS)
        character.add_profs(["Light Armor", "Medium Armor", "Shield", "Wisdom","Charisma"])
        character.add_features("Spellcasting (Wisdom)")
        character.create_option(1, "Feature", ["Divine Domain: Knowledge","Divine Domain: Life","Divine Domain: Light","Divine Domain: Nature","Divine Domain: Tempest","Divine Domain: Trickery","Divine Domain: War"])


class Druid(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 8, 5, [INT, WIS])

    def new_class(self, character):
        character.max_HP += self.start_HP + character.con_mod
        character.armor_class += character.dex_mod
        character.add_profs(["Light Armor","Medium Armor","Shield","Club","Dagger","Dart","Javelin","Mace","Quarterstaff","Scimitar","Sickle","Sling","Spear","Herbalism kit","Intelligence","Wisdom"])
        character.add_features(["Spellcasting (Wisdom)", "Druidic"])



class Fighter(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 10, 6, [STR, CON])

    def new_class(self, character):
        character.max_HP += (self.start_HP + character.con_mod)
        character.armor_class += character.dex_mod
        character.add_profs(SIMPLE_WEAPONS)
        character.add_profs(MARTIAL_WEAPONS)
        character.add_profs(["Light Armor","Medium Armor","Heavy Armor","Shield","Strength","Constitution"])
        character.add_features(["Second Wind"])
        character.create_option(1, "Feature", ["Fighting Style: Archery","Fighting Style: Defense","Fighting Style: Dueling","Fighting Style: Great Weapon Fighting","Fighting Style: Protection","Fighting Style: Two-Weapon Fighting"])


class Monk(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 8, 5, [STR, DEX])

    def new_class(self, character):
        character.max_HP += (self.start_HP + character.con_mod)
        character.armor_class += character.dex_mod



class Paladin(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 10, 6, [WIS, CHR])

    def new_class(self, character):
        character.max_HP += (self.start_HP + character.con_mod)
        character.armor_class += character.dex_mod

class Ranger(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 10, 6, [STR, DEX])

    def new_class(self, character):
        character.max_HP += (self.start_HP + character.con_mod)
        character.armor_class += character.dex_mod


class Rogue(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 8, 5, [DEX, INT])

    def new_class(self, character):
        character.max_HP += (self.start_HP + character.con_mod)
        character.armor_class += character.dex_mod


class Sorcerer(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 6, 4, [CON, CHR])

    def new_class(self, character):
        character.max_HP += (self.start_HP + character.con_mod)
        character.armor_class += character.dex_mod


class Warlock(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 8, 5, [WIS, CHR])

    def new_class(self, character):
        character.max_HP += (self.start_HP + character.con_mod)
        character.armor_class += character.dex_mod


class Wizard(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 6, 4, [INT, WIS])

    def new_class(self, character):
        character.max_HP += (self.start_HP + character.con_mod)
        character.armor_class += character.dex_mod
