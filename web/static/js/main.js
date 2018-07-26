//race subclass arrays
var dwarfSubrace = ["Hill", "Mountain"];
var elfSubrace = ["High", "Wood", "Drow"];
var halflingSubrace = ["Lightfoot", "Stout"];
var humanSubrace = ["Standard", "Variant"];
var dragonbornSubrace = ["None"];
var gnomeSubrace = ["Forest", "Rock"];
var halfElfSubrace = ["None"];
var halfOrcSubrace = ["None"];
var tielflingSubrace = ["None"];

//ability array based on selected race and subraces
// every other index has the amount of points the preceding ability will get
//dwarf abilities
var dwarfAbility = ["CON", 2];
var hillAbility = ["WIS", 1];
var mountainAbility = ["STR", 2];
//elf abilities
var elfAbility = ["DEX", 2];
var highAbility = ["INT", 1];
var woodAbility = ["WIS", 1];
var drowAbility = ["CHR", 1];
//halfling abilities
var halflingAbility = ["DEX", 2];
var lightfootAbility = ["CHR", 1];
var stoutAbility = ["CON", 1];
//human abilities
var standardAbility = ["ALL", 1];
var variantAbility = ["Choose 2", 1];
//Dragonborn abilities
var dragonBornAbility = ["STR", 2, "CHR", 1];
//gnome abilities
var gnomeAbility = ["INT", 2];
var forestAbility = ["DEX", 1];
var rockAbility = ["CON", 1];
//half-elf ability
var half_ElfAbility = ["CHR", 2, "Choose 2", 1];
//half-orc abilities
var half_OrcAbility = ["STR", 2, "CON", 1];
//tiefling ability
var tieflingAbility = ["CHR", 2, "INT", 1];

//skills from backgrounds
var acolyteSkills = ["Insight", "Religion"];
var charlatanSkills = ["Deception", "Sleight of Hand"];
var criminalSkills = ["Deception", "Stealth"];
var entertainerSkills = ["Acrobatics", "Performance"];
var folkHeroSkills = ["Animal Handling", "Survival"];
var guildArtisanSkills = ["Insight", "Persuasion"];
var hermitSkills = ["Medicine", "Religion"];
var nobleSkills = ["History", "Persuasion"];
var outlanderSkills = ["Athletics", "Survival"];
var sageSkills = ["Arcana", "History"];
var sailorSkills = ["Athletics", "Perception"];
var soldierSkills = ["Athletics", "Intimidation"];
var urchinSkills = ["Sleight of Hand", "Stealth"];

//skills from classes
//0 index is how much we can select from the list of strings 
var barbarianSkills = [2, "Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"]
var bardSkills = [3, "Athletics", "Acrobatics", "Sleight of Hand", "Stealth", "Arcana", "History", "Investigation", "Nature", "Religion", "Animal Handling", "Insight", "Medicine", "Perception", "Survival", "Deception", "Intimidation", "Performance", "Persuasion"];
var clericSkills = [2, "History", "Insight", "Medicine", "Persuasion", "Religion"];
var druidSkills = [2, "Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"];
var fighterSkills = [2, "Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"];
var monkSkills = [2, "Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"];
var paladinSkills = [2, "Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"];
var rangerSkills = [3, "Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"];
var rogueSkills = [4, "Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"];
var sorcererSkills = [2, "Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"];
var warlockSkills = [2, "Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"];
var wizardSkills = [2, "Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"];

//skills from race
//0 index is how much we can select from the list of strings
var dwarfSkills = [0];
var elfSkills = [1, "Perception"];
var halflingSkills = [0];
var humanStandardSkills = [0];
var humanVariantSkills = [1, "Athletics", "Acrobatics", "Sleight of Hand", "Stealth", "Arcana", "History", "Investigation", "Nature", "Religion", "Animal Handling", "Insight", "Medicine", "Perception", "Survival", "Deception", "Intimidation", "Performance", "Persuasion"];
var dragonbornSkills = [0];
var gnomeSkills = [0];
var half_ElfSkills = [2, "Athletics", "Acrobatics", "Sleight of Hand", "Stealth", "Arcana", "History", "Investigation", "Nature", "Religion", "Animal Handling", "Insight", "Medicine", "Perception", "Survival", "Deception", "Intimidation", "Performance", "Persuasion"];
var half_OrcSkills = [1, "Intimidation"];
var tieflingSkills = [0];

//starting equipment based on class
//each class is a object
var barbarianEquipment = {
    firstSelection: ["Great Axe", "Any Martial Weapon"],
    secondSelection: ["2 Handaxes", "Any Simple Weapon"],
    thirdSelection: ["Explorer's Pack"],
    fourthSelection: ["2 Javelins"]
};

var bardEquipment = {
    firstSelection: ["Rapier", "Longsword", "Any Simple Weapon"],
    secondSelection: ["Diplomat's Pack", "Entertainer's Pack"],
    thirdSelection: ["Lute", "Any Musical Instrument"],
    fourthSelection: ["Leather Armor", "Dagger"]
};

var clericEquipment = {
    firstSelection: ["Mace", "Warhammer"],
    secondSelection: ["Scale Mail", "Leather Armor", "Chain Mail"],
    thirdSelection: ["Light Crossbow", "20 Bolts", "Simple Weapon"],
    fourthSelection: ["Priest's Pack", "Explorer's Pack"],
    fifthSelection: ["Shield", "Holy Symbol"]
};

var druidEquipment = {
    firstSelection: ["Wooden Shield", "Any Simple Weapon"],
    secondSelection: ["Scimitar", "Any Simple Melee Weapon"],
    thirdSelection: ["Leather Armor", "Explorer's Pack", "Druid Focus"]
};

var fighterEquipment = {
    firstSelection: ["Chain Mail", "Leather Armor, Longbow, & 20 Arrows"],
    secondSelection: ["Martial Weapon and Shield", "Two Martial Weapons"],
    thirdSelection: ["Light Crossbow and 20 Bolts", "Two Handaxes"],
    fourthSelection: ["Dungeoneer's Pack", "Explorer's Pack"]
};

var monkEquipment = {
    firstSelection: ["Shortsword", "Any Simple Weapon"],
    secondSelection: ["Dungeoneer's Pack", "Explorer's Pack"],
    thirdSelection: ["10 Darts"]
};

var paladinEquipment = {
    firstSelection: ["Martial Weapon and Shield", "Two Martial Weapons"],
    secondSelection: ["Five Javelins", "Any Simple Melee Weapon"],
    thirdSelection: ["A Priest's Pack", "An Explorer's PAck"],
    fourthSelection: ["Chain Mail and Holy Symbol"]
};

var rangerEquipment = {
    firstSelection: ["Scale Mail", "Leather Armor"],
    secondSelection: ["Two Shortswords", "Two Simple Melee Weapons"],
    thirdSelection: ["Dungeoneer's Pack", "Explorer's Pack"],
    fourthSelection: ["Longbow and Quiver of 20 Arrows"]
};

var rogueEquipment = {
    firstSelection: ["Rapier", "Shortsword"],
    secondSelection: ["Shortsword and Quiver of 20 Arrows", "Shortsword"],
    thirdSelection: ["Burglar's Pack", "Dungeoneer's Pack", "Explorer's Pack"],
    fourthSelection: ["Leather Armor", "Two Dagger and Thieves' Tools"]
};

var sorcererEquipment = {
    firstSelection: ["Light Crossbow and 20 Bolts", "Any Simple Weapon"],
    secondSelection: ["Component Pouch", "Arcane Focus"],
    thirdSelection: ["Dungeoneer's Pack", "Explorer's Pack"],
    fourthSelection: ["Two Daggers"]
};

var warlockEquipment = {
    firstSelection: ["Light Crossbow and 20 Bolts", "Any Simple Weapon"],
    secondSelection: ["Component Pouch", "Arcane Focus"],
    thirdSelection: ["Scholar's Pack", "Dungeoneer's Pack"],
    fourthSelection: ["Leather Armor", "Any Simple Weapon and Two Daggers"]
};

var wizardEquipment = {
    firstSelection: ["Quarterstaff", "Dagger"],
    secondSelection: ["Component Pouch", "Arcane Focus"],
    thirdSelection: ["Scholar's Pack", "Explorer's Pack"],
    fourthSelection: ["Spellbook (with 6 1st Level Spells)"]
};



//roll 4d6 function
var roll4D6 = function () {
    // highest three rolls
    var minRoll; //the min roll
    var sum; //the sum of the highest three
    //roll the 6 side die
    var roll1 = Math.floor(Math.random() * 6) + 1;
    var roll2 = Math.floor(Math.random() * 6) + 1;
    var roll3 = Math.floor(Math.random() * 6) + 1;
    var roll4 = Math.floor(Math.random() * 6) + 1;

    //pick the min number and three
    minRoll = Math.min(roll1, roll2, roll3, roll4);

    //add up all the rolls and subtract the min
    sum = roll1 + roll2 + roll3 + roll4 - minRoll;

    return sum;
}

//get the correct skills array for passed in background
var getBackgroundSkill = function (selected_Background) {
    var skillsArray;

    //update skill array
    switch (selected_Background) {
        case 'Acolyte':
            skillsArray = acolyteSkills;
            break;
        case 'Charlatan':
            skillsArray = charlatanSkills;
            break;
        case 'Criminal':
            skillsArray = criminalSkills;
            break;
        case 'Entertainer':
            skillsArray = entertainerSkills;
            break;
        case 'Folk Hero':
            skillsArray = folkHeroSkills;
            break;
        case 'Guild Artisan':
            skillsArray = guildArtisanSkills;
            break;
        case 'Hermit':
            skillsArray = hermitSkills;
            break;
        case 'Noble':
            skillsArray = nobleSkills;
            break;
        case 'Outlander':
            skillsArray = outlanderSkills;
            break;
        case 'Sage':
            skillsArray = sageSkills;
            break;
        case 'Sailor':
            skillsArray = sailorSkills;
            break;
        case 'Soldier':
            skillsArray = soldierSkills;
            break;
        case 'Urchin':
            skillsArray = urchinSkills;
            break;
    }

    return skillsArray;
}


//get the correct skills array for passed in class
var getClassSkill = function (selected_Class) {
    var skillsArray;

    //update skill array
    switch (selected_Class) {
        case 'Barbarian':
            skillsArray = barbarianSkills;
            break;
        case 'Bard':
            skillsArray = bardSkills;
            break;
        case 'Cleric':
            skillsArray = clericSkills;
            break;
        case 'Druid':
            skillsArray = druidSkills;
            break;
        case 'Fighter':
            skillsArray = fighterSkills;
            break;
        case 'Monk':
            skillsArray = monkSkills;
            break;
        case 'Paladin':
            skillsArray = paladinSkills;
            break;
        case 'Ranger':
            skillsArray = rangerSkills;
            break;
        case 'Rogue':
            skillsArray = rogueSkills;
            break;
        case 'Sorcerer':
            skillsArray = sorcererSkills;
            break;
        case 'Warlock':
            skillsArray = warlockSkills;
            break;
        case 'Wizard':
            skillsArray = wizardSkills;
            break;
    }

    return skillsArray;
}

//get the correct skills array for passed in race and subrace
var getRaceSkill = function (selected_Race, selected_Subrace) {
    var skillsArray;

    //update skill array
    switch (selected_Race) {
        case 'Dwarf':
            skillsArray = dwarfSkills;
            break;
        case 'Elf':
            skillsArray = elfSkills;
            break;
        case 'Halfling':
            skillsArray = halflingSkills;
            break;
        case 'Human':
            if (selected_Subrace == 'Variant') {
                skillsArray = humanVariantSkills;
            } else {
                skillsArray = humanStandardSkills;
            }
            break;
        case 'Dragonborn':
            skillsArray = dragonbornSkills;
            break;
        case 'Gnome':
            skillsArray = gnomeSkills;
            break;
        case 'Half-Elf':
            skillsArray = half_ElfSkills;
            break;
        case 'Half-Orc':
            skillsArray = half_OrcSkills;
            break;
        case 'Tiefling':
            skillsArray = tieflingSkills;
            break;
    }

    return skillsArray;
}


var getClassEquipment = function (selected_Class) {
    var skillsObject;

    //update skill array
    switch (selected_Class) {
        case 'Barbarian':
            skillsObject = barbarianEquipment;
            break;
        case 'Bard':
            skillsObject = bardEquipment;
            break;
        case 'Cleric':
            skillsObject = clericEquipment;
            break;
        case 'Druid':
            skillsObject = druidEquipment;
            break;
        case 'Fighter':
            skillsObject = fighterEquipment;
            break;
        case 'Monk':
            skillsObject = monkEquipment;
            break;
        case 'Paladin':
            skillsObject = paladinEquipment;
            break;
        case 'Ranger':
            skillsObject = rangerEquipment;
            break;
        case 'Rogue':
            skillsObject = rogueEquipment;
            break;
        case 'Sorcerer':
            skillsObject = sorcererEquipment;
            break;
        case 'Warlock':
            skillsObject = warlockEquipment;
            break;
        case 'Wizard':
            skillsObject = wizardEquipment;
            break;
    }

    return skillsObject;
}

//get input boost scores for the choose two
var calcChooseTwoScores = function (inputBoost) {

    for (var i = 0; i < inputBoost.length; i++) {
        if (inputBoost == "STR")
            STR++
    }
}

//calc input boost scores and return them in an array
var calcAbilityScores = function (selected_Race, selected_Subrace, inputBoost, STR, DEX, CON, INT, WIS, CHR) {
    var abilityArray = []; //afer all calculation place abilities into array

    //update skill array
    switch (selected_Race) {
        case 'Dwarf':
            if (selected_Subrace == "Hill")
                WIS++; //+1 WIS
            if (selected_Subrace == "Mountain")
                STR += 2; //+2 STR
            break;
        case 'Elf':
            DEX += 2; //DEX +2
            if (selected_Subrace == "High")
                INT++; //INT +1
            if (selected_Subrace == "Wood")
                WIS++;
            if (selected_Subrace == "Drow")
                CHR++;
            break;
        case 'Halfling':
            DEX += 2;
            if (selected_Subrace == "Lightfoot")
                CHR++;
            if (selected_Subrace == "Stout")
                CON++;
            break;
        case 'Human':
            if (selected_Subrace == 'Standard') {
                STR++;
                DEX++;
                CON++;
                INT++;
                WIS++;
                CHR++;
            }
            if (selected_Subrace == "Variant") {
                //choose two boost abilities based in the inputBoost array passed in
                for (var i = 0; i < inputBoost.length; i++) {
                    if (inputBoost[i] == "STR")
                        STR++;
                    if (inputBoost[i] == "DEX")
                        DEX++;
                    if (inputBoost[i] == "CON")
                        CON++;
                    if (inputBoost[i] == "INT")
                        INT++;
                    if (inputBoost[i] == "WIS")
                        WIS++;
                    if (inputBoost[i] == "CHR")
                        CHR++;
                }
            }
            break;
        case 'Dragonborn':
            STR += 2;
            CHR++;
            break;
        case 'Gnome':
            INT += 2;
            if (selected_Subrace == "Forest")
                DEX++;
            if (selected_Subrace == "Rock")
                CON++;
            break;
        case 'Half-Elf':
            CHR += 2;
            //choose two boost abilities based in the inputBoost array passed in
            for (var i = 0; i < inputBoost.length; i++) {
                if (inputBoost[i] == "STR")
                    STR++;
                if (inputBoost[i] == "DEX")
                    DEX++;
                if (inputBoost[i] == "CON")
                    CON++;
                if (inputBoost[i] == "INT")
                    INT++;
                if (inputBoost[i] == "WIS")
                    WIS++;
                if (inputBoost[i] == "CHR")
                    CHR++;
            }
            break;
        case 'Half-Orc':
            STR += 2;
            CON++;
            break;
        case 'Tiefling':
            CHR += 2;
            INT++;
            break;
    }

    //add to array
    abilityArray.push(STR);
    abilityArray.push(DEX);
    abilityArray.push(CON);
    abilityArray.push(INT);
    abilityArray.push(WIS);
    abilityArray.push(CHR);

    //if > 20 make it 20
    for (var i = 0; i < abilityArray.length; i++) {
        if (abilityArray[i] > 20)
            abilityArray[i] = 20;
    }


    return abilityArray;
}

//function constructor for character
function Character(abilityScores, skills, equipment, race_subrace, _class, background, name) {
    this.abilityArray = abilityScores;
    this.skillsArray = skills;
    this.equipmentArray = equipment;
    this.race_subrace = race_subrace;
    this.class = _class;
    this.background = background;
    this.name = name;
}



var options = {

    first: {
        num: 1,
        prompt: "Pick a thing",
        o_list: ["Thing", "Thing2", "Thing3"]
    },
    second: {
        num: 2,
        prompt: "Pick 2 things",
        o_list: ["Thing", "Thing2", "Thing3"]
    }
};




//jquery functions
$(function () {

    //bind change of images to card deck for our dynamic character creation
    $('.card-deck').on('change', '.race', function () {
        var race;
        console.log("in here");
    });




    //check to see if basics pill has been complete if so go to ability pill
    $('#basicsBtnNext').click(function () {
        //get next pill id
        var id = $('.nav-pills > .nav-item > .active').parent().next('li').find('a').attr('id');
        //check to see if the race pill is complete. If so move to next pill. If not display alert.
        if (id === "pills-ability-tab") {
            //get selected race
            var selected_Race = $('.race_Selected option:selected').text();
            var selected_Subrace = $('.subrace_Selected option:selected').text();
            var selected_Class = $('.class_Selected option:selected').text();
            var selected_Background = $('.background_Selected option:selected').text();
            //display alert is any selectiong has not been complete
            if (selected_Race === "Choose..." || selected_Subrace === "Choose..." || selected_Class === "Choose..." || selected_Background === "Choose...") {
                //show alert and return because we are not going to the next tab
                $('#basicsAlert').show();
                return;
            }
            //add disabled class for next pill if does not have it
            if ((!$('#' + id).hasClass('disabled'))) {
                $('#' + id).addClass('disabled');
            }
        }

        //remove disabled class from pill if it has it
        if ($('#' + id).hasClass('disabled')) {
            $('#' + id).removeClass('disabled');
        }
        //if alert is shown on the race pill hide it
        $('#basicsAlert:visible').hide();
        //click it, go to ability pill
        jQuery('#' + id)[0].click();

    });

    //next button for the baics pill is clicked we can populate the badges for the ability score boost.
    //the ability score boost depends on race and subrace
    //badges get placed in the ability pill
    $('#basicsBtnNext').click(function () {
        //get selected race and subrace
        var selected_Race = $('.race_Selected option:selected').text();
        var selected_Subrace = $('.subrace_Selected option:selected').text();
        //empty out the ability boost badges div
        $('#abilityBoostBadges').empty();
        //populate based on race and subrace
        switch (selected_Race) {
            case 'Dwarf':
                //add dwarf badge
                $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + dwarfAbility[0] + " +" + dwarfAbility[1] + "</span>");
                //add hill badge
                if (selected_Subrace === "Hill") {
                    $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + hillAbility[0] + " +" + hillAbility[1] + "</span>");
                }
                //add mountain badge
                if (selected_Subrace === "Mountain") {
                    $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + mountainAbility[0] + " +" + mountainAbility[1] + "</span>");

                }
                break;
            case 'Elf':
                //add elf badge
                $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + elfAbility[0] + " +" + elfAbility[1] + "</span>");
                //add high badge
                if (selected_Subrace === "High") {
                    $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + highAbility[0] + " +" + highAbility[1] + "</span>");
                }
                //add wood badge
                if (selected_Subrace === "Wood") {
                    $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + woodAbility[0] + " +" + woodAbility[1] + "</span>");

                }
                //add drow badge
                if (selected_Subrace === "Drow") {
                    $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + drowAbility[0] + " +" + drowAbility[1] + "</span>");

                }
                break;
            case 'Halfling':
                //add halfling badge
                $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + halflingAbility[0] + " +" + halflingAbility[1] + "</span>");
                //add lightfoot badge
                if (selected_Subrace === "Lightfoot") {
                    $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + lightfootAbility[0] + " +" + lightfootAbility[1] + "</span>");
                }
                //add stout badge
                if (selected_Subrace === "Stout") {
                    $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + stoutAbility[0] + " +" + stoutAbility[1] + "</span>");

                }
                break;
            case 'Human':
                //add standard badge
                if (selected_Subrace === "Standard") {
                    $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + standardAbility[0] + " +" + standardAbility[1] + "</span>");
                }
                //add variant badge
                if (selected_Subrace === "Variant") {
                    $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + variantAbility[0] + " +" + variantAbility[1] + "</span>");

                }
                break;
            case 'Dragonborn':
                //add dragonborn badge must be split up
                $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + dragonBornAbility[0] + " +" + dragonBornAbility[1] + "</span>");
                $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + dragonBornAbility[2] + " +" + dragonBornAbility[3] + "</span>");
                break;
            case 'Gnome':
                //add gnome badge
                $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + gnomeAbility[0] + " +" + gnomeAbility[1] + "</span>");
                //add forest badge
                if (selected_Subrace === "Forest") {
                    $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + forestAbility[0] + " +" + forestAbility[1] + "</span>");
                }
                //add rock badge
                if (selected_Subrace === "Rock") {
                    $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + rockAbility[0] + " +" + rockAbility[1] + "</span>");

                }
                break;
            case 'Half-Elf':
                //add half-elf badge must be split up
                $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + half_ElfAbility[0] + " +" + half_ElfAbility[1] + "</span>");
                $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + half_ElfAbility[2] + " +" + half_ElfAbility[3] + "</span>");
                break;
            case 'Half-Orc':
                //add half-orc badge must be split
                $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + half_OrcAbility[0] + " +" + half_OrcAbility[1] + "</span>");
                $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + half_OrcAbility[2] + " +" + half_OrcAbility[3] + "</span>");
                break;
            case 'Tiefling':
                //add tiefling badge must be split
                $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + tieflingAbility[0] + " +" + tieflingAbility[1] + "</span>");
                $('#abilityBoostBadges').append("<span class='badge badge-dark abilityBadges'>" + tieflingAbility[2] + " +" + tieflingAbility[3] + "</span>");
                break;
            default:
        }//end switch

    });

    //show the checkboxes if we need to choose 2 for boost ability scores
    $('#basicsBtnNext').click(function () {

        //get selected race and subrace
        var selected_Race = $('.race_Selected option:selected').text();
        var selected_Subrace = $('.subrace_Selected option:selected').text();

        //if alert is showing hide it
        $('#abilitiesChooseTwoAlert:visible').hide();
        //if choose two is showing hide it as well
        $('.abilityChooseTwo:visible').hide();

        //show choose two checkboxes if human race, and variant subrace
        if (selected_Race === 'Human' && selected_Subrace === 'Variant') {
            $('.abilityChooseTwo').show();
        }

        //show choose two checkboxes if race = half-elf: subrace = none
        if (selected_Race === 'Half-Elf' && selected_Subrace === 'None') {
            $('.abilityChooseTwo').show();
        }
    });

    //populate subrace selected options based on the selected race
    $('.race_Selected').change(function () {
        //get the selected option text
        var selected_Option = $('.race_Selected option:selected').text();
        // create a undefined subraceArray var
        var subrace;
        //assign the correct array subrace based on selected option
        switch (selected_Option) {
            case 'Dwarf':
                subrace = dwarfSubrace;
                break;
            case 'Elf':
                subrace = elfSubrace;
                break;
            case 'Halfling':
                subrace = halflingSubrace;
                break;
            case 'Human':
                subrace = humanSubrace;
                break;
            case 'Dragonborn':
                subrace = dragonbornSubrace;
                break;
            case 'Gnome':
                subrace = gnomeSubrace;
                break;
            case 'Half-Elf':
                subrace = halfElfSubrace;
                break;
            case 'Half-Orc':
                subrace = halfOrcSubrace;
                break;
            case 'Tiefling':
                subrace = tielflingSubrace;
                break;
            default: //choose ... case subrace becomes choose ...
                subrace = ["Choose..."];
        }//end switch
        //populated subrace selected options
        //empty out the current options
        $('.subrace_Selected').empty();
        //handle other options
        for (var i = 0; i < subrace.length; i++) {
            $('.subrace_Selected').append("<option value='" + i + "'>" + subrace[i] + "</option>");
        }
    });//end of subrace function

    //check to see if abilities pill has been done properly if so go to skills pill
    $('#abilityNextBtn').click(function () {
        //get next pill id
        var id = $('.nav-pills > .nav-item > .active').parent().next('li').find('a').attr('id');
        //check to see if ability pill is complete
        if (id === "pills-skill-tab") {
            if (!$('.abilityBtn').hasClass('active')) {
                //display alert to select a ability btn
                $('#abilitiesBtnAlert').show();
                return;
            }
        }

        //when ability next button is pressed and custom is active make sure all input is between 1-20
        //if custom btn selected/active only allow inputs 1-20 and no letters
        if ($('#customAbilityBtn').hasClass('active')) {
            //get all input values
            var strengthInput = $('#strengthInput').val();
            var dexterityInput = $('#dexterityInput').val();
            var intelligenceInput = $('#intelligenceInput').val();
            var constitutionInput = $('#constitutionInput').val();
            var wisdomInput = $('#wisdomInput').val();
            var charismaInput = $('#charismaInput').val();

            //input is not between 1 and 20
            if (!(strengthInput >= 1 && strengthInput <= 20 && dexterityInput >= 1 && dexterityInput <= 20 && intelligenceInput >= 1 && intelligenceInput <= 20 &&
                constitutionInput >= 1 && constitutionInput <= 20 && wisdomInput >= 1 && wisdomInput <= 20 && charismaInput >= 1 && charismaInput <= 20)) {
                //show alert
                $('#customInputAlert').show();
                return;
            }

            //if input is correct hide alert if visible
            $('#customInputAlert:visible').hide();
        }

        //remove disabled class from pill if it has it
        if ($('#' + id).hasClass('disabled')) {
            $('#' + id).removeClass('disabled');
        }
        //if alert is shown on the ability pill hide it
        $('#abilitiesBtnAlert:visible').hide();
        //click it, go to skills pill
        jQuery('#' + id)[0].click();
    });

    //skills button is clicked disable the others
    $('.abilityBtn').click(function () {
        //remove the active class from active button and add inactive
        $('.abilityBtn').removeClass('active').addClass('inactive');
        //remove inactive from clicked btn and add active
        $(this).removeClass('inactive').addClass('active');
    });

    //display alert for check greater thatn two selections
    $('.abilityChooseTwo input[type=checkbox]').click(function () {
        //hide abilities alert if visible
        $('#abilitiesChooseTwoAlert:visible').hide();
        //get the amount of selected check boxes
        var amountChecked = $(".abilityChooseTwo input:checked").length;
        //check to see amount of selected checkboxes
        if (amountChecked > 2) {
            //deselect the input
            $(this).prop('checked', false);
            //show alert to only select two
            $('#abilitiesChooseTwoAlert').show();

        }
    });

    //custom ability button clicked
    $('#customAbilityBtn').click(function () {
        //hide pointbuy arrows if pressed
        $('.pointbuyArrows:visible').hide();
        //enable all abilityInput if disabled
        $('.abilityInput').prop('readonly', false);
        //hide ability btn alert
        $('#abilitiesBtnAlert:visible').hide();
        //hide point-buy badge if showing
        $('#pointbuyBadge:visible').hide();
        //hide points buy alerts if showing
        $('#pointsbuyOutofBoundsAlert:visible').hide();
        $('#pointsbuyAllPointsUsed:visible').hide();
        //hide swap panel if showing
        $('#swapAbility:visible').hide();

    });

    //point buy ability button is clicked
    $('#pointbuyAbilityBtn').click(function () {
        //show the point buy arrows
        $('.pointbuyArrows').show();
        //show the pointbuy badge
        $('#pointbuyBadge').show();
        //change the value of the points used inside badge to zero
        $('#pointsUsed').text("0");

        //all input get a score of 8 to start
        $('#strengthInput').prop('value', "8");
        $('#dexterityInput').prop('value', "8")
        $('#intelligenceInput').prop('value', "8");
        $('#constitutionInput').prop('value', "8");
        $('#wisdomInput').prop('value', "8");
        $('#charismaInput').prop('value', "8");

        //disable all abilityInput so user can not change input
        $('.abilityInput').prop('readonly', true);
        //hide ability btn alert
        $('#abilitiesBtnAlert:visible').hide();
        //if custom alert is visible hide alert 
        $('#customInputAlert:visible').hide();
        //hide swap panel if showing
        $('#swapAbility:visible').hide();
        //hide points buy alerts
        $('#pointsbuyOutofBoundsAlert:visible').hide();
        $('#pointsbuyAllPointsUsed:visible').hide();

    })



    //preset ability btn is clicked
    $('#presetAbilityBtn').click(function () {
        //hide pointbuy arrows if pressed
        $('.pointbuyArrows:visible').hide();
        //enable all abilityInput if disabled
        $('.abilityInput').prop('readonly', true);
        //hide ability btn alert
        $('#abilitiesBtnAlert:visible').hide();
        //hide point-buy badge if showing
        $('#pointbuyBadge:visible').hide();
        //hide points buy alerts if showing
        $('#pointsbuyOutofBoundsAlert:visible').hide();
        $('#pointsbuyAllPointsUsed:visible').hide();
        // //if hide custom input alert if visible
        $('#customInputAlert:visible').hide();
        //show swapAbility
        $('#swapAbility').show();
        //assign preset values to input
        //all input get a score of 8 to start
        $('#strengthInput').prop('value', "15");
        $('#dexterityInput').prop('value', "14")
        $('#constitutionInput').prop('value', "13");
        $('#intelligenceInput').prop('value', "12");
        $('#wisdomInput').prop('value', "10");
        $('#charismaInput').prop('value', "8");
    });

    //roll ability btn is clicked
    $('#rollAbilityBtn').click(function () {
        //hide pointbuy arrows if pressed
        $('.pointbuyArrows:visible').hide();
        //disable all abilityInput 
        $('.abilityInput').prop('readonly', true);
        //hide ability btn alert
        $('#abilitiesBtnAlert:visible').hide();
        //hide point-buy badge if showing
        $('#pointbuyBadge:visible').hide();
        //hide points buy alerts if showing
        $('#pointsbuyOutofBoundsAlert:visible').hide();
        $('#pointsbuyAllPointsUsed:visible').hide();
        // //if hide custom input alert if visible
        $('#customInputAlert:visible').hide();
        //show swapAbility
        $('#swapAbility').show();
        //roll for the input values
        $('#strengthInput').prop('value', roll4D6());
        $('#dexterityInput').prop('value', roll4D6())
        $('#intelligenceInput').prop('value', roll4D6());
        $('#constitutionInput').prop('value', roll4D6());
        $('#wisdomInput').prop('value', roll4D6());
        $('#charismaInput').prop('value', roll4D6());
    });

    //swap abilities
    $('.swapAbility input[type=checkbox]').click(function () {
        //get the amount of selected check boxes
        var amountChecked = $('.swapAbility input:checked').length;
        var inputChecked = $('.swapAbility input:checked').attr('data-inputid');

        //check to see amount of selected checkboxes
        if (amountChecked == 2) {
            //get data-inputid for each input, the data-input id has the id of the input to swap
            //place into inputSwapID array
            var inputSwapID = [];
            $('.swapAbility input:checked').map(function () {
                inputSwapID.push($(this).attr('data-inputid'));
            });

            //get the input values to swap
            var inputSwap1 = $('#' + inputSwapID[0]).val();
            var inputSwap2 = $('#' + inputSwapID[1]).val();

            //swap the inputs
            $('#' + inputSwapID[0]).prop('value', inputSwap2);
            $('#' + inputSwapID[1]).prop('value', inputSwap1);

            //uncheck the two checkboxes
            $('.swapAbility input:checked').map(function () {
                $(this).prop('checked', false);
            });
        }
    });

    //arrows are clicked for the point buy ability
    $('.arrowBtn').click(function () {
        //get input id this affects
        var inputID = $(this).parent().parent().find('input').attr('id');
        //get value in input;
        var inputValue = $('#' + inputID).val();
        //get the points used
        var pointsUsed = $('#pointsUsed').text();

        //hide points buy alerts if showing
        $('#pointsbuyOutofBoundsAlert:visible').hide();
        $('#pointsbuyAllPointsUsed:visible').hide();

        //for up arrow: add to input
        if ($(this).hasClass('upArrow')) {
            //increment points used
            inputValue++;
            //increment by two if input value is 14 or 15
            if (inputValue == 14 || inputValue == 15) {
                pointsUsed++; //increment by two
                pointsUsed++;
            } else {
                pointsUsed++
            }
        }
        //for down arrow: subtract from input
        if ($(this).hasClass('downArrow')) {
            //decrement pointsused and input value
            inputValue--;
            //going from 14-13 or 15-14  subtract points used by 2
            if (inputValue == 13 || inputValue == 14) {
                pointsUsed--;
                pointsUsed--;
            } else {
                pointsUsed--;
            }
        }

        //  console.log(pointsUsed);
        //if points used is display rangeout of bounds alert
        if (inputValue > 15 || inputValue < 8) {
            $('#pointsbuyOutofBoundsAlert').show();
            return;
        }
        //display alert for points used
        if (pointsUsed > 27 || pointsUsed < 0) {
            $('#pointsbuyAllPointsUsed').show();
            return;
        }

        //change the points used badge
        $('#pointsUsed').text(pointsUsed);
        //change the input value 
        $('#' + inputID).prop('value', inputValue);

    });

    //ability input change for custom
    $('.abilityInput').change(function () {
        //if custom btn selected/active only allow inputs 1-20 and no letters
        if ($('#customAbilityBtn').hasClass('active')) {
            //get value
            var input = $(this).val();
            //input is not between 1 and 20
            if (!(input >= 1 && input <= 20)) {
                //show alert
                $('#customInputAlert').show();
                return;
            }


            //if input is correct hide alert if visible
            $('#customInputAlert:visible').hide();
        }
    });

    //get previous pill
    $(".btnPrevious").click(function () {
        //get previous pill id
        var id = $('.nav-pills > .nav-item > .active').parent().prev('li').find('a').attr('id');
        //check to see if the basics pill is previous If so disable the current pill
        //basics pill control rest of the pill options 
        if (id === "pills-basics-tab") {
            //get current tab
            var currentTabID = $('.nav-pills > .nav-item > .active').attr('id');
            //add disabled class for next pill if does not have it
            if ((!$('#' + currentTabID).hasClass('disabled'))) {
                $('#' + currentTabID).addClass('disabled');
            }
        }
        //click it 
        jQuery('#' + id)[0].click();
    }); // end of prev button function

    //populate the skills for background checkboxes
    $('#abilityNextBtn').click(function () {
        //get selected skill
        var selected_Background = $('.background_Selected option:selected').text();
        //for Array with all the skills from background
        var skillsArray;

        //get skill array for selected background
        skillsArray = getBackgroundSkill(selected_Background);

        //update panel heading
        $('#backgroundSkillPanelHeading').text("Skills From " + selected_Background + " Background:");

        //empty the checkbox div
        $('#backgroundSkillCheckBoxes').children().detach();

        //populate with the check boxes
        for (var i = 0; i < skillsArray.length; i++) {
            var html = "<div class='form-check form-check-inline'> <input class= 'form-check-input' type='checkbox' value='" + skillsArray[i] + "' checked disabled>" + "<label class='form-check-label' for='inlineCheckbox'>" + skillsArray[i] + "</label></div>"
            $('#backgroundSkillCheckBoxes').append(html);
        }
    });


    //populate the skills for class checkboxes
    $('#abilityNextBtn').click(function () {
        //get selected background and class
        var selected_Background = $('.background_Selected option:selected').text();
        var selected_Class = $('.class_Selected option:selected').text();
        //for Array with all the skills from background
        var classSkillsArray;
        var backgroundSkillsArray;

        //get skill array for selected background
        classSkillsArray = getClassSkill(selected_Class);
        backgroundSkillsArray = getBackgroundSkill(selected_Background);

        //update panel heading
        $('#classSkillsPanelHeading').text("Skills From " + selected_Class + " Class: Choose " + classSkillsArray[0]);

        //empty the checkbox fieldset element
        $('#classSkillCheckBoxes').children().detach();

        //populate element with the check boxes
        for (var i = 1; i < classSkillsArray.length; i++) {
            //html for checkboxs: two versions (1. unchecked 2. disabled)
            //use disabled for the already selected skills that background provides by defaults
            var htmlCheckBox = "<div class='form-check form-check'> <input class= 'form-check-input' type='checkbox' value='" + classSkillsArray[i] + "'>" + "<label class='form-check-label' for='checkbox'>" + classSkillsArray[i] + "</label></div>"
            var htmlDisabledCheckBox = "<div class='form-check form-check'> <input class= 'form-check-input' type='checkbox' value='" + classSkillsArray[i] + "'disabled>" + "<label class='form-check-label' for='checkbox'>" + classSkillsArray[i] + "</label></div>"

            //selected which html will be used 
            //if the background skills is in the class skills use the disabled checkbox html
            if (classSkillsArray[i] === backgroundSkillsArray[0] || classSkillsArray[i] === backgroundSkillsArray[1]) {
                $('#classSkillCheckBoxes').append(htmlDisabledCheckBox);
            } else {
                $('#classSkillCheckBoxes').append(htmlCheckBox);
            }
        }
    });

    //populate the skills for race checkboxes
    $('#abilityNextBtn').click(function () {
        //get selected background and class
        var selected_Background = $('.background_Selected option:selected').text();
        var selected_Race = $('.race_Selected option:selected').text();
        var selected_Subrace = $('.subrace_Selected option:selected').text();

        //for Array with all the skills from background
        var raceSkillsArray;
        var backgroundSkillsArray;

        //get skill array for selected background
        raceSkillsArray = getRaceSkill(selected_Race, selected_Subrace);
        backgroundSkillsArray = getBackgroundSkill(selected_Background);

        //update panel heading
        $('#raceSkillPanelHeading').text("Skills From " + selected_Race + " Race: Choose " + raceSkillsArray[0]);

        //empty the checkbox fieldset element
        $('#raceSkillCheckBoxes').children().detach();

        //populate element with the check boxes
        for (var i = 1; i < raceSkillsArray.length; i++) {
            //html for checkboxs: two versions (1. unchecked 2. disabled)
            //use disabled for the already selected skills that background provides by defaults
            var htmlCheckBox = "<div class='form-check form-check'> <input class= 'form-check-input' type='checkbox' value='" + raceSkillsArray[i] + "'>" + "<label class='form-check-label' for='checkbox'>" + raceSkillsArray[i] + "</label></div>"
            var htmlDisabledCheckBox = "<div class='form-check form-check'> <input class= 'form-check-input' type='checkbox' value='" + raceSkillsArray[i] + "'disabled>" + "<label class='form-check-label' for='checkbox'>" + raceSkillsArray[i] + "</label></div>"

            //selected which html will be used 
            //if the background skills is in the class skills use the disabled checkbox html
            if (raceSkillsArray[i] === backgroundSkillsArray[0] || raceSkillsArray[i] === backgroundSkillsArray[1]) {
                $('#raceSkillCheckBoxes').append(htmlDisabledCheckBox);
            } else {
                $('#raceSkillCheckBoxes').append(htmlCheckBox);
            }
        }
    });

    //display alert for skills over selection checkboxes
    //propagate event to the .class_raceSkills since we are detaching the input element see functions above
    $('.class_raceSkills').on('click', 'input[type=checkbox]', function () {
        //get race and class max selections
        var selected_Race = $('.race_Selected option:selected').text();
        var selected_Subrace = $('.subrace_Selected option:selected').text();
        var selected_Class = $('.class_Selected option:selected').text();
        var raceSkillsArray = getRaceSkill(selected_Race, selected_Subrace);
        var classSkillsArray = getClassSkill(selected_Class);
        var maxClassSelection = classSkillsArray[0];
        var maxRaceSelection = raceSkillsArray[0];
        var maxCheckInput;

        //hide skills alert if visible
        $('#skillsAlertOverSelection:visible').hide();
        //console.log("before");
        //get id for which checkboxes is this (class or race)
        var panelID = $(this).parent().parent().attr('id');

        //get the amount of selected check boxes 
        var amountChecked = $("#" + panelID + " input:checked").length;

        //check which selection we are making: class or race and assign the max amount
        if (panelID == 'classSkillCheckBoxes')
            maxCheckInput = maxClassSelection;
        if (panelID == 'raceSkillCheckBoxes')
            maxCheckInput = maxRaceSelection;

        //check to see if we have gone over the amount if so uncheck the box
        if (amountChecked >= maxCheckInput + 1) {
            //deselect the input
            $(this).prop('checked', false);
            // show alert to only select two
            $('#skillsAlertOverSelection').show();

        }
    });

    //check to see if all skills have been selected, then go to the next pill
    $('#skillsNextBtn').click(function () {
        //get race and class max selections
        var selected_Background = $('.background_Selected option:selected').text();
        var selected_Race = $('.race_Selected option:selected').text();
        var selected_Subrace = $('.subrace_Selected option:selected').text();
        var selected_Class = $('.class_Selected option:selected').text();
        var raceSkillsArray = getRaceSkill(selected_Race, selected_Subrace);
        var classSkillsArray = getClassSkill(selected_Class);
        var backgroundSkillsArray = getBackgroundSkill(selected_Background);
        var maxClassSelection = classSkillsArray[0];
        var maxRaceSelection = raceSkillsArray[0];

        //get next pill id
        //get next pill id
        var id = $('.nav-pills > .nav-item > .active').parent().next('li').find('a').attr('id');

        //get amount checked for class
        var amountCheckedClass = $("#classSkillCheckBoxes input:checked").length;
        //get amount checked for race
        var amountCheckedRace = $('#raceSkillCheckBoxes input:checked').length;

        //hide alert if showing
        $('#skillsAlertUnderSelection:visible').hide();

        //alert if checked amount is not equal to needed amount
        if (amountCheckedClass != maxClassSelection) {
            $('#skillsAlertUnderSelection').show();
            return; //don't got to next pill
        }
        //handle our special case for race selection
        //if our background disabled out race skills selection when we only have one skill to select
        //we must handle this special case seperatly
        if (amountCheckedRace != maxRaceSelection) {


            //special case for race
            if (selected_Race == 'Elf' || selected_Race == 'Half-Orc') {
                if (backgroundSkillsArray[0] == raceSkillsArray[1] || backgroundSkillsArray[1] == raceSkillsArray[1]) {
                    //remove disabled class from pill if it has it
                    if ($('#' + id).hasClass('disabled')) {
                        $('#' + id).removeClass('disabled');
                    }
                    //click it, go to skills pill
                    jQuery('#' + id)[0].click();
                    return; //clicked on next pill
                }
            }
            //don't meet contions show alert
            $('#skillsAlertUnderSelection').show();
            return; //don't got to next pill
        }

        //remove disabled class from pill if it has it
        if ($('#' + id).hasClass('disabled')) {
            $('#' + id).removeClass('disabled');
        }
        //click it, go to skills pill
        jQuery('#' + id)[0].click();
        return; //clicked on next pill
    });


    $('#skillsNextBtn').click(function () {
        //get selected class
        var selected_Class = $('.class_Selected option:selected').text();
        //get proper class euipment object
        var equipmentObject = getClassEquipment(selected_Class);

        //detach the old equipment radio boxes
        $('#equipmentRadioBoxes').children().detach();

        //grabbing the values for each selection: each selection will be a radiobox
        var nameValuePairs = Object.entries(equipmentObject);

        for (var j = 0; j < nameValuePairs.length; j++) {
            //get an array of equipment for each selection j
            var equipment = nameValuePairs[j][1];
            var appenedHtml = null; //define the appended html string
            //due to jquery autoclosing tags the we must build our html for each radio box selections
            for (var i = 0; i < equipment.length; i++) {

                var openFormHtml = "<form class='form-group col-sm-6 col-md-6 col-l-6'> <fieldset><legend class='col-form-label pt-0 radioBoxLegend'>Choose One:</legend>"
                var htmlChecked = "<div class='radio'><label><input type='radio' name='optradio' value='" + equipment[i] + "' checked>&nbsp" + equipment[i] + "</label></div>"
                var htmlUnchecked = "<div class='radio'><label><input type='radio' name='optradio' value='" + equipment[i] + "'>&nbsp" + equipment[i] + "</label></div>"
                var htmlClosingFormTags = "</fieldset></form>"

                //append opending tags if i = 0
                if (i == 0) {
                    appenedHtml = openFormHtml;
                    appenedHtml += htmlChecked;
                } else { //append the middle radios
                    appenedHtml += htmlUnchecked;
                }
                //append the closing tag if at the end
                if (i == equipment.length - 1)
                    appenedHtml += htmlClosingFormTags;

            }
            //append the built string of html for each selection
            if (appenedHtml != null)
                $('#equipmentRadioBoxes').append(appenedHtml);
        }//end outer for loop
    });

    //grab all required info and send to backend and receive additional options 
    $('#equipmentNextBtn').click(function () {
        var selected_Background = $('.background_Selected option:selected').text();
        var selected_Race = $('.race_Selected option:selected').text();
        var selected_Subrace = $('.subrace_Selected option:selected').text();
        var selected_Class = $('.class_Selected option:selected').text();
        var nameInput = $('#nameInput').val();


        //get ability score values as numbers
        var STR = Number($('#strengthInput').val());
        var DEX = Number($('#dexterityInput').val());
        var INT = Number($('#intelligenceInput').val());
        var CON = Number($('#constitutionInput').val());
        var WIS = Number($('#wisdomInput').val());
        var CHR = Number($('#charismaInput').val());

        //get the added boost abilities id and place inside input
        var inputBoost = [];
        $('.abilityChooseTwo input:checked').map(function () {
            inputBoost.push($(this).attr('value'));
        });

        //get ability scores in a array
        var abilityScores = calcAbilityScores(selected_Race, selected_Subrace, inputBoost, STR, DEX, CON, INT, WIS, CHR);

        //get skills
        var skillsArray = [];
        $('#pills-skill input:checked').map(function () {
            skillsArray.push($(this).val());
        }).get();

        //get equipment
        var equipmentArray = [];
        $('#pills-equipment input:checked').map(function () {
            equipmentArray.push($(this).val());
        }).get()

        //CREATE character object
        var myCharacter = new Character(abilityScores, skillsArray, equipmentArray, selected_Race + " " + selected_Subrace, selected_Class, selected_Background, nameInput);
        //jsonify the object
        var myJSONCharacter = JSON.stringify(myCharacter);
        console.log(myJSONCharacter);

        //send to backend 
        $.ajax({
            type: "POST",
            url: "/get_options",
            data: myJSONCharacter,
            success: function (optionsSent) {
                //remove all elemtns from panel
                $('#optionsPanel').children().detach();

                var nameValuePairs = Object.entries(optionsSent);

                for (var i = 0; i < nameValuePairs.length; i++) {
                    //grab options and details
                    var options = nameValuePairs[i][1];
                    var amountOfPicks = options.num;
                    var prompt = options.prompt;
                    var listOfOptions = options.o_list;
                    console.log(amountOfPicks);
                    console.log(prompt);
                    console.log(listOfOptions);

                    //html with opening tag and prompt
                    var html = ' <div class="col-sm-6 col-md-6 col-lg-6"><div class="panel panel-default "><div class="panel-heading">' + prompt + '</div><div class="panel-body"> <form> <fieldset class="form-group">';

                    //add options
                    for (var j = 0; j < listOfOptions.length; j++) {
                        var checked = '<div class="form-check form-check"><input class="form-check-input" type="checkbox" value="' + listOfOptions[j] + '" checked><label class="form-check-label" for="inlineCheckbox1">' + listOfOptions[j] + '</label> </div>';
                        var unchecked = '<div class="form-check form-check"><input class="form-check-input" type="checkbox" value="' + listOfOptions[j] + '"><label class="form-check-label" for="inlineCheckbox1">' + listOfOptions[j] + '</label> </div>';
                        if (j <= amountOfPicks - 1) {
                            html += checked;
                        } else {
                            html += unchecked;
                        }
                    }
                    //close and append
                    var closingTags = '</fieldset></form></div></div></div>';
                    html += closingTags;
                    $('#optionsPanel').append(html);


                }

                //go to next pill
                var id = $('.nav-pills > .nav-item > .active').parent().next('li').find('a').attr('id');
                //remove disabled class from pill if it has it
                if ($('#' + id).hasClass('disabled')) {
                    $('#' + id).removeClass('disabled');
                }

                jQuery('#' + id)[0].click();
            },
            error: function () {
                //show alert
                $('#equipmentAlert').show();
            },
        });


    });

    //last api call for character creation
    //add 
    $('#optionsBtn').click(function () {

        //get selected options
        var optionsArray = [];
        $('#optionsPanel input:checked').map(function () {
            optionsArray.push($(this).val());
        }).get();

        console.log(optionsArray);
        //jsonify the object
        var myJSONCOptions = JSON.stringify(optionsArray);

        console.log(myJSONCOptions);


        $.ajax({
            type: "POST",
            url: "/create_character",
            data: myJSONOptions,
            success: function (character) {
                //go to next pill
                var id = $('.nav-pills > .nav-item > .active').parent().next('li').find('a').attr('id');
                //remove disabled class from pill if it has it
                if ($('#' + id).hasClass('disabled')) {
                    $('#' + id).removeClass('disabled');
                }

                jQuery('#' + id)[0].click();


            },
            error: function () {
                //show alert
                $('#equipmentAlert').show();
            },

        });



    });

    //selecting a character
    $('.cardLink').click(function (e) {
        //stop link from firing
        e.preventDefault();
        //get character id from attribute
        var characterID = $(this).attr('data-characterID');
        console.log(characterID);
    });


    //clone the inner modal for the close button/ resetting modal
    var clonedInnerModal = $('#innerModal').clone(true);

    //replace modal with innermodal clone when modal close btn is clicked
    $('#addCharacterModalContainer').on('hidden.bs.modal', function () {
        //hide modal
        // $('#innerModal').modal('hide');
        //remove innermodal
        $('#innerModal').detach();
        //append cloned modal to modal container
        $('#addCharacterModalContainer').append(clonedInnerModal);
        //get the clone inner modal again
        clonedInnerModal = $('#innerModal').clone(true);

    });




});

