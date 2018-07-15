export class GameWorld {

    static gravity_constant;

    static initialize(mem, u8, u16, u32) {
        mem.bindvar(this, 0x801DAA9C, 'gravity_constant', u16);
    }

    static setGravityConstant(value: number) {
        this.gravity_constant = value;
    }

}