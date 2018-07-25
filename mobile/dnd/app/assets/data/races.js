export var races = [
    {'key':'1','value':'Dwarf'},
    {'key':'2','value':'Elf'},
    {'key':'3','value':'Halfling'},
    {'key':'4','value':'Human'},
    {'key':'5','value':'Dragonborn'},
    {'key':'6','value':'Gnome'},
    {'key':'7','value':'Half-Elf'},
    {'key':'8','value':'Half-Orc'},
    {'key':'9','value':'Tiefling'},
];

export const classSkills = 
{
    '':
    [
        'Notloaded 1',
        [
            'Not Loaded',
        ],
    ],
    'Barbarian':
    [
        'Choose 2',
        [
            'Animal Handling',
            'Athletics',
            'Intimidation',
            'Nature',
            'Perception',
            'Survival',
        ],
    ],
    'Bard':
    [
        'Choose 3',
        [
            'Athletics',
            'Acrobatics',
            'Sleight of Hand',
            'Stealth',
            'Arcana',
            'History',
            'Investigation',
            'Nature',
            'Religion',
            'Animal Handling',
            'Insight',
            'Medicine',
            'Perception',
            'Survival',
            'Deception',
            'Intimidation',
            'Performance',
            'Persuasion',
        ]
    ],
    'Cleric':
    [
        'Choose 2',
        [
            'History',
            'Insight',
            'Medicine',
            'Perception',
            'Religion',
        ],
    ],
    'Druid':
    [
        'Choose 2',
        [
            'Arcana',
            'Animal Handling',
            'Insight', 
            'Medicine',
            'Nature',
            'Perception',
            'Religion',
            'Survival',
        ],
    ],
    'Fighter':
    [
        'Choose 2',
        [
            'Acrobatics',
            'Animal Handling', 
            'Athletics', 
            'History', 
            'Insight', 
            'Intimidation', 
            'Perception', 
            'Survival',
        ],
    ],
    'Monk':
    [
        'Choose 2',
        [
            'Acrobatics',
            'Athletics',
            'History',
            'Insight',
            'Religion',
            'Stealth',
        ],
    ],
    'Paladin':
    [
        'Choose 2',
        [
            'Athletics',
            'Insight',
            'Intimidation',
            'Medicine',
            'Persuasion',
            'Religion',
        ],
    ],
    'Ranger':
    [
        'Choose 2',
        [

        ],
    ],
    'Rogue':
    [
        'Choose 3',
        [
            'Animal Handling',
            'Athletics',
            'Insight',
            'Investigation',
            'Nature', 
            'Perception',
            'Stealth',
            'Survival',
        ],
    ],
    'Sorcerer':
    [
        'Choose 2',
        [
            'Arcana',
            'Deception',
            'Insight',
            'Intimidation',
            'Persuasion',
            'Religion',
        ],
    ],
    'Warlock':
    [
        'Choose 2',
        [
            'Arcana',
            'Deception',
            'History',
            'Intimidation',
            'Investigation',
            'Nature',
            'Religion'
        ],
    ],
    'Wizard':
    [
        'Choose 2',
        [
            'Arcana',
            'History', 
            'Insight',
            'Investigation',
            'Medicine',
            'Religion',
        ],
    ],
}

export const backgroundSkills = {
    '':
        {
            'Skills':[
                [
                    {'label':'Not Loaded', 'checked' : true}
                ],
            ]
        },
    
    'Acolyte' : 
     {
         'Skills':[
             [
                 {'label':'Insight'},
                 {'label':'Religion'},
             ],
        ]
 
     },

     'Charlatan' : 
     {
         'Skills':[
             [
                 {'label':'Deception','checked' : true},
                 {'label':'Sleight of Hand','checked' : true},
             ],
        ]
 
     },

     'Criminal' : 
     {
         'Skills':[
             [
                 {'label':'Deception'},
                 {'label':'Stealth'},
             ],
        ]
 
     },

     'Entertainer' : 
     {
         'Skills':[
             [
                 {'label':'Acrobatics'},
                 {'label':'Performance'},
             ],
        ]
 
     },

     'Folk Hero' : 
     {
         'Skills':[
             [
                 {'label':'Animal Handling'},
                 {'label':'Survival'},
             ],
        ]
 
     },

     'Guild Artisan' : 
     {
         'Skills':[
             [
                 {'label':'Insight'},
                 {'label':'Persuasion'},
             ],
        ]
 
     },

     'Hermit' : 
     {
         'Skills':[
             [
                 {'label':'Medicine'},
                 {'label':'Religion'},
             ],
        ]
 
     },

     'Noble' : 
     {
         'Skills':[
             [
                 {'label':'History'},
                 {'label':'Persuasion'},
             ],
        ]
 
     },

     'Outlander' : 
     {
         'Skills':[
             [
                 {'label':'Athletics'},
                 {'label':'Survival'},
             ],
        ]
 
     },

     'Sage' : 
     {
         'Skills':[
             [
                 {'label':'Arcana'},
                 {'label':'History'},
             ],
        ]
 
     },

     'Sailor' : 
     {
         'Skills':[
             [
                 {'label':'Athletics'},
                 {'label':'Perception'},
             ],
        ]
 
     },

     'Soldier' : 
     {
         'Skills':[
             [
                 {'label':'Athletics'},
                 {'label':'Intimidation'},
             ],
        ]
 
     },

     'Urchin' : 
     {
         'Skills':[
             [
                 {'label':'Sleight of Hand'},
                 {'label':'Disguice kit theives\'s tools'},
             ],
        ]
 
     },

}

export var chars = [
    {'key':'1','race':'Human', 'subrace':'Variant', 'class':'Cleric', 'background':'Criminal'},
    {'key':'2','race':'Halfling', 'subrace':'Stout','class':'Bard', 'background':'Sage'},
];




export const raceSkill =
{
    '':
    {
        '': ['Choose 1',['None']],
        'None': ['Choose 1',['None']],
    },
    'Dwarf':
    {
        'Hill': ['Choose 1',['None']],
        'Mountain': ['Choose 1',['None']],

    },
    'Elf':
    {
        'High':['Choose 1',['None']],
        'Wood':['Choose 1',['None']],
        'Drow':['Choose 1',['None']],
    },
    'Halfling':
    {
        'Lightfoot':['Choose 1',['None']],
        'Stout':['Choose 1',['None']],
    },
    'Human':
    {
        'Standard':[['None'],[]],
        'Variant':
        [
            'Choose 1',
            ['Athletics',
            'Acrobatics',
            'Sleight of Hand',
            'Stealth',
            'Arcana',
            'History',
            'Investigation',
            'Nature',
            'Religion',
            'Animal Handling',
            'Insight','Medicine',
            'Perception',
            'Survival',
            'Deception',
            'Intimidation', 
            'Performance', 
            'Persuasion',
            ],
        ]
    },
    'Dragonborn':
    {
        '': ['Choose 1',['None']],
        'None': ['Choose 1',['None']],
    },
    'Gnome':
    {
        'Forest': ['Choose 1',['None']],
        'Rock': ['Choose 1',['None']],
    },
    'Half-Elf':
    {
        '':
        [
            'Choose 2',
            ['Athletics',
            'Acrobatics',
            'Sleight of Hand',
            'Stealth',
            'Arcana',
            'History',
            'Investigation',
            'Nature',
            'Religion',
            'Animal Handling',
            'Insight','Medicine',
            'Perception',
            'Survival',
            'Deception',
            'Intimidation', 
            'Performance', 
            'Persuasion',
            ],
        ]
    },
    'Half-Orc':
    {
        '': ['Choose 1',['Intimidation']],
    },
    'Tiefling':
    {
        '': ['Choose 1',['None']],
        'None': ['Choose 1',['None']],
    }
}

export const skillList =
{
    'Athletics': false,
    'Acrobatics':false,
    'Sleight of Hand':false,
    'Stealth':false,
    'Arcana':false,
    'History':false,
    'Investigation':false,
    'Nature':false,
    'Religion':false,
    'Animal Handling':false,
    'Insight':false,
    'Medicine':false,
    'Perception':false,
    'Survival':false,
    'Deception':false,
    'Intimidation':false,
    'Performance':false,
    'Persuasion':false,
}

export var classWeapons = 
    {
        '':
        {
            'Equipment':
            {
                'One':[
                    {'label':'Not Loaded'}
                ],
            },
        },
     'Barbarian' : 
     {
         'Equipment':[
             [
                 {'label':'Great Axe'},
                 {'label':'Martial Weapons'},
             ],
             [
                 {'label':'2 Handaxes'},
                 {'label':'Simple weapon'},
             ],
             [
                {'label':'Explorer\'s pack'},
            ],
            [
                {'label':'2 javelins'},
            ],
        ]
 
     },
     
     'Bard' : 
     {
         'Equipment':
         [
             [
                 {'label':'Rapier'},
                 {'label':'Longsword'},
                 {'label':'Simple Weapon'},
             ],
             [
                 {'label':'Diplomat\'s pack'},
                 {'label':'Entertainer\'s pack'},
             ],
             [
                 {'label':'Lute'},
                 {'label':'Musical instrument'},
             ],
             [
                 {'label':'Leather armor & a dagger'},
             ],
        ]
 
     },
    
     'Cleric': 
     {
         'Equipment':
         [
            [
                {'label':'Mace'},
                {'label':'Warhammer'},
            ],
            [
                {'label':'Scale mail'},
                {'label':'Leather armor'},
                {'label':'Chain mail'}
            ],
            [
                {'label':'Light crossbow & 20 bolts'},
                {'label':'Simple weapon'},
            ],
            [
                {'label':'Priest\'s pack'},
                {'label':'Explorer\'s pack'},
            ],
            [
                {'label':'Shield'},
                {'label':'Holy symbol'},
            ],
        ]
     },
     'Druid': 
     {
         'Equipment':
         [
            [
                {'label':'Wooden shield'},
                {'label':'Simple weapon'}
            ],
            [
                {'label':'Scimitar'},
                {'label':'Simple melee weapon'},
            ],
            [
                {'label':'Leather armor, explorer\'s pack, & a druidic focus'},
            ],
         ]
     },
     'Fighter':
     {
        'Equipment':
        [
           [
               {'label':'Chain mail'},
               {'label':'Leather armor, longbow & 20 arrow'}
           ],
           [
               {'label':'Martial weapon & shield'},
               {'label':'Two martial weapons'},
           ],
           [
               {'label':'A light crossbow & 20 bolts'},
               {'label':'Two handaxes'},
           ],
           [
            {'label':'Dungeoneer\'s pack'},
            {'label':'Explorer\'s pack'},
            ],
        ]
     },
     'Monk': 
     {
        'Equipment':
        [
           [
               {'label':'Shortsword'},
               {'label':'Simple weapon'}
           ],
           [
               {'label':'Dungeoneer\'s pack'},
               {'label':'Explorer\'s pack'},
           ],
           [
               {'label':'10 darts'},
           ],
        ]

     },
 
     'Paladin':  {
        'Equipment':
        [
           [
               {'label':'Martial weapon & shield'},
               {'label':'Two martial weapons'}
           ],
           [
               {'label':'Five javelins'},
               {'label':'Simple melee weapon'},
           ],
           [
               {'label':'Priest\'s pack'},
               {'label':'Explorer\'s pack'},
           ],
           [
            {'label':'Chain mail & holy symbol'},
            ],
        ]
     },
     'Ranger': {
        'Equipment':
        [
           [
               {'label':'Scale mail'},
               {'label':'Leather armor'}
           ],
           [
               {'label':'Two shortswords'},
               {'label':'Two simple melee weapons'},
           ],
           [
               {'label':'Dungeoneer\'s pack'},
               {'label':'Explorer\'s pack'},
           ],
           [
            {'label':'A longbow & quiver of 20 arrows'},
            ],
        ]
     },
     'Rogue': {
        'Equipment':
        [
           [
               {'label':'Rapier'},
               {'label':'Shortsword'}
           ],
           [
               {'label':'Shortsword & quiver of 20 arrows'},
               {'label':'Shortsword'},
           ],
           [
               {'label':'Burglar\'s pack'},
               {'label':'Dungeoneer\'s pack'},
               {'label':'Explorer\'s pack'}
           ],
           [
            {'label':'Leather armor, two daggers, & thieves\' tools'},
            ],
        ]
     },
     'Sorcerer': {
        'Equipment':
        [
           [
               {'label':'Light crossbow & 20 bolts'},
               {'label':'Simple weapon'}
           ],
           [
               {'label':'Component pouch'},
               {'label':'Arcane focus'},
           ],
           [
               {'label':'Dungeoneer\'s pack'},
               {'label':'Explorer\'s pack'}
           ],
           [
            {'label':'Two daggers'},
            ],
        ]
    },
    'Warlock': {
        'Equipment':
        [
           [
               {'label':'Light crossbow & 20 bolts'},
               {'label':'Simple weapon'}
           ],
           [
               {'label':'Component pouch'},
               {'label':'Arcane focus'},
           ],
           [
             {'label':'Scholar\'s pack'},  
             {'label':'Dungeoneer\'s pack'},
           ],
           [
            {'label':'Leather armor, any simple weapon, & two daggers'},
            ],
        ]
    },
    'Wizard': {
        'Equipment':
        [
           [
               {'label':'Quarterstaff'},
               {'label':'Dagger'}
           ],
           [
               {'label':'Component pouch'},
               {'label':'Arcane focus'},
           ],
           [
             {'label':'Scholar\'s pack'},  
             {'label':'Explorer\'s pack'},
           ],
           [
            {'label':'Spellbook (with 6 1st level spells)'},
            ],
        ]
    },
 }


 export const subrace = {
    '' : {
        subrace:[
            {'value':'Select Race First'}
        ],
    },
    'Dwarf' : 
    {
        'subrace': 
        [
            {'value':'Hill'},
            {'value':'Mountain'},
        ],
        'weapons':
        {
            'Hill':[
                {'label':'Battleaxe'},
                {'label':'Handaxe'},
                {'label':'Throwing Hammer'},
                {'label':'Warhammer'},
            ],
            'Mountain':[
                {'label':'Battleaxe'},
                {'label':'Handaxe'},
                {'label':'Throwing Hammer'},
                {'label':'Warhammer'},
            ],
        }

    },
    
    'Elf' : 
    {
        'subrace':
        [
            {'value':'High'},
            {'value':'Wood'},
            {'value':'Drow'},
        ],
        'weapons':
        {
            'High':
            [
                {'label':'Longsword'},
                {'label':'Shortsword'},
                {'label':'Shortbow'},
                {'label':'Longbow'},
            ],
            'Wood':
            [
                {'label':'Longsword'},
                {'label':'Shortsword'},
                {'label':'Shortbow'},
                {'label':'Longbow'},
            ],
            'Dark':
            [
                {'label':'Rapiers'},
                {'label':'Shortswords'},
                {'label':'Hand Crossbows'},
                {'label':'Longbow'},
            ],
        }

    },
    'Halfling': 
    {
        'subrace':
            [
                {'value':'Lightfoot'},
                {'value':'Stout'},
            ],
        'weapons':
        {
            'Lightfoot':
            [
                {'label':'none'},    
            ],
            'Stout':
            [
                {'label':'none'},    
            ],
        }
    },
    'Human': 
    {
        'subrace':
        [
            {'value':'Standard'},
            {'value':'Variant'},
        ],
        'weapons':
        {
            'Standard':
            [
                {'label':'none'},    
            ],
            'Variant':
            [
                {'label':'none'},    
            ],
        }
    },
    'Dragonborn':
    {
        'subrace':
        [
            {'value':'none'},
        ],
        'weapons':
        {
            'none':
            [
                {'label':'none'},    
            ],
        }
    },
    'Gnome': 
    {
        'subrace':
        [
            {'value':'Forest'},
            {'value':'Rock'},
        ],
        'weapons':
        {
            'Forest':
            [
                {'label':'none'},    
            ],
            'Rock':
            [
                {'label':'none'},    
            ],
            
        }

    },

    'Half-Elf':  {
        'subrace':
        [
            {'value':'none'},
        ],
        'weapons':
        {
            'none':
            [
                {'label':'none'},    
            ],
        }
    },
    'Half-Orc': {
        'subrace':
        [
            {'value':'none'},
        ],
        'weapons':
        {
            'none':
            [
                {'label':'none'},    
            ],
        }
    },
    'Tiefling': {
        'subrace':
        [
            {'value':'none'},
        ],
        'weapons':
        {
            'none':
            [
                {'label':'none'},    
            ],
        }
    },

}



export const charclass = [
    {'value':'Barbarian'},
    {'value':'Bard'},
    {'value':'Cleric'},
    {'value':'Druid'},
    {'value':'Fighter'},
    {'value':'Monk'},
    {'value':'Paladin'},
    {'value':'Ranger'},
    {'value':'Rogue'},
    {'value':'Sorcerer'},
    {'value':'Warlock'},
    {'value':'Wizard'},

]
export const background = [
    {'value':'Acolyte'},
    {'value':'Charlatan'},
    {'value':'Criminal'},
    {'value':'Entertainer'},
    {'value':'Folk Hero'},
    {'value':'Guild Artisan'},
    {'value':'Hermit'},
    {'value':'Noble'},
    {'value':'Outlander'},
    {'value':'Sage'},
    {'value':'Sailor'},
    {'value':'Soldier'},
    {'value':'Urchin'},
]
