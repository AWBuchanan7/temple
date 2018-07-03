var Player1 = function() {
    this.input_player1 = 0;
    mem.bindvar(this, 0x801C84B4, 'input_player1', u16);

    this.IsPressingButton();
};

var Player3 = function() {
    this.input_player3 = 0;
    mem.bindvar(this, 0x801C84E4, 'input_player3', u16);

    this.IsPressingButton();
};

//sync the camera rotations
Player1.prototype.IsPressingButton = function(button) {
    // console.log("button press: (1)-(" + button + ")" + (input_player1 == button));
    return this.input_player1 == button;
}

//sync the camera rotations
Player3.prototype.IsPressingButton = function(button) {
    return this.input_player3 == button;
}

Player3.prototype.SetZero = function() {
    this.input_player3 = 0;
}

exports.Player1 = function() {

    return new Player1();
}

exports.Player3 = function() {
    return new Player3();
}
