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


export var chars = [
    {'key':'1','race':'Human', 'subrace':'Variant', 'class':'Cleric', 'background':'Criminal'},
    {'key':'2','race':'Halfling', 'subrace':'Stout','class':'Bard', 'background':'Sage'},
];

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

export var classWeapons = 
    {
     'Barbarian' : 
     {
         'Equipment':
         {
             'One':[
                 {'label':'Great Axe'},
                 {'label':'Martial Weapons'},
             ],
             'Two':[
                 {'label':'2 Handaxes'},
                 {'label':'Simple weapon'},
             ],
             'Three':[
                {'label':'Explorer\'s pack'},
            ],

            'Four':[
                {'label':'2 javelins'},
            ],
         }
 
     },
     
     'Bard' : 
     {
         'Equipment':
         {
             'One':
             [
                 {'label':'Rapier'},
                 {'label':'Longsword'},
                 {'label':'Simple Weapon'},
             ],
             'Two':
             [
                 {'label':'Diplomat\'s pack'},
                 {'label':'Entertainer\'s pack'},
             ],
             'Three':
             [
                 {'label':'Lute'},
                 {'label':'Musical instrument'},
             ],
             'Four':
             [
                 {'label':'Leather armor & a dagger'},
             ],
         }
 
     },
    
     'Cleric': 
     {
         'Equipment':
         {
            'One':
            [
                {'label':'Mace'},
                {'label':'Warhammar'},
            ],
            'Two':
            [
                {'label':'Scale mail'},
                {'label':'Leather armor'},
                {'label':'Chain mail'}
            ],
            'Three':
            [
                {'label':'Light crossbow & 20 bolts'},
                {'label':'Sin'},
            ],
            'Four':
            [
                {'label':'Leather armor & a dagger'},
            ],
         }
     },
     'Druid': 
     {
         'Equipment':
         {
            'One':
            [
                {'label':'Rapier'},
                {'label':'Longsword'},
                {'label':'Simple Weapon'},
            ],
            'Two':
            [
                {'label':'Diplomat\'s pack'},
                {'label':'Entertainer\'s pack'},
            ],
            'Three':
            [
                {'label':'Lute'},
                {'label':'Musical instrument'},
            ],
            'Four':
            [
                {'label':'Leather armor & a dagger'},
            ],
         }
     },
     'Fighter':
     {
         'Equipment':
         {
            'One':
            [
                {'label':'Rapier'},
                {'label':'Longsword'},
                {'label':'Simple Weapon'},
            ],
            'Two':
            [
                {'label':'Diplomat\'s pack'},
                {'label':'Entertainer\'s pack'},
            ],
            'Three':
            [
                {'label':'Lute'},
                {'label':'Musical instrument'},
            ],
            'Four':
            [
                {'label':'Leather armor & a dagger'},
            ],
         }
     },
     'Monk': 
     {
         'Equipment':
         {
            'One':
            [
                {'label':'Rapier'},
                {'label':'Longsword'},
                {'label':'Simple Weapon'},
            ],
            'Two':
            [
                {'label':'Diplomat\'s pack'},
                {'label':'Entertainer\'s pack'},
            ],
            'Three':
            [
                {'label':'Lute'},
                {'label':'Musical instrument'},
            ],
            'Four':
            [
                {'label':'Leather armor & a dagger'},
            ],
             
         }
 
     },
 
     'Paladin':  {
         'Equipment':
         {
            'One':
            [
                {'label':'Rapier'},
                {'label':'Longsword'},
                {'label':'Simple Weapon'},
            ],
            'Two':
            [
                {'label':'Diplomat\'s pack'},
                {'label':'Entertainer\'s pack'},
            ],
            'Three':
            [
                {'label':'Lute'},
                {'label':'Musical instrument'},
            ],
            'Four':
            [
                {'label':'Leather armor & a dagger'},
            ],
         }
     },
     'Ranger': {
         'Equipment':
         {
            'One':
            [
                {'label':'Rapier'},
                {'label':'Longsword'},
                {'label':'Simple Weapon'},
            ],
            'Two':
            [
                {'label':'Diplomat\'s pack'},
                {'label':'Entertainer\'s pack'},
            ],
            'Three':
            [
                {'label':'Lute'},
                {'label':'Musical instrument'},
            ],
            'Four':
            [
                {'label':'Leather armor & a dagger'},
            ],
         }
     },
     'Rogue': {
         'Equipment':
         {
            'One':
            [
                {'label':'Rapier'},
                {'label':'Longsword'},
                {'label':'Simple Weapon'},
            ],
            'Two':
            [
                {'label':'Diplomat\'s pack'},
                {'label':'Entertainer\'s pack'},
            ],
            'Three':
            [
                {'label':'Lute'},
                {'label':'Musical instrument'},
            ],
            'Four':
            [
                {'label':'Leather armor & a dagger'},
            ],
         }
     },
     'Sorcerer': {
        'Equipment':
        {
           'One':
           [
               {'label':'Rapier'},
               {'label':'Longsword'},
               {'label':'Simple Weapon'},
           ],
           'Two':
           [
               {'label':'Diplomat\'s pack'},
               {'label':'Entertainer\'s pack'},
           ],
           'Three':
           [
               {'label':'Lute'},
               {'label':'Musical instrument'},
           ],
           'Four':
           [
               {'label':'Leather armor & a dagger'},
           ],
        }
    },
    'Warlock': {
        'Equipment':
        {
           'One':
           [
               {'label':'Rapier'},
               {'label':'Longsword'},
               {'label':'Simple Weapon'},
           ],
           'Two':
           [
               {'label':'Diplomat\'s pack'},
               {'label':'Entertainer\'s pack'},
           ],
           'Three':
           [
               {'label':'Lute'},
               {'label':'Musical instrument'},
           ],
           'Four':
           [
               {'label':'Leather armor & a dagger'},
           ],
        }
    },
    'Wizard': {
        'Equipment':
        {
           'One':
           [
               {'label':'Rapier'},
               {'label':'Longsword'},
               {'label':'Simple Weapon'},
           ],
           'Two':
           [
               {'label':'Diplomat\'s pack'},
               {'label':'Entertainer\'s pack'},
           ],
           'Three':
           [
               {'label':'Lute'},
               {'label':'Musical instrument'},
           ],
           'Four':
           [
               {'label':'Leather armor & a dagger'},
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
