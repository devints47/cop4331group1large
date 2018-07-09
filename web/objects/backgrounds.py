import os


# ==================
# Backgrounds
# ==================


class Background(object):
    def __init__(self, back_name, two_skills):
        self._background_name = back_name
        self._skill_profs = two_skills
        self._tool_profs = []
        self._language_profs = []
        self._equipment = []
        print ("Created a " + self._background_name)


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
        Background.__init__(self, back_name, ["Insight", "Religion"])


class Charlatan(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name, ["Insight", "Religion"])


class Criminal(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name, ["Insight", "Religion"])


class Entertainer(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name, ["Insight", "Religion"])


class FolkHero(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name, ["Insight", "Religion"])


class GuildArtisan(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name, ["Insight", "Religion"])


class Hermit(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name, ["Insight", "Religion"])


class Noble(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name, ["Insight", "Religion"])


class Outlander(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name, ["Insight", "Religion"])


class Sage(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name, ["Insight", "Religion"])


class Sailor(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name, ["Insight", "Religion"])


class Soldier(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name, ["Insight", "Religion"])


class Urchin(Background):
    def __init__(self, back_name):
        Background.__init__(self, back_name, ["Insight", "Religion"])


