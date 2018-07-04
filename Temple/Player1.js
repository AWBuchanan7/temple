var Player1 = function() {
    mem.bindvar(this, 0x801C84B4, 'input_player1_A', u16);
    mem.bindvar(this, 0x801C84B5, 'input_player1_B', u16);
    mem.bindvar(this, 0x801C84B6, 'input_player1_analog_x', u8);
    mem.bindvar(this, 0x801C84B7, 'input_player1_analog_y', u8);
};

Player1.prototype.IsPressingButton = function(button) {
    if (button.type == 1) {
        return this.input_player1_A == button.value;
    } else if (button.type == 2) {
        return this.input_player1_B == button.value;
    }
    
    return false;   
}

Player1.prototype.GetAnalogStickX = function() {
    return this.input_player1_analog_x;
}

Player1.prototype.GetAnalogStickY = function() {
    return this.input_player1_analog_y;
}

Player1.prototype.SetZero = function() {
    this.input_player1_A = 0;
}

exports.Name = function() {
    return "Player1";
}

exports.Function = function() {
    return new Player1();
}
