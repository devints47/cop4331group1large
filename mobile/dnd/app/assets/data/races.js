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
    {'key':'1','race':'Camilo', 'subrace':'Lozano', 'class':'USA', 'background':'Criminal'},
    {'key':'2','race':'Camilo1', 'subrace':'Lozano','class':'USA', 'background':'Criminal'},
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
