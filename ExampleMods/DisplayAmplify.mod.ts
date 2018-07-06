import { GameDisplay, AspectRatio } from "../Temple/Display";
import { GameCamera } from "../Temple/Camera";

export class ModMain {

    cameraLoadedFlag: boolean;

    Init(mem, u8, u16, u32) {
        GameDisplay.initialize(mem, u8, u16, u32);
        this.cameraLoadedFlag = false;

        GameDisplay.setAspectRatio(AspectRatio._21x9);
    }

    /*
     * The ModMain.Run() function defines the main function of a Temple-based mod. It is executed continuously
     * during gameplay.
     *
     */
    Run() {

        GameDisplay.setAspectRatio(AspectRatio._21x9);

        if (this.cameraLoadedFlag) {
            GameDisplay.setFrameRate(0x02);
            // GameDisplay.setDrawDistance(0x3E80);
        } else {
            if (GameCamera.isFollowingLink()) {
                this.cameraLoadedFlag = true;
            }
        }
    }

}