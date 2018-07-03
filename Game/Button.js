var Buttons = function() {
    var ButtonEnum = {
        "C_RIGHT": { value:1, type:0x801C84E4 };
        "C_LEFT": { value:2, type:0x801C84E4 };
        "C_DOWN": { value:4, type:0x801C84E4 };
        "C_UP":  { value:8, type:0x801C84E4 };
        "C_RIGHT_UP": { value:9, type:0x801C84E4 };
        "C_RIGHT_DOWN": { value:5, type:0x801C84E4 };
        "C_LEFT_UP":  { value:10, type:0x801C84E4 };
        "C_LEFT_DOWN": { value:6, type:0x801C84E4 };

        "A": { value:4000, type:0x801C84E4 };
        "B": { value:8000, type:0x801C84E4 };
        "Z": { value:2000, type:0x801C84E4 };
        "R": { value:10, type:0x801C84E5 };
        "L": { value:20, type:0x801C84E5 };
        "START": { value:100, type:0x801C84E4 };

        "D_RIGHT": { value:100, type:0x801C84E5 };
        "D_UP": { value:800, type:0x801C84E5 };
        "D_LEFT": { value:200, type:0x801C84E5 };
        "D_DOWN": { value:400, type:0x801C84E5 };
    }    
    return Object.freeze(ButtonEnum)
}

module.exports = function() {
    return new Buttons();
}
