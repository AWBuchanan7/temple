console.log('Camera Control loaded.')

Duktape.modSearch = function (id) {
    var res = fs.readFile('C:/Users/Walker/OneDrive/Games/SuperSaix Mod Manager/Util/Ocarina of Time/Scripts/Game/' + id + '.js');
    return res.toString();
}

var CAMERA = require('Camera');
const camera = CAMERA.GameCamera();

var INPUT = require('Input');
const player1 = INPUT.Player1();
const player3 = INPUT.Player3();
const buttons = INPUT.ButtonMap();

var rotation = camera.camera_rotation;
var rotation_amount = 768;


exports.Mod = function() {
    if ((!player1.IsPressingButton(buttons.z_button)) && camera.IsFollowingLink()) {
        
        if (player3.IsPressingButton(buttons.c_up)) {
            camera.Roll_Up();
        }

        if (player3.IsPressingButton(buttons.c_right_up)) {
            camera.Roll_Up();
            rotation += rotation_amount;
        }

        if (player3.IsPressingButton(buttons.c_right)) {
            rotation += rotation_amount;
        }

        if (player3.IsPressingButton(buttons.c_right_down)) {
            camera.Roll_Down();
            rotation += rotation_amount;
        }

        if (player3.IsPressingButton(buttons.c_down)) {
            camera.Roll_Down();
        }

        if (player3.IsPressingButton(buttons.c_left_down)) {
            rotation -= rotation_amount;
            camera.Roll_Down();
        }

        if (player3.IsPressingButton(buttons.c_left)) {
            rotation -= rotation_amount;
        }

        if (player3.IsPressingButton(buttons.c_left_up)) {
            rotation -= rotation_amount;
            camera.Roll_Up();
        }

        player3.SetZero();
    }

    camera.SyncRotation(rotation);
}
