let gameObj = {};

class game_base_unit_model {
    name;
    keywords = [];
    abilities = {};
    auraAbilities = {};
    friendly = false;
}

class game_unit extends game_base_unit_model {
    model_count_minimum = 0; // Minimum of 5
    model_count_maximum = 0; // Minimum of 5
}

class game_model extends game_base_unit_model {
    profiles = {
        // These contain the following characteristics that tell you how mighty the models in the unit are.
        move: NaN, // M
        weaponSkill: NaN, // WS
        ballisticSkill: NaN, // BS
        strength: NaN, // S
        toughness: NaN, // T
        wounds: NaN, // W
        attacks: NaN, // A
        leadership: NaN, // Ld
        save: NaN, // Sv
    };
    weapons = {};
}

class game_weapon {
    id = NaN;
    name;
    range = {
        minimum: NaN,
        maximum: NaN
    };
    type;
    strength = {
        // If NaN, equal to user.
        multiply: false,
        points: NaN
    }
    armorPenetration = NaN;
    damage = NaN;
}

$(document).ready(function (){
    // Create the main objects.
});