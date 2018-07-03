var Buttons = function() {
    this.C_RIGHT = 1;
    this.C_LEFT = 2;
    this.C_DOWN = 4;
    this.C_UP = 8;
    this.C_RIGHT_UP = 9;
    this.C_RIGHT_DOWN = 5;
    this.C_LEFT_UP = 10;
    this.C_LEFT_DOWN = 6;
    this.Z = 2000;
}

exports.ButtonMap = function() {
    return new Buttons();
}
