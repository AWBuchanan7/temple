import { Button } from "../Temple/ButtonMap";
import { GameCamera } from "../Temple/Camera";
import { PlayerInput } from "../Temple/Player";

export class ModMain {
    /*
     * "Magic" numbers for configuring the camera's rotation and roll around Link, and the sensitivity
     * of the camera's response to inputs that change these values.
     *
     */
    rotation_sensitivity = 264;
    rotation_sensitivity_habit = 31;
    rotation = 128;
    roll_sensitivity = 264;
    roll_sensitivity_habit = 31;
    rolls = 100;

    Player1: PlayerInput;
    Player3: PlayerInput;


    Init(mem, u8, u16, u32) {
        this.Player1 = new PlayerInput(1, mem, u8, u16, u32);
        this.Player3 = new PlayerInput(3, mem, u8, u16, u32);
        GameCamera.initialize(mem, u8, u16, u32);
    }

    /*
     * The exports.Mod() function defines the main function of a Temple-based mod. It is executed continuously
     * during gameplay. This particular mod enables the third player's controller to operate the game's camera
     * as it follows Link, so that PC-users can configure a comfortable key/mouse bind with dynamic camera
     * controls, which are not available in normal gameplay.
     *
     */
    Run() {
        // If Player 1 is not holding the Z button (see: Z-Targeting) and the camera is actively following Link
        if ((!this.Player1.isPressingButton(Button.Z)) && GameCamera.isFollowingLink()) {
            // Adjust the roll of the camera around Link.
            this.Roll();
            // Adjust the horizontal rotation of the camera around Link.
            this.rotation = this.Rotate();
            // Synchronize the camera's rotation to the adjusted rotation.
            GameCamera.syncRotation(this.rotation);
        }    
    }

    /*
    * Function to adjust the rotation value that the game camera is then synchronized to based on the third player's
    * analog stick's X-axis value. Currently has a rudimentary "sensitivity" check based on magic numbers.
    *
    */
    Rotate() {
        var X = this.Player3.getAnalogStickX();
    
        if (X > 128) {
            this.rotation_sensitivity--;
            if (!(this.rotation_sensitivity % this.rotation_sensitivity_habit == 0)) {
                this.rotation -= 1;
                this.rotation_sensitivity = 264;
            }
        } else if (X < 128 && X > 5) {
            this.rotation_sensitivity++;
            if (!(this.rotation_sensitivity % this.rotation_sensitivity_habit == 0)) {
                this.rotation += 1;
                this.rotation_sensitivity = 264;
            }
        }
        return this.rotation;
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
    Roll() {
        var Y = this.Player3.getAnalogStickY();
    
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

}