import { ItemMap } from "../Temple/ItemMap";
import { ItemSlot } from "../Temple/ItemSlots";

export class ModMain {
    Slots: ItemSlot;

    Init(mem, u8, u16, u32) {
        this.Slots = new ItemSlot(mem, u8, u16, u32);
    }

    /*
     *
     */
    Run() {
        this.Slots.slot_c_down = ItemMap.SWORD_KOKIRI;
        this.Slots.slot_b = ItemMap.SLINGSHOT;
    }

}