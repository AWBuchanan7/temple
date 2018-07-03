var Buttons = function() {
    var ButtonEnum = {
        "C_RIGHT": { value:1, type:1 };
        "C_LEFT": { value:2, type:1};
        "C_DOWN": { value:4, type:1 };
        "C_UP":  { value:8, type:1 };
        "C_RIGHT_UP": { value:9, type:1 };
        "C_RIGHT_DOWN": { value:5, type:1 };
        "C_LEFT_UP":  { value:10, type:1 };
        "C_LEFT_DOWN": { value:6, type:1 };

        "A": { value:4000, type:1 };
        "B": { value:8000, type:1 };
        "Z": { value:2000, type:1 };
        "R": { value:10, type:2 };
        "L": { value:20, type:2 };
        "START": { value:100, type:1 };

        "D_RIGHT": { value:100, type:2 };
        "D_UP": { value:800, type:2 };
        "D_LEFT": { value:200, type:2 };
        "D_DOWN": { value:400, type:2 };
    }    
    return Object.freeze(ButtonEnum)
}

module.exports = function() {
    return new Buttons();
}
