var Buttons = function() {
    this.C_RIGHT = 1;
    this.C_LEFT = 2;
    this.C_DOWN = 4;
    this.C_UP = 8;
    this.C_RIGHT_UP = 9;
    this.C_RIGHT_DOWN = 5;
    this.C_LEFT_UP = 10;
    this.C_LEFT_DOWN = 6;
    
    this.A = 4000;
    this.B = 8000;
    this.Z = 2000;
    this.R = 10;
    this.L = 20;
    this.START = 100;

    this.D_RIGHT = 100;
    this.D_UP = 800;
    this.D_LEFT = 200;
    this.D_DOWN = 400;
}

module.exports = function() {
    return new Buttons();
}
