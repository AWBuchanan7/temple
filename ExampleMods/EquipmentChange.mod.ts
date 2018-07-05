import { ItemMap } from "../Temple/ItemMap";
import { ItemSlot } from "../Temple/ItemSlot";

export class ModMain {

    /*
     * Initialize the mod.
     */
    Init(mem, u8, u16, u32) {
        ItemSlot.initialize(mem, u8, u16, u32);
    }

    /*
     * Run the initialized mod.
     */
    Run() {
        ItemSlot.SLOT_C_DOWN = ItemMap.SWORD_KOKIRI;
        ItemSlot.SLOT_B = ItemMap.SLINGSHOT;
    }

}