export class ItemHookshot {

    static mem;
    static u16;
    static length_ptr;
    static length_addr = null;


    static initialize(mem, u8, u16, u32) {
        this.mem = mem;
        this.u16 = u16;
        mem.bindvar(this, 0x800E9200, 'length_ptr', u32);
        
    }

    static bindLengthAddress() {
        if (this.length_ptr != 0x00 && this.length_addr == null) {
            this.mem.bindvar(this, this.length_ptr, 'length_addr', this.u16);
        }
    }

    static setHookshotLength(length: number) {
        if (this.length_ptr != 0x00) {
            this.mem.u16[this.length_ptr + 0x106] = length;
        }
    }

    static setLongshotLength(length: number) {
        if (this.length_ptr != 0x00) {
            this.mem.u16[this.length_addr + 0xF6] = length;
        }
    }

    static decToHex(hex_string) {
        return (hex_string.toString(16).toUpperCase() );
    }
}