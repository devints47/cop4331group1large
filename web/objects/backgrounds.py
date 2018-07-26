import os


# Globals
LANG_LIST = ["Common","Dwarvish","Elvish","Giant","Gnomish","Goblin","Halfling","Orc","Abyssal","Celestial","Deep Speech","Infernal","Primordial","Sylvan","Undercommon"]



# ==================
# Backgrounds
# ==================


class Background(object):
    def __init__(self, back_name):
        self.background_name = back_name
        print ("Created a " + self.background_name)


class BackgroundFactory(object):
    def make_background(self, back_string):
        if (back_string == "Acolyte"):
            return Acolyte(back_string)
        elif (back_string == "Charlatan"):
            return Charlatan(back_string)
        elif (back_string == "Criminal"):
            return Criminal(back_string)
        elif (back_string == "Entertainer"):
            return Entertainer(back_string)
        elif (back_string == "Folk Hero"):
            return FolkHero(back_string)
        elif (back_string == "Guild Artisan"):
            return GuildArtisan(back_string)
        elif (back_string == "Hermit"):
            return Hermit(back_string)
        elif (back_string == "Noble"):
            return Noble(back_string)
        elif (back_string == "Outlander"):
            return Outlander(back_string)
        elif (back_string == "Sage"):
            return Sage(back_string)
        elif (back_string == "Sailor"):
            return Sailor(back_string)
        elif (back_string == "Soldier"):
            return Soldier(back_string)
        elif (back_string == "Urchin"):
            return Urchin(back_string)
        else:
            return Soldier("Soldier")


class Acolyte(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name)

    def new_background(self, character):
        temp_list = LANG_LIST
        temp_list.remove("Common")
        character.create_option(2, "Language Proficiency", temp_list)
        character.create_option(1, "Equipment", ["Amulet","Emblem","Reliquary"])
        equipment_list = ["Clothes, common"]
        i = 0
        while (i < 15):
            equipment_list.append("GP")
            i += 1
        character.add_equipment(equipment_list)
        character.add_features(["Shelter the Faithful"])

class Charlatan(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name)

    def new_background(self, character):
        character.add_profs(["Disguise kit","Forgery kit"])
        equipment_list = ["Clothes, fine","Disguise kit","Pouch"]
        i = 0
        while (i < 15):
            equipment_list.append("GP")
            i += 1
        character.add_equipment(equipment_list)
        character.add_features(["False Identity"])



class Criminal(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name)

    def new_background(self, character):
        character.add_profs(["Disguise kit","Forgery kit"])
        equipment_list = ["Clothes, fine","Disguise kit","Pouch"]
        i = 0
        while (i < 15):
            equipment_list.append("GP")
            i += 1
        character.add_equipment(equipment_list)
        character.add_features(["False Identity"])


class Entertainer(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name)

    def new_background(self, character):
        character.add_profs(["Disguise kit","Forgery kit"])
        equipment_list = ["Clothes, fine","Disguise kit","Pouch"]
        i = 0
        while (i < 15):
            equipment_list.append("GP")
            i += 1
        character.add_equipment(equipment_list)
        character.add_features(["False Identity"])


class FolkHero(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name)

    def new_background(self, character):
        character.add_profs(["Disguise kit","Forgery kit"])
        equipment_list = ["Clothes, fine","Disguise kit","Pouch"]
        i = 0
        while (i < 15):
            equipment_list.append("GP")
            i += 1
        character.add_equipment(equipment_list)
        character.add_features(["False Identity"])


class GuildArtisan(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name)

    def new_background(self, character):
        character.add_profs(["Disguise kit","Forgery kit"])
        equipment_list = ["Clothes, fine","Disguise kit","Pouch"]
        i = 0
        while (i < 15):
            equipment_list.append("GP")
            i += 1
        character.add_equipment(equipment_list)
        character.add_features(["False Identity"])


class Hermit(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name)

    def new_background(self, character):
        character.add_profs(["Disguise kit","Forgery kit"])
        equipment_list = ["Clothes, fine","Disguise kit","Pouch"]
        i = 0
        while (i < 15):
            equipment_list.append("GP")
            i += 1
        character.add_equipment(equipment_list)
        character.add_features(["False Identity"])


class Noble(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name)

    def new_background(self, character):
        character.add_profs(["Disguise kit","Forgery kit"])
        equipment_list = ["Clothes, fine","Disguise kit","Pouch"]
        i = 0
        while (i < 15):
            equipment_list.append("GP")
            i += 1
        character.add_equipment(equipment_list)
        character.add_features(["False Identity"])


class Outlander(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name)

    def new_background(self, character):
        character.add_profs(["Disguise kit","Forgery kit"])
        equipment_list = ["Clothes, fine","Disguise kit","Pouch"]
        i = 0
        while (i < 15):
            equipment_list.append("GP")
            i += 1
        character.add_equipment(equipment_list)
        character.add_features(["False Identity"])


class Sage(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name)

    def new_background(self, character):
        character.add_profs(["Disguise kit","Forgery kit"])
        equipment_list = ["Clothes, fine","Disguise kit","Pouch"]
        i = 0
        while (i < 15):
            equipment_list.append("GP")
            i += 1
        character.add_equipment(equipment_list)
        character.add_features(["False Identity"])


class Sailor(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name)

    def new_background(self, character):
        character.add_profs(["Disguise kit","Forgery kit"])
        equipment_list = ["Clothes, fine","Disguise kit","Pouch"]
        i = 0
        while (i < 15):
            equipment_list.append("GP")
            i += 1
        character.add_equipment(equipment_list)
        character.add_features(["False Identity"])


class Soldier(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name)

    def new_background(self, character):
        character.create_option(1,"Tool Proficiency",["Dice set","Dragonchess set","Playing card set","Three-Dragon Ante set"])
        character.add_profs(["Vehicles (land)"])
        equipment_list = ["Clothes, common","Pouch"]
        i = 0
        while (i < 10):
            equipment_list.append("GP")
            i += 1
        character.add_equipment(equipment_list)
        character.add_features(["Military Rank"])

class Urchin(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name)

    def new_background(self, character):
        character.add_profs(["Disguise kit","Forgery kit"])
        equipment_list = ["Clothes, fine","Disguise kit","Pouch"]
        i = 0
        while (i < 15):
            equipment_list.append("GP")
            i += 1
        character.add_equipment(equipment_list)
        character.add_features(["False Identity"])

