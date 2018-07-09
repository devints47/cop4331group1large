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

# ==================
# Races
# ==================


class Race(object):
    def __init__(self, name, sub, size, speed):
        self._race_name = name
        self._subrace = sub
        self._size = size
        self._speed = speed
        self._feature_list = []
        self._prof_list = []
        self._spell_list = []
        print ("Created a " + self._race_name)

    # Getters & Setters
    def get_race(self):
        return self._race_name
    def get_subrace(self):
        return self._subrace
    def get_size(self):
        return self._size
    def get_speed(self):
        return self._speed


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
        # set ability boost
        character.increase_ability_score(CON, 2)
        # set all proficiencies
        character.add_weapon_profs(["Battleaxe","Handaxe","Throwing Hammer","Warhammer"])
        character.create_option(3, 1, "Dwarven Tool Proficiency", ["Smith's tools", "Brewer's supplies", "Mason's tools"])
        character.add_lang_profs(["Common","Dwarvish"])
        # set all features
        # set all spells
        if self._subrace == "Hill": # All the hill stuff
            character.increase_ability_score(WIS, 1)
        else: # All the Mountain stuff
            character.increase_ability_score(STR, 2)
            character.add_armor_profs(["Light", "Medium"])

    def get_options(self):
        return True # THIS SHOULD BE A SQL QUERY



class Elf(Race):
    def __init__(self, subrace):
        Race.__init__(self, "Elf", subrace, "Medium", 30)


    def new_race(self, character):
        # set ability boost
        character.increase_ability_score(DEX, 2)
        # set all proficiencies
        character.add_skill_profs(["Perception"])
        character.add_lang_profs(["Common","Elvish"])
        # set all features
        # set all spells
        if self._subrace == "High": # All the high stuff
            character.increase_ability_score(INT, 1)
            character.add_weapon_profs(["Longsword","Shortsword","Longbow","Shortbow"])
            # Creating language option list
            temp_list = LANG_LIST
            temp_list.remove("Common")
            temp_list.remove("Elvish")
            character.create_option()
        elif self._subrace == "Wood": # All the wood stuff
            character.increase_ability_score(WIS, 1)
            self._speed = 35
            character.add_weapon_profs(["Longsword","Shortsword","Longbow","Shortbow"])
        else: # All the drow stuff
            character.increase_ability_score(CHR, 1)
            character.add_weapon_profs(["Rapier","Shortsword","Hand Crossbow"])


class Halfling(Race):
    def __init__(self, subrace):
        Race.__init__(self, "Halfling", subrace, "Small", 30)


    def new_race(self, character):
        # set ability boost
        character.increase_ability_score(DEX, 2)
        # set all proficiencies
        # set all features
        # set all spells
        if self._subrace == "Lightfoot": # All the lightfoot stuff
            character.increase_ability_score(CHR, 1)
        else: # All the stout stuff
            character.increase_ability_score(CON, 1)


class Human(Race):
    def __init__(self, subrace):
        Race.__init__(self, "Human", subrace, "Medium", 30)


    def new_race(self, character):
        # set ability boost
        # set all proficiencies
        # set all features
        # set all spells
        if self._subrace == "Standard": # All the standard stuff
            character.increase_ability_score(STR, 1)
            character.increase_ability_score(DEX, 1)
            character.increase_ability_score(CON, 1)
            character.increase_ability_score(INT, 1)
            character.increase_ability_score(WIS, 1)
            character.increase_ability_score(CHR, 1)
        else: # All the variant stuff
            character.increase_ability_score(DEX, 1)
            character.increase_ability_score(CON, 1)
            # AT SOME POINT WE MUST CHANGE THIS TO A PROMPT


class Gnome(Race):
    def __init__(self, subrace):
        Race.__init__(self, "Gnome", subrace, "Small", 25)


    def new_race(self, character):
        # set ability boost
        character.increase_ability_score(INT, 2)
        # set all proficiencies
        # set all features
        # set all spells
        if self._subrace == "Forest": # All the forest stuff
            character.increase_ability_score(DEX, 1)
        else: # All the rock stuff
            character.increase_ability_score(CON, 1)


class HalfElf(Race):
    def __init__(self, subrace):
        Race.__init__(self, subrace, "", "Medium", 30)


    def new_race(self, character):
        # set ability boost
        character.increase_ability_score(CHR, 2)
        # PROMPT FOR 2 MORE CHOICES!!
        # set all proficiencies
        # set all features
        # set all spells


class HalfOrc(Race):
    def __init__(self, subrace):
        Race.__init__(self, subrace, "", "Medium", 30)


    def new_race(self, character):
        # set ability boost
        character.increase_ability_score(STR, 2)
        character.increase_ability_score(CON, 1)
        # set all proficiencies
        # set all features
        # set all spells


class Dragonborn(Race):
    def __init__(self, subrace):
        Race.__init__(self, subrace, "", "Medium", 30)


    def new_race(self, character):
        # set ability boost
        character.increase_ability_score(STR, 2)
        character.increase_ability_score(CHR, 1)
        # set all proficiencies
        # set all features
        # set all spells


class Tiefling(Race):
    def __init__(self, subrace):
        Race.__init__(self, subrace, "", "Medium", 30)


    def new_race(self, character):
        # set ability boost
        character.increase_ability_score(CHR, 2)
        character.increase_ability_score(INT, 1)
        # set all proficiencies
        # set all features
        # set all spells

