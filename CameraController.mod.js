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

const button = require('Button');

var rotation = camera.camera_rotation;
var rotation_amount = 768;

exports.Mod = function() {
    if ((!player1.IsPressingButton(button.Z)) && camera.IsFollowingLink()) {
        
        if (player3.IsPressingButton(button.C_UP)) {
            camera.Roll_Up();
        }

        if (player3.IsPressingButton(button.C_RIGHT_UP)) {
            camera.Roll_Up();
            rotation += rotation_amount;
        }

        if (player3.IsPressingButton(button.C_RIGHT)) {
            rotation += rotation_amount;
        }

        if (player3.IsPressingButton(button.C_RIGHT_DOWN)) {
            camera.Roll_Down();
            rotation += rotation_amount;
        }

        if (player3.IsPressingButton(button.C_DOWN)) {
            camera.Roll_Down();
        }

        if (player3.IsPressingButton(button.C_LEFT_DOWN)) {
            rotation -= rotation_amount;
            camera.Roll_Down();
        }

        if (player3.IsPressingButton(button.C_LEFT)) {
            rotation -= rotation_amount;
        }

        if (player3.IsPressingButton(button.C_LEFT_UP)) {
            rotation -= rotation_amount;
            camera.Roll_Up();
        }

        player3.SetZero();
    }

    camera.SyncRotation(rotation);
}
