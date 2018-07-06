export class Link {

    static crawlState;

    static initialize(mem, u8, u16, u32) {
        mem.bindvar(this, 0x801DABDE, 'crawlState', u16);
    }

    static isCrawling() {
        return this.crawlState == 0x2708;
    }

}