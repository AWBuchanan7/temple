/*
 * Configurable variables.
 */
var rotation_amount = 864;
var roll_amount = 6;
var zoom_amount = 24;

/*
 * exports.Mod defines the main function of the mod. It is executed continuously during gameplay.
 */
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
