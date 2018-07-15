export class Link {

    static actionState;

    static initialize(mem, u8, u16, u32) {
        mem.bindvar(this, 0x801DABDE, 'actionState', u16);
    }

    static isCrawling() {
        return this.actionState == 0x2708;
    }

    static isJumping() {
        return this.actionState == 0x3148;
    }

}