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


# ==================
# Classes
# ==================


class CharacterClass(object):
    def __init__(self, char_class, HP, level_HP, saving_list):
        self._class_name = char_class
        self._archetype = ""
        self._start_HP = HP
        self._hit_dice = HP
        self._HP_per_level = level_HP
        self._feature_list = []
        self._saving_throws = saving_list
        self._prof_list = []
        self._start_equipment = []
        self._spell_list = []
        # Level 1 stats
        self._level = 1
        self._proficiency_bonus = 2
        print ("Created a " + self._class_name)


    def level_up(self): # Need to add a bunch of universal ifs, like proficiency bonus changes
        self._level += 1

    # Getters & Setters
    def get_class_name(self):
        return self._class_name

    def get_archetype(self):
        return self._archetype
    def set_archetype(self, selected_arch):
        self._archetype = selected_arch

    def get_start_HP(self):
        return self._start_HP

    def get_hit_dice(self):
        return self._hit_dice

    def get_saving_throws(self):
        return self._saving_throws

    def get_prof_bonus(self):
        return self._proficiency_bonus


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


class Bard(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 8, 5, [DEX, CHR])

class Cleric(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 8, 5, [WIS, CHR])


class Druid(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 8, 5, [INT, WIS])


class Fighter(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 10, 6, [STR, CON])


class Monk(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 8, 5, [STR, DEX])


class Paladin(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 10, 6, [WIS, CHR])


class Ranger(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 10, 6, [STR, DEX])


class Rogue(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 8, 5, [DEX, INT])


class Sorcerer(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 6, 4, [CON, CHR])


class Warlock(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 8, 5, [WIS, CHR])


class Wizard(CharacterClass):
    def __init__(self, class_string):
        CharacterClass.__init__(self, class_string, 6, 4, [INT, WIS])

