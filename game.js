let gameObj = {};

class game_base_unit_model {
    name;
    keywords = [];
    friendly = false;
}

class game_unit extends game_base_unit_model {
    model_count = 0; // Minimum of 5
}

class game_model extends game_base_unit_model {

}

$(document).ready(function (){
    // Create the main objects.
});