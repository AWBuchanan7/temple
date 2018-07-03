var Player1 = function() {
    this.input_player1 = 0;
    mem.bindvar(this, 0x801C84B4, 'input_player1_A', u16);
    mem.bindvar(this, 0x801C84B5, 'input_player1_B', u16);
    mem.bindvar(this, 0x801C84B6, 'input_player1_analog_x', u8);
    mem.bindvar(this, 0x801C84B7, 'input_player1_analog_y', u8);

    this.IsPressingButton();
    this.GetAnalogStickX();
    this.GetAnalogStickY();
};

var Player3 = function() {
    this.input_player3 = 0;
    mem.bindvar(this, 0x801C84E4, 'input_player3_A', u16);
    mem.bindvar(this, 0x801C84E5, 'input_player3_B', u16);
    mem.bindvar(this, 0x801C84E6, 'input_player3_analog_x', u8);
    mem.bindvar(this, 0x801C84E7, 'input_player3_analog_y', u8);

    this.IsPressingButton();
    this.SetZero();
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
    return input_player1_analog_x;
}

Player1.prototype.GetAnalogStickY = function() {
    return input_player1_analog_y;
}

Player3.prototype.IsPressingButton = function(button) {
    if (button.type == 1) {
        return this.input_player3_A == button.value;
    } else if (button.type == 2) {
        return this.input_player3_B == button.value;
    }
    
    return false;    
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
