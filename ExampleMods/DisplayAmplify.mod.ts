import { GameDisplay, AspectRatio } from "../Temple/Display";
import { GameCamera } from "../Temple/Camera";
import { GameWorld } from "../Temple/World";
import { ItemHookshot } from "../Temple/ItemHookshot"
import { Link } from "../Temple/Link";

export class ModMain {

    cameraLoadedFlag: boolean;
    config;


    Init(mem, u8, u16, u32, _config) {
        GameDisplay.initialize(mem, u8, u16, u32);
        GameWorld.initialize(mem, u8, u16, u32);
        ItemHookshot.initialize(mem, u8, u16, u32);
        Link.initialize(mem, u8, u16, u32);
        this.cameraLoadedFlag = false;
        this.config = JSON.parse(_config);
    }

    /*
     * The ModMain.Run() function defines the main function of a Temple-based mod. It is executed continuously
     * during gameplay.
     *
     */
    Run() {
        if (this.cameraLoadedFlag) {

            if (this.config.aspect_ratio == "16:9") {
                GameDisplay.setAspectRatio(AspectRatio._21x9);
            } else if (this.config.aspect_ratio == "21:9") {
                GameDisplay.setAspectRatio(AspectRatio._21x9);
            }

            ItemHookshot.bindLengthAddress();

            if (this.config.framerate_enhance == "true") {
                if (Link.isCrawling()) {
                    GameDisplay.setFrameRate(0x03);
                } else {
                    if (Link.isJumping()) {
                        GameWorld.setGravityConstant(0xBF32);
                    }
                    GameDisplay.setFrameRate(0x02);
                    ItemHookshot.setLongshotLength(0x0027); // 50% increase to match increase in framerate
                }
            } else {
                GameDisplay.setFrameRate(0x03);
            }
            
            if (this.config.draw_distance_enhance == "true") {
                GameDisplay.setDrawDistance(0x3E80);
            }

        } else {
            // This logic is so that we wait until the game is fully running to activate this mod.
            if (GameCamera.isFollowingLink()) {
                this.cameraLoadedFlag = true;
            }

        }
    }
}

