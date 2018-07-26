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

LANG_LIST = ["Common","Dwarvish","Elvish","Giant","Gnomish","Goblin","Halfling","Orc","Abyssal","Celestial","Deep Speech","Infernal","Primordial","Sylvan","Undercommon"]
RACE_LIST = ['Human', 'Elf', 'Dwarf', 'Gnome', 'Halfling', 'Tiefling', 'Dragonborn', 'Half-Elf', 'Half-Orc']
# ==================
# Races
# ==================


class Race(object):
    def __init__(self, name, sub, size, speed):
        self.race_name = name
        self.subrace = sub
        self.size = size
        self.speed = speed
        self.feature_list = []
        self.prof_list = []
        self.spell_list = []
        print ("Created a " + self.race_name)

    # Getters & Setters
    def get_race(self):
        return self.race_name
    def get_subrace(self):
        return self.subrace
    def get_size(self):
        return self.size
    def get_speed(self):
        return self.speed


class RaceFactory(object):
    def make_race(self, race_string):
        string_list = race_string.split()
        if (string_list[0] == "Dragonborn"):
            return Dragonborn(string_list[0])
        elif (string_list[0] == "Half-Elf"):
            return HalfElf(string_list[0])
        elif (string_list[0] == "Half-Orc"):
            return HalfOrc(string_list[0])
        elif (string_list[0] == "Tiefling"):
            return Tiefling(string_list[0])
        elif (string_list[0] == "Dwarf"):
            return Dwarf(string_list[1])
        elif (string_list[0] == "Elf"):
            return Elf(string_list[1])
        elif (string_list[0] == "Human"):
            return Human(string_list[1])
        elif (string_list[0] == "Halfling"):
            return Halfling(string_list[1])
        elif (string_list[0] == "Gnome"):
            return Gnome(string_list[1])
        else:
            return Human("Standard")


class Dwarf(Race):
    def __init__(self, subrace):
        Race.__init__(self, "Dwarf", subrace, "Medium", 25)


    def new_race(self, character):
        character.add_profs(["Battleaxe","Handaxe","Light Hammer","Warhammer"])
        character.create_option(1, "Tool Proficiency", ["Smith's tools", "Brewer's supplies", "Mason's tools"])
        character.add_profs(["Common","Dwarvish"])
        # set all features
        character.add_features(["Darkvision","Dwarven Resilience","Stonecunning"])
        # set all spells
        if self._subrace == "Hill": # All the hill stuff
            character.max_HP += 1
        else: # All the Mountain stuff
            character.add_profs(["Light", "Medium"])



class Elf(Race):
    def __init__(self, subrace):
        Race.__init__(self, "Elf", subrace, "Medium", 30)


    def new_race(self, character):
        # set all proficiencies
        character.add_profs(["Common","Elvish"])
        # set all features
        character.add_features(["Fey Ancestry", "Trance"])
        # set all spells
        if self._subrace == "High": # All the high stuff
            character.add_profs(["Longsword","Shortsword","Longbow","Shortbow"])
            # Creating language option list
            temp_list = LANG_LIST
            temp_list.remove("Common")
            temp_list.remove("Elvish")
            character.create_option(1, "Language Proficiency", temp_list)
            character.create_option(1, "Spell Wizard Cantrip", ["Acid Splash", "Blade Ward","Chill Touch","Dancing Lights","Fire Bolt","Friends","Light","Mage Hand","Mending","Message","Minor Illusion","Poison Spray","Prestidigitation","Ray of Frost","Shocking Grasp","True Strike"])
            character.add_features(["Darkvision"])
        elif self._subrace == "Wood": # All the wood stuff
            self._speed = 35
            character.add_features(["Darkvision", "Mask of the Wild"])
            character.add_profs(["Longsword","Shortsword","Longbow","Shortbow"])
        else: # All the drow stuff
            character.add_profs(["Rapier","Shortsword","Hand Crossbow"])
            character.add_features(["Superior Darkvision", "Sunlight Sensitivity"])
            character.add_spells([("Dancing Lights", "Charisma")])



class Halfling(Race):
    def __init__(self, subrace):
        Race.__init__(self, "Halfling", subrace, "Small", 30)


    def new_race(self, character):
        # set ability boost
        # set all proficiencies
        character.add_profs(["Common", "Halfling"])
        character.add_features(["Lucky","Brave","Halfling Nimbleness"])
        # set all features
        # set all spells
        if self._subrace == "Lightfoot": # All the lightfoot stuff
            character.add_features(["Naturally Stealthy"])
        else: # All the stout stuff
            character.add_features(["Stout Resilience"])


class Human(Race):
    def __init__(self, subrace):
        Race.__init__(self, "Human", subrace, "Medium", 30)


    def new_race(self, character):
        # set ability boost
        # set all proficiencies
        # set all features
        # set all spells
        temp_list = LANG_LIST
        temp_list.remove("Common")
        character.create_option(1, "Language Proficiency", temp_list)
        if self._subrace != "Standard": # All the standard stuff
            character.create_option(1, "Feat", ["Alert","Athlete","Actor","Charger","Crossbow Expert","Defensive Duelist","Dual Wielder","Dungeon Delver","Durable","Elemental Adept","Grappler","Great Weapon Master","Healer","Heavily Armored","Heavy Armor Master","Inspiring Leader","Keen Mind","Lightly Armored","Linguist","Lucky","Mage Slayer","Magic Initiate","Martial Adept","Medium Armor Master","Mobile","Moderately Armored","Mounted Combat","Observant","Polearm Master","Resilient","Ritual Caster","Savage Attacker","Sentinel","Sharpshooter","Shield Master","Skilled","Skulker","Spell Sniper","Tavern Brawler","Tough","War Caster","Weapon Master"])


class Gnome(Race):
    def __init__(self, subrace):
        Race.__init__(self, "Gnome", subrace, "Small", 25)


    def new_race(self, character):
        # set ability boost
        # set all proficiencies
        # set all features
        character.add_features(["Darkvision","Gnome Cunning"])
        # set all spells
        if self._subrace == "Forest": # All the forest stuff
            character.add_features(["Speak with Small Beasts"])
        else: # All the rock stuff
            character.add_features(["Artificer's Lore", "Tinker"])
            character.add_profs(["Tinker's Tools"])


class HalfElf(Race):
    def __init__(self, subrace):
        Race.__init__(self, subrace, "", "Medium", 30)


    def new_race(self, character):
        # set ability boost
        # PROMPT FOR 2 MORE CHOICES!!
        # set all proficiencies
        character.add_profs("Common","Elvish")
        temp_list = LANG_LIST
        temp_list.remove("Common")
        temp_list.remove("Elvish")
        character.create_option(1, "Language Proficiency", temp_list)
        # set all features
        # set all spells


class HalfOrc(Race):
    def __init__(self, subrace):
        Race.__init__(self, subrace, "", "Medium", 30)


    def new_race(self, character):
        # set ability boost
        # set all proficiencies
        # set all features
        character.add_features(["Darkvision","Relentless Endurance","Savage Attacks"])
        character.add_profs(["Common","Orc"])
        # set all spells


class Dragonborn(Race):
    def __init__(self, subrace):
        Race.__init__(self, subrace, "", "Medium", 30)


    def new_race(self, character):
        # set ability boost
        # set all proficiencies
        # set all features
        character.create_option(1, "Feature", [ "Draconic Ancestry (Black)","Draconic Ancestry (Blue)","Draconic Ancestry (Brass)","Draconic Ancestry (Bronze)","Draconic Ancestry (Copper)","Draconic Ancestry (Gold)","Draconic Ancestry (Green)","Draconic Ancestry (Red)","Draconic Ancestry (Silver)","Draconic Ancestry (White)"])
        character.add_features(["Breath Weapon","Damage Resistance"])
        character.add_profs(["Common","Draconic"])
        # set all spells


class Tiefling(Race):
    def __init__(self, subrace):
        Race.__init__(self, subrace, "", "Medium", 30)


    def new_race(self, character):
        # set ability boost
        # set all proficiencies
        character.add_features(["Darkvision","Hellish Resistance"])
        character.add_spells(["Thaumaturgy","Charisma"])
        character.add_profs(["Common","Infernal"])
        # set all features
        # set all spells

