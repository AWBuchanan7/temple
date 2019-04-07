export class ItemHookshot {

    static mem;

    static length_ptr;
    static length_addr;


    static initialize(mem, u8, u16, u32) {
        this.mem = mem;
        mem.bindvar(this, 0x800E9200, 'length_ptr', u32);
    }

    static setHookshotLength(length) {
        if (this.length_ptr != 0x00) {
            this.mem.u16[this.length_ptr + 0x106] = length;
        }
    }

    static setLongshotLength(length) {
        if (this.length_ptr != 0x00) {
            this.length_addr = this.length_ptr;
            this.length_addr += 0xF6;
            this.mem.u16[this.length_addr] = length;
        }
    }

    static decToHex(hex_string) {
        return (hex_string.toString(16).toUpperCase() );
    }
}