var rotation_sensitivity = 264;
var rotation = 128;
var roll_sensitivity = 264;
var rolls = 100;

/*
 * exports.Mod defines the main function of the mod. It is executed continuously during gameplay.
 */
exports.Mod = function() {
    // If Z-Targeting isn't active and the camera is following Link
    if ((!player1.IsPressingButton(button.Z)) && camera.IsFollowingLink()) {
        Roll();
        Rotate();
        camera.SyncRotation(rotation);
    }    
}

function Rotate() {
    var X = player3.GetAnalogStickX();

    if (X > 128) {
        rotation_sensitivity--;
        if (!rotation_sensitivity % 31 == 0) {
            rotation -= 1;
            rotation_sensitivity = 264;
        }
    } else if (X < 128 && X > 5) {
        rotation_sensitivity++;
        if (!rotation_sensitivity % 31 == 0) {
            rotation += 1;
            rotation_sensitivity = 264;
        }
    }
}

function Roll() {
    // var Y = player3.GetAnalogStickY();

    // if (Y > 128) {
    //     roll_sensitivity--;
    //     if ((roll_sensitivity % 31 == 0) && rolls > 85) {
    //         camera.Roll_Down(1);
    //         rolls--;
    //         roll_sensitivity = 264;
    //     }
    // } else if (Y < 128 && Y > 5) {    
    //     roll_sensitivity++;
    //     if ((roll_sensitivity % 31 == 0) && rolls < 135) {
    //         camera.Roll_Up(1);
    //         rolls++;
    //         roll_sensitivity = 264;
    //     }
    // }
}
