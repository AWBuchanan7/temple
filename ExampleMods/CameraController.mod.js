Duktape.modSearch = function (id) {
    var res = fs.readFile('C:/Users/Walker/OneDrive/Games/SuperSaix Mod Manager/Util/Ocarina of Time/Scripts/Game/' + id + '.js');
    return res.toString();
}

var CAMERA = require('Camera');
const camera = CAMERA.GameCamera();
var INPUT = require('Input');
const player1 = INPUT.Player1();
const player3 = INPUT.Player3();
const button = require('Button');

var rotation_amount = 768;
var roll_amount = 6;

exports.Mod = function() {
    if ((!player1.IsPressingButton(button.Z)) && camera.IsFollowingLink()) {
        
        if (player3.IsPressingButton(button.C_UP)) {
            camera.Roll_Up(roll_amount);
        }

        if (player3.IsPressingButton(button.C_RIGHT_UP)) {
            camera.Roll_Up(roll_amount);
            camera.Rotate_Right(rotation_amount);
        }

        if (player3.IsPressingButton(button.C_RIGHT)) {
            camera.Rotate_Right(rotation_amount);
        }

        if (player3.IsPressingButton(button.C_RIGHT_DOWN)) {
            camera.Roll_Down(roll_amount);
            camera.Rotate_Right(rotation_amount);
        }

        if (player3.IsPressingButton(button.C_DOWN)) {
            camera.Roll_Down(roll_amount);
        }

        if (player3.IsPressingButton(button.C_LEFT_DOWN)) {
            camera.Rotate_Left(rotation_amount);
            camera.Roll_Down(roll_amount);
        }

        if (player3.IsPressingButton(button.C_LEFT)) {
            camera.Rotate_Left(rotation_amount);
        }

        if (player3.IsPressingButton(button.C_LEFT_UP)) {
            camera.Rotate_Left(rotation_amount);
            camera.Roll_Up(roll_amount);
        }

        player3.SetZero();
    }

    camera.SyncRotation(camera.camera_rotation);
}
