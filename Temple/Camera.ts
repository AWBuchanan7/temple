/*
 * This may provide some info to help fix the Z-Targeting bugs:
 * https://wiki.cloudmodding.com/oot/Mod:Play_As_Z-Targeted_(Debug)
 *
 */
export class GameCamera {
    /*
     * "Magic" number to convert the rotation of the resting camera to
     * the rotation of the camera's target.
     */
    static REST_TARGET_CONVERSION = 32768; 

    static camera_context;
    static camera_roll;
    static camera_countdown_to_rest;
    static camera_resting;
    static camera_rest_rotation;
    static camera_rotation;
    static camera_unknown;
    static camera_zoom;


    static initialize(mem, u8, u16, u32) {
        mem.bindvar(this, 0x801C8680, 'camera_context', u16);
        mem.bindvar(this, 0x801C86F8, 'camera_roll', u16);
        mem.bindvar(this, 0x801C86CF, 'camera_countdown_to_rest', u8);
        mem.bindvar(this, 0x801C86B5, 'camera_resting', u8);
        mem.bindvar(this, 0x801C86CA, 'camera_rest_rotation', u16);
        mem.bindvar(this, 0x801C8722, 'camera_rotation', u16);
        mem.bindvar(this, 0x801C86C4, 'camera_unknown', u32);
        mem.bindvar(this, 0x81106BEC, 'camera_zoom', u16);
    }

    static syncRotation(rotation: number) {
        this.camera_resting = 192; //192 here is essentially "true"
        this.camera_countdown_to_rest = 0;
        this.camera_unknown = 0;
    
        this.camera_rest_rotation = rotation;
    
        if (rotation < this.camera_rotation) {
            this.camera_rotation = (rotation + GameCamera.REST_TARGET_CONVERSION);
        } else {
            this.camera_rotation = (rotation - GameCamera.REST_TARGET_CONVERSION);
        }
    }

    static isFollowingLink(){
        return this.camera_context == 0xC114;
    }

    static rollUp(rollAmount: number) {
        this.camera_roll += rollAmount
    }

    static rollDown(rollAmount: number) {
        this.camera_roll -= rollAmount
    }

    static zoomIn(zoomAmount: number) {
        this.camera_zoom += zoomAmount;
    }

    static zoomOut(zoomAmount: number) {
        this.camera_zoom -= zoomAmount;
    }
}