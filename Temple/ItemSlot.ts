// TO DO:

// Light Arrow
// 80118454 ????

// Nayru's Love
// 80118455 ????

// Bottle 1
// 80118456 ????

// Bottle 2
// 80118457 ????

// Bottle 3
// 80118458 ????

// Bottle 4
// 80118459 ????

// Adult Link Item
// 8011845A ????

// Kid Link Item
// 8011845B ????

export class ItemSlot {

  static SLOT_C_RIGHT;
  static SLOT_C_DOWN;
  static SLOT_C_LEFT;
  static SLOT_B;

  static SLOT_1;
  static SLOT_2;
  static SLOT_3;
  static SLOT_4;

  static SLOT_5;
  static SLOT_6;
  static SLOT_7;
  static SLOT_8;

  static initialize(mem, u8, u16, u32) {
    mem.bindvar(this, 0x8011A63B, 'SLOT_C_RIGHT', u8);
    mem.bindvar(this, 0x8011A63A, 'SLOT_C_DOWN', u8);
    mem.bindvar(this, 0x8011A639, 'SLOT_C_LEFT', u8);
    mem.bindvar(this, 0x8011A638, 'SLOT_B', u8);

    mem.bindvar(this, 0x80118444, 'SLOT_1', u8); // deku stick slot
    mem.bindvar(this, 0x80118445, 'SLOT_2', u8); // deku nut slot
    mem.bindvar(this, 0x80118446, 'SLOT_3', u8); // bomb slot
    mem.bindvar(this, 0x80118447, 'SLOT_4', u8); // arrow slot

    mem.bindvar(this, 0x80118448, 'SLOT_5', u8); // fire arrow slot
    mem.bindvar(this, 0x80118449, 'SLOT_6', u8); // din's fire slot
    mem.bindvar(this, 0x8011844A, 'SLOT_7', u8); // slingshot slot
    mem.bindvar(this, 0x8011844B, 'SLOT_8', u8); // ocarina slot

    mem.bindvar(this, 0x8011844C, 'slot_9A', u8); // hookshot slot
    mem.bindvar(this, 0x8011844D, 'slot_9B', u8); // longshot slot
    mem.bindvar(this, 0x8011844E, 'slot_10', u8); // ice arrow slot
    mem.bindvar(this, 0x8011844F, 'slot_11', u8); // farore slot

    mem.bindvar(this, 0x080118450, 'slot_12', u8); // boomerang slot
    mem.bindvar(this, 0x080118451, 'slot_13', u8); // lens of truth slot
    mem.bindvar(this, 0x080118452, 'slot_14', u8); // magic bean slot
    mem.bindvar(this, 0x080118453, 'slot_15', u8); // megaton hammer slot
  }

  static setSlot(slot: number, itemValue: number) {
    if (itemValue <= 0xFF && itemValue >= 0x00) {
      if (slot == 0) {
        ItemSlot.SLOT_1 = itemValue;
        return true;
      }
    }
    return false;
  }
}