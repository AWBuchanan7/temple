/*
 * "Magic" number to convert the rotation of the resting camera to
 * the rotation of the camera's target.
 */
var REST_TARGET_CONVERSION = 32767; 

var Camera = function() {
    mem.bindvar(this, 0x801C8680, 'camera_context', u16)
    mem.bindvar(this, 0x801C86F8, 'camera_roll', u16)
    mem.bindvar(this, 0x801C86CF, 'camera_countdown_to_rest', u8)
    mem.bindvar(this, 0x801C86B5, 'camera_resting', u8)
    mem.bindvar(this, 0x801C86CA, 'camera_rest_rotation', u16)
    mem.bindvar(this, 0x801C8722, 'camera_rotation', u16)
    mem.bindvar(this, 0x801C86C4, 'camera_unknown', u32)
       
    this.IsFollowingLink();
    this.Roll_Up(); 
    this.Roll_Down();
    this.Rotate_Right();
    this.Rotate_Left();
    this.SyncRotation();
};

Camera.prototype.Rotate_Right = function(rotation) {
    this.camera_rotation += rotation; 
    this.SyncRotation(this.camera_rotation);
}

Camera.prototype.Rotate_Left = function(rotation) {
    this.camera_rotation -= rotation; 
    this.SyncRotation(this.camera_rotation);
}

//sync the camera rotations
Camera.prototype.SyncRotation = function(rotation) {
    this.camera_resting = 192; //192 here is essentially "true"
    this.camera_countdown_to_rest = 0;
    this.camera_unknown = 0;

    this.camera_rest_rotation = rotation;

    if (rotation < this.camera_rotation) {
        this.camera_rotation = (rotation + REST_TARGET_CONVERSION);
    } else {
        this.camera_rotation = (rotation - REST_TARGET_CONVERSION);
    }
}

Camera.prototype.IsFollowingLink = function() {
    return this.camera_context == 0xC114;
}

Camera.prototype.Roll_Up = function(rollAmount) {
    this.camera_roll += rollAmount
}

Camera.prototype.Roll_Down = function(rollAmount) {
    this.camera_roll -= rollAmount
}

exports.GameCamera = function() {
    return new Camera();
}
