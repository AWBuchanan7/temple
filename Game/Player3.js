var Player3 = function() {
    mem.bindvar(this, 0x801C84E4, 'input_player3_A', u16);
    mem.bindvar(this, 0x801C84E5, 'input_player3_B', u16);
    mem.bindvar(this, 0x801C84E6, 'input_player3_analog_x', u8);
    mem.bindvar(this, 0x801C84E7, 'input_player3_analog_y', u8);
};

Player3.prototype.IsPressingButton = function(button) {
    if (button.type == 1) {
        return this.input_player3_A == button.value;
    } else if (button.type == 2) {
        return this.input_player3_B == button.value;
    }
    
    return false;    
}

Player3.prototype.GetAnalogStickX = function() {
    return this.input_player3_analog_x;
}

Player3.prototype.GetAnalogStickY = function() {
    return this.input_player3_analog_y;
}

Player3.prototype.SetZero = function() {
    this.input_player3_A = 0;
}

exports.Name = function() {
    return "Player3";
}

exports.Function = function() {
    return new Player3();
}
