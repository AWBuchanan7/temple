import { GameDisplay, AspectRatio } from "../Temple/Display";
import { GameCamera } from "../Temple/Camera";
import { Link } from "../Temple/Link";

export class ModMain {

    cameraLoadedFlag: boolean;
    config;

    Init(mem, u8, u16, u32, _config) {
        GameDisplay.initialize(mem, u8, u16, u32);
        Link.initialize(mem, u8, u16, u32);
        this.cameraLoadedFlag = false;
        this.config = JSON.parse(_config);
        
        if (this.config.aspect_ratio == "16:9") {
            GameDisplay.setAspectRatio(AspectRatio._21x9);
        } else if (this.config.aspect_ratio == "21:9") {
            GameDisplay.setAspectRatio(AspectRatio._21x9);
        }
        
    }

    /*
     * The ModMain.Run() function defines the main function of a Temple-based mod. It is executed continuously
     * during gameplay.
     *
     */
    Run() {

        if (this.config.aspect_ratio == "16:9") {
            GameDisplay.setAspectRatio(AspectRatio._21x9);
        } else if (this.config.aspect_ratio == "21:9") {
            GameDisplay.setAspectRatio(AspectRatio._21x9);
        }

        if (this.cameraLoadedFlag) {

            if (this.config.framerate_enhance == "true") {
                if (Link.isCrawling()) {
                    GameDisplay.setFrameRate(0x03);
                } else {
                    GameDisplay.setFrameRate(0x02);
                }
            }
            
            if (this.config.draw_distance_enhance == "true") {
                GameDisplay.setDrawDistance(0x3E80);
            }

        } else {

            if (GameCamera.isFollowingLink()) {
                this.cameraLoadedFlag = true;
            }

        }
    }

}