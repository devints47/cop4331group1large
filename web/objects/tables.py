import os


# GLOBALS

# Equipment Globals
e_name = ""
e_type = ""
e_weight = 0.0
e_value = 0.0
e_desc = ""
w_cat = ""
w_range_bool = False
w_thrown = False
w_range = ""
w_props = ""
w_damage = ""
w_type = ""
a_cat = ""
a_bonus = 0
a_dis = False
a_str = 0
# =======

class TableFactory(object):
	def __init__(self, db):
		# Proficiency Table
		self.add_proficiencies(db)
		# Equipment Table
		self.add_equipment(db)
		# Spell Table
		# self.add_spells(db)
		# Feature Table
		# self.add_features(db)


	def add_proficiencies(self, db):
		p_list = []
		# Language Proficiencies
		# -- Standard Languages
		p_list.append(ProficiencyLookup("Common", "Language"))
		p_list.append(ProficiencyLookup("Dwarvish", "Language"))
		p_list.append(ProficiencyLookup("Elvish", "Language"))
		p_list.append(ProficiencyLookup("Giant", "Language"))
		p_list.append(ProficiencyLookup("Gnomish", "Language"))
		p_list.append(ProficiencyLookup("Goblin", "Language"))
		p_list.append(ProficiencyLookup("Halfling", "Language"))
		p_list.append(ProficiencyLookup("Orc", "Language"))
		# -- Exotic Languages
		p_list.append(ProficiencyLookup("Abyssal", "Language"))
		p_list.append(ProficiencyLookup("Celestial", "Language"))
		p_list.append(ProficiencyLookup("Draconic", "Language"))
		p_list.append(ProficiencyLookup("Deep Speech", "Language"))
		p_list.append(ProficiencyLookup("Infernal", "Language"))
		p_list.append(ProficiencyLookup("Primordial", "Language"))
		p_list.append(ProficiencyLookup("Sylvan", "Language"))
		p_list.append(ProficiencyLookup("Undercommon", "Language"))
		# Skill Proficiencies
		p_list.append(ProficiencyLookup("Athletics", "Skill"))
		p_list.append(ProficiencyLookup("Acrobatics)", "Skill"))
		p_list.append(ProficiencyLookup("Sleight of Hand", "Skill"))
		p_list.append(ProficiencyLookup("Stealth", "Skill"))
		p_list.append(ProficiencyLookup("Arcana", "Skill"))
		p_list.append(ProficiencyLookup("History", "Skill"))
		p_list.append(ProficiencyLookup("Investigation", "Skill"))
		p_list.append(ProficiencyLookup("Nature", "Skill"))
		p_list.append(ProficiencyLookup("Religion", "Skill"))
		p_list.append(ProficiencyLookup("Animal Handling", "Skill"))
		p_list.append(ProficiencyLookup("Insight", "Skill"))
		p_list.append(ProficiencyLookup("Medicine", "Skill"))
		p_list.append(ProficiencyLookup("Perception", "Skill"))
		p_list.append(ProficiencyLookup("Survival", "Skill"))
		p_list.append(ProficiencyLookup("Deception", "Skill"))
		p_list.append(ProficiencyLookup("Intimidation", "Skill"))
		p_list.append(ProficiencyLookup("Performance", "Skill"))
		p_list.append(ProficiencyLookup("Persuasion", "Skill"))
		# Saving Throw Proficiencies
		p_list.append(ProficiencyLookup("Strength", "Saving Throw"))
		p_list.append(ProficiencyLookup("Dexterity", "Saving Throw"))
		p_list.append(ProficiencyLookup("Constitution", "Saving Throw"))
		p_list.append(ProficiencyLookup("Intelligence", "Saving Throw"))
		p_list.append(ProficiencyLookup("Wisdom", "Saving Throw"))
		p_list.append(ProficiencyLookup("Charisma", "Saving Throw"))
		# Tool Proficiencies
		p_list.append(ProficiencyLookup("", "Tool"))
		# Weapon Proficiencies
		# -- Simple
		p_list.append(ProficiencyLookup("Club", "Simple Weapon"))
		p_list.append(ProficiencyLookup("Dagger", "Simple Weapon"))
		p_list.append(ProficiencyLookup("Greatclub", "Simple Weapon"))
		p_list.append(ProficiencyLookup("Handaxe", "Simple Weapon"))
		p_list.append(ProficiencyLookup("Javelin", "Simple Weapon"))
		p_list.append(ProficiencyLookup("Light Hammer", "Simple Weapon"))
		p_list.append(ProficiencyLookup("Mace", "Simple Weapon"))
		p_list.append(ProficiencyLookup("Quarterstaff", "Simple Weapon"))
		p_list.append(ProficiencyLookup("Sickle", "Simple Weapon"))
		p_list.append(ProficiencyLookup("Spear", "Simple Weapon"))
		p_list.append(ProficiencyLookup("Unarmed Strike", "Simple Weapon"))
		p_list.append(ProficiencyLookup("Light Crossbow", "Simple Weapon"))
		p_list.append(ProficiencyLookup("Dart", "Simple Weapon"))
		p_list.append(ProficiencyLookup("Shortbow", "Simple Weapon"))
		p_list.append(ProficiencyLookup("Sling", "Simple Weapon"))
		# -- Martial
		p_list.append(ProficiencyLookup("Battleaxe", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Flail", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Glaive", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Greataxe", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Greatsword", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Halberd", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Lance", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Longsword", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Maul", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Morningstar", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Pike", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Rapier", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Scimitar", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Shortsword", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Trident", "Martial Weapon"))
		p_list.append(ProficiencyLookup("War pick", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Warhammer", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Whip", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Blowgun", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Heavy Crossbow", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Longbow", "Martial Weapon"))
		p_list.append(ProficiencyLookup("Net", "Martial Weapon"))
		# Armor Proficiencies
		p_list.append(ProficiencyLookup("Light Armor", "Armor"))
		p_list.append(ProficiencyLookup("Medium Armor", "Armor"))
		p_list.append(ProficiencyLookup("Heavy Armor", "Armor"))
		p_list.append(ProficiencyLookup("Shield", "Armor"))

		for p in p_list:
			db.session.add(p)
			db.session.commit()



	def add_equipment(self, db):
		e_list = []
		# Currency
		e_list.append(EquipmentLookup("CP", "Currency", 1/50, 1/100, "Copper piece(s)",\
		w_cat, w_range_bool, w_thrown, w_range, w_props, w_damage, w_type, a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("SP", "Currency", 1/50, 1/10, "Silver piece(s)",\
		w_cat, w_range_bool, w_thrown, w_range, w_props, w_damage, w_type, a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("EP", "Currency", 1/50, 1/2, "Electrum piece(s)",\
		w_cat, w_range_bool, w_thrown, w_range, w_props, w_damage, w_type, a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("GP", "Currency", 1/50, 1, "Gold piece(s)",\
		w_cat, w_range_bool, w_thrown, w_range, w_props, w_damage, w_type, a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("PP", "Currency", 1/50, 10, "Platinum piece(s)",\
		w_cat, w_range_bool, w_thrown, w_range, w_props, w_damage, w_type, a_cat,\
		a_bonus, a_dis, a_str))
		# Armor (Light)
		e_list.append(EquipmentLookup("Padded", "Armor", 8, 5, "Padded armor consists of quilted layers of cloth and batting",\
		w_cat, w_range_bool, w_thrown, w_range, w_props, w_damage, w_type, "Light",\
		1, True, a_str))
		e_list.append(EquipmentLookup("Leather", "Armor", 10, 10, "The breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil. The rest of the armor is made of softer and more flexible materials.",\
		w_cat, w_range_bool, w_thrown, w_range, w_props, w_damage, w_type, "Light",\
		1, a_dis, a_str))
		e_list.append(EquipmentLookup("Studded Leather", "Armor", 13, 45, "Made from rough but flexible leather, studded leather is reinforced with close-set rivets or spikes.",\
		w_cat, w_range_bool, w_thrown, w_range, w_props, w_damage, w_type, "Light",\
		2, a_dis, a_str))
		# Armor (Medium)
		e_list.append(EquipmentLookup("Hide", "Armor", 12, 10, "This crude armor consists of thick furs and pelts. It is commonly worn by barbarian tribes, evil humanoids, and other folk who lack access to the tools and materials needed to create better",\
		w_cat, w_range_bool, w_thrown, w_range, w_props, w_damage, w_type, "Medium",\
		2, a_dis, a_str))
		e_list.append(EquipmentLookup("Chain shirt", "Armor", 20, 50, "Made of interlocking metal rings, a chain shirt is worn between layers of clothing or leather. This armor offers modest protection to the wearer's upper body and allows the sound of the rings rubbing against one another to be muffled by outer layers.",\
		w_cat, w_range_bool, w_thrown, w_range, w_props, w_damage, w_type, "Medium",\
		3, a_dis, a_str))
		e_list.append(EquipmentLookup("Scale mail", "Armor", 45, 50, "This armor consists of a coat and leggings (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish. The suit includes gauntlets.",\
		w_cat, w_range_bool, w_thrown, w_range, w_props, w_damage, w_type, "Medium",\
		4, True, a_str))
		e_list.append(EquipmentLookup("Breastplate", "Armor", 20, 400, "This armor consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs and arms relatively unprotected, this armor provides good protection for the wearer's vital organs while leaving the wearer relatively unencumbered.",\
		w_cat, w_range_bool, w_thrown, w_range, w_props, w_damage, w_type, "Medium",\
		4, a_dis, a_str))
		e_list.append(EquipmentLookup("Half plate", "Armor", 40, 750, "Half plate consists of shaped metal plates that cover most of the wearer's body. It does not include leg protection beyond simple greaves that are attached with leather straps.",\
		w_cat, w_range_bool, w_thrown, w_range, w_props, w_damage, w_type, "Medium",\
		5, True, a_str))
		# Armor (Heavy)
		e_list.append(EquipmentLookup("Ring mail", "Armor", 40, 30, "This armor is leather with heavy rings sewn into it. The rings help reinforce the armor against blows from swords and axes. Ring mail is inferior to chain mail, and it's usually only worn by those who cannot afford better armor.",\
		w_cat, w_range_bool, w_thrown, w_range, w_props, w_damage, w_type, "Heavy",\
		4, True, a_str))
		e_list.append(EquipmentLookup("Chain mail", "Armor", 55, 75, "Made of interlocking metal rings, chain mail includes a layer of quilted fabric worn underneath the mail to prevent chafing and to cushion the impact of blows. The suit includes gauntlets.",\
		w_cat, w_range_bool, w_thrown, w_range, w_props, w_damage, w_type, "Heavy",\
		6, True, 13))
		e_list.append(EquipmentLookup("Splint", "Armor", 60, 200, "This armor is made of narrow vertical strips of metal riveted to a backing of leather that is worn over cloth padding. Flexible chain mail protects the joints.",\
		w_cat, w_range_bool, w_thrown, w_range, w_props, w_damage, w_type, "Heavy",\
		7, True, 15))
		e_list.append(EquipmentLookup("Plate", "Armor", 65, 1500, "Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath the armor. Buckles and straps distribute the weight over the body.",\
		w_cat, w_range_bool, w_thrown, w_range, w_props, w_damage, w_type, "Heavy",\
		8, True, 15))
		e_list.append(EquipmentLookup("Shield", "Armor", 6, 10, "A shield is made from wood or metal and carried in one hand. Weilding a shield increases your Armor Class by 2. You can benefit from only one shield at a time.",\
		w_cat, w_range_bool, w_thrown, w_range, w_props, w_damage, w_type, "Shield",\
		2, a_dis, a_str))
		# Weapons (Simple Melee)
		e_list.append(EquipmentLookup("Club", "Weapon", 2, 1/10, e_desc,\
		"Simple", w_range_bool, w_thrown, w_range, "Light", "1d4", "bludgeoning", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Dagger", "Weapon", 2, 2, e_desc,\
		"Simple", w_range_bool, True, "20/60", "Finesse,Light,Thrown", "1d4", "piercing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Greatclub", "Weapon", 10, 2/10, e_desc,\
		"Simple", w_range_bool, w_thrown, w_range, "Two-handed", "1d8", "bludgeoning", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Handaxe", "Weapon", 2, 5, e_desc,\
		"Simple", w_range_bool, True, "20/60", "Light,Thrown", "1d6", "slashing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Javelin", "Weapon", 2, 5/10, e_desc,\
		"Simple", w_range_bool, True, "30/120", "Thrown", "1d6", "piercing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Light hammer", "Weapon", 2, 2, e_desc,\
		"Simple", w_range_bool, True, "20/60", "Light,Thrown", "1d4", "bludgeoning", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Mace", "Weapon", 4, 5, e_desc,\
		"Simple", w_range_bool, w_thrown, w_range, w_props, "1d6", "bludgeoning", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Quarterstaff", "Weapon", 4, 2/10, e_desc,\
		"Simple", w_range_bool, w_thrown, w_range, "Versatile", "1d6|1d8", "bludgeoning", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Sickle", "Weapon", 2, 1, e_desc,\
		"Simple", w_range_bool, w_thrown, w_range, "Light", "1d4", "slashing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Spear", "Weapon", 3, 1, e_desc,\
		"Simple", w_range_bool, w_thrown, w_range, "Thrown,Versatile", "1d6|1d8", "piercing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Unarmed strike", "Weapon", 0, 0, e_desc,\
		"Simple", w_range_bool, w_thrown, w_range, "Light", "1", "bludgeoning", a_cat,\
		a_bonus, a_dis, a_str))
		# Weapons (Simple Ranged)
		e_list.append(EquipmentLookup("Light Crossbow", "Weapon", 5, 25, e_desc,\
		"Simple", True, w_thrown, "80/320", "Ammunition,Loading,Two-handed", "1d8", "piercing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Dart", "Weapon", 1/4, 5/100, e_desc,\
		"Simple", True, True, "20/60", "Finesse,Thrown", "1d4", "piercing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Shortbow", "Weapon", 2, 25, e_desc,\
		"Simple", True, w_thrown, "80/320", "Ammunition,Two-handed", "1d6", "piercing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Sling", "Weapon", 0, 1/10, e_desc,\
		"Simple", True, w_thrown, "30/120", "Ammunition", "1d6", "bludgeoning", a_cat,\
		a_bonus, a_dis, a_str))
		# Weapons (Martial Melee)
		e_list.append(EquipmentLookup("Battleaxe", "Weapon", 4, 10, e_desc,\
		"Martial", w_range_bool, w_thrown, w_range, "Versatile", "1d8|1d10", "slashing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Flail", "Weapon", 2, 10, e_desc,\
		"Martial", w_range_bool, w_thrown, w_range, w_props, "1d8", "bludgeoning", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Glaive", "Weapon", 6, 20, e_desc,\
		"Martial", w_range_bool, w_thrown, w_range, "Heavy,Reach,Two-handed", "1d10", "slashing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Greataxe", "Weapon", 7, 30, e_desc,\
		"Martial", w_range_bool, w_thrown, w_range, "Heavy,Two-handed", "1d10", "slashing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Greatsword", "Weapon", 6, 50, e_desc,\
		"Martial", w_range_bool, w_thrown, w_range, "Heavy,Two-handed", "2d6", "slashing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Halberd", "Weapon", 6, 20, e_desc,\
		"Martial", w_range_bool, w_thrown, w_range, "Heavy,Reach,Two-handed", "1d10", "slashing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Lance", "Weapon", 6, 10, e_desc,\
		"Martial", w_range_bool, w_thrown, w_range, "Reach,Special", "1d12", "piercing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Longsword", "Weapon", 3, 15, e_desc,\
		"Martial", w_range_bool, w_thrown, w_range, "Versatile", "1d8|1d10", "slashing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Maul", "Weapon", 10, 10, e_desc,\
		"Martial", w_range_bool, w_thrown, w_range, "Heavy,Two-handed", "2d6", "bludgeoning", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Morningstar", "Weapon", 15, 4, e_desc,\
		"Martial", w_range_bool, w_thrown, w_range, w_props, "1d8", "piercing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Pike", "Weapon", 18, 5, e_desc,\
		"Martial", w_range_bool, w_thrown, w_range, "Heavy,Reach,Two-handed", "1d10", "piercing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Rapier", "Weapon", 2, 25, e_desc,\
		"Martial", w_range_bool, w_thrown, w_range, "Finesse", "1d8", "piercing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Scimitar", "Weapon", 3, 25, e_desc,\
		"Martial", w_range_bool, w_thrown, w_range, "Finesse,Light", "1d6", "slashing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Shortsword", "Weapon", 2, 10, e_desc,\
		"Martial", w_range_bool, w_thrown, w_range, "Finesse,Light", "1d6", "piercing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Trident", "Weapon", 4, 5, e_desc,\
		"Martial", w_range_bool, True, "20/60", "Thrown,Versatile", "1d6|1d8", "piercing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("War pick", "Weapon", 2, 5, e_desc,\
		"Martial", w_range_bool, w_thrown, w_range, w_props, "1d8", "piercing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Warhammer", "Weapon", 2, 15, e_desc,\
		"Martial", w_range_bool, w_thrown, w_range, "Versatile", "1d8|1d10", "bludgeoning", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Whip", "Weapon", 3, 2, e_desc,\
		"Martial", w_range_bool, w_thrown, w_range, "Finesse,Reach", "1d4", "slashing", a_cat,\
		a_bonus, a_dis, a_str))
		# Weapon (Martial Ranged)
		e_list.append(EquipmentLookup("Blowgun", "Weapon", 1, 10, e_desc,\
		w_cat, True, w_thrown, "25/100", "Ammunition,Loading", "1", "piercing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Hand Crossbow", "Weapon", 3, 75, e_desc,\
		w_cat, True, w_thrown, "30/120", "Ammunition,Light,Loading", "1d6", "piercing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Heavy Crossbow", "Weapon", 18, 50, e_desc,\
		w_cat, True, w_thrown, "100/400", "Ammunition,Heavy,Loading,Two-handed", "1d10", "piercing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Longbow", "Weapon", 2, 50, e_desc,\
		w_cat, True, w_thrown, "150/600", "Ammunition,Heavy,Two-handed", "1d8", "piercing", a_cat,\
		a_bonus, a_dis, a_str))
		e_list.append(EquipmentLookup("Net", "Weapon", 3, 1, e_desc,\
		w_cat, True, True, "5/15", "Special,Thrown", w_damage, w_type, a_cat,\
		a_bonus, a_dis, a_str))
		# Adventuring Gear
		
		

		for e in e_list:
			db.session.add(e)
			db.session.commit()
