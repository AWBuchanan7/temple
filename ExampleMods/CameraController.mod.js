/*
 * Configurable variables.
 */
var rotation_amount = 512;
var roll_amount = 6;
var zoom_amount = 24;

/*
 * Non-configurable variables.
 */

var rotation = 128;

/*
 * exports.Mod defines the main function of the mod. It is executed continuously during gameplay.
 */
exports.Mod = function() {

    if ((!player1.IsPressingButton(button.Z)) && camera.IsFollowingLink()) {
        Roll();
        Rotate();
    } 

    camera.SyncRotation(rotation);
}

function Rotate() {
    var X = player3.GetAnalogStickX();

    if (X > 128) {
        rotation -= 1;
    } else if (X < 128 && X > 5) {
        rotation += 1;
    }
}

function Roll() {
    var Y = player3.GetAnalogStickY();

    if (Y > 128) {
        // camera.Roll_Down(1);
    } else if (Y < 128 && Y > 5) {
        // camera.Roll_Up(1);
    }
}
