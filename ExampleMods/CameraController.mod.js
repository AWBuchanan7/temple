/*
 * Imports
 */
var ButtonMap = Temple[ButtonMap];
var Player1 = Temple[Player1];
var Player3 = Temple[Player3];
var GameCamera = Temple[GameCamera];

/*
 * "Magic" numbers for configuring the camera's rotation and roll around Link, and the sensitivity
 * of the camera's response to inputs that change these values.
 *
 */
var rotation_sensitivity = 264;
var rotation_sensitivity_habit = 31;
var rotation = 128;
var roll_sensitivity = 264;
var roll_sensitivity_habit = 31;
var rolls = 100;

/*
 * The exports.Mod() function defines the main function of a Temple-based mod. It is executed continuously
 * during gameplay. This particular mod enables the third player's controller to operate the game's camera
 * as it follows Link, so that PC-users can configure a comfortable key/mouse bind with dynamic camera
 * controls, which are not available in normal gameplay.
 *
 */
exports.Mod = function() {
    // If Player 1 is not holding the Z button (see: Z-Targeting) and the camera is actively following Link
    if ((!Player1.IsPressingButton(ButtonMap.Z)) && GameCamera.IsFollowingLink()) {
        // Adjust the roll of the camera around Link.
        Roll();
        // Adjust the horizontal rotation of the camera around Link.
        rotation = Rotate();
        // Synchronize the camera's rotation to the adjusted rotation.
        GameCamera.SyncRotation(rotation);
    }    
}

/*
 * Function to adjust the rotation value that the game camera is then synchronized to based on the third player's
 * analog stick's X-axis value. Currently has a rudimentary "sensitivity" check based on magic numbers.
 *
 */
function Rotate() {
    var X = Player3.GetAnalogStickX();

    if (X > 128) {
        rotation_sensitivity--;
        if (!rotation_sensitivity % rotation_sensitivity_habit == 0) {
            rotation -= 1;
            rotation_sensitivity = 264;
        }
    } else if (X < 128 && X > 5) {
        rotation_sensitivity++;
        if (!rotation_sensitivity % rotation_sensitivity_habit == 0) {
            rotation += 1;
            rotation_sensitivity = 264;
        }
    }
    return rotation;
}

/*
 * Function to adjust the roll (focused vertical rotation) value of the game camera around Link based on the
 * third player's analog stick's Y-axis value. Currently has a rudimentary "sensitivity" check based on magic
 * numbers.
 * 
 * Disabled until I can sort out certain glitches with the roll value locking in and generally entering invalid
 * states around Link that harshly disrupts gameplay when Link traverses the Y-axis via slopes and climbing
 * while/after rolling the camera via this method.
 *
 */
function Roll() {
    var Y = Player3.GetAnalogStickY();

    // if (Y > 128) {
    //     roll_sensitivity--;
    //     if ((roll_sensitivity % roll_sensitivity_habit == 0) && rolls > 85) {
    //         GameCamera.Roll_Down(1);
    //         rolls--;
    //         roll_sensitivity = 264;
    //     }
    // } else if (Y < 128 && Y > 5) {    
    //     roll_sensitivity++;
    //     if ((roll_sensitivity % roll_sensitivity_habit == 0) && rolls < 135) {
    //         GameCamera.Roll_Up(1);
    //         rolls++;
    //         roll_sensitivity = 264;
    //     }
    // }
}
