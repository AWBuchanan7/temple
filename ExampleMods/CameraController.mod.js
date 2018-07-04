var rotation_sensitivity = 264;
var rotation = 128;
var roll_sensitivity = 264;
var rolls = 100;

/*
 * exports.Mod defines the main function of the mod. It is executed continuously during gameplay.
 */
exports.Mod = function() {
    // If Z-Targeting isn't active and the camera is following Link
    if ((!Temple[Player1].IsPressingButton(Temple[ButtonMap].Z)) && Temple[GameCamera].IsFollowingLink()) {
        Roll();
        Rotate();
        Temple[GameCamera].SyncRotation(rotation);
    }    
}

function Rotate() {
    var X = Temple[Player3].GetAnalogStickX();

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
    // var Y = Temple[Player3].GetAnalogStickY();

    // if (Y > 128) {
    //     roll_sensitivity--;
    //     if ((roll_sensitivity % 31 == 0) && rolls > 85) {
    //         Temple[GameCamera].Roll_Down(1);
    //         rolls--;
    //         roll_sensitivity = 264;
    //     }
    // } else if (Y < 128 && Y > 5) {    
    //     roll_sensitivity++;
    //     if ((roll_sensitivity % 31 == 0) && rolls < 135) {
    //         Temple[GameCamera].Roll_Up(1);
    //         rolls++;
    //         roll_sensitivity = 264;
    //     }
    // }
}
