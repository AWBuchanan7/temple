/*
 *
 * THIS CLASS TO BE DEVELOPED
 *
 */


// TO DO:

// Boomerang
// 80118450 ????

// Lens of Truth
// 80118451 ????

// Magic Beans
// 80118452 ????

// Megaton Hammer
// 80118453 ????

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
// 80118458 ????

// Kid Link Item
// 80118459 ????

var ItemSlot = function() {
  mem.bindvar(this, 0x80118444, 'slot_1', u8); // deku stick slot
  mem.bindvar(this, 0x80118445, 'slot_2', u8); // deku nut slot
  mem.bindvar(this, 0x80118446, 'slot_3', u8); // bomb slot
  mem.bindvar(this, 0x80118447, 'slot_4', u8); // arrow slot
  
  mem.bindvar(this, 0x80118448, 'slot_5', u8); // fire arrow slot
  mem.bindvar(this, 0x80118449, 'slot_6', u8); // din's fire slot
  mem.bindvar(this, 0x8011844A, 'slot_7', u8); // slingshot slot
  mem.bindvar(this, 0x8011844B, 'slot_8', u8); // ocarina slot
  
  mem.bindvar(this, 0x8011844C, 'slot_9A', u8); // hookshot slot
  mem.bindvar(this, 0x8011844D, 'slot_9B', u8); // longshot slot
  mem.bindvar(this, 0x8011844E, 'slot_10', u8); // ice arrow slot
  mem.bindvar(this, 0x8011844F, 'slot_11', u8); // farore slot
  
  mem.bindvar(this, 0x080118450, 'slot_12', u8); // boomerang slot
  
}

ItemSlot.prototype.SetSlot = function(slot, itemValue) {
  if (itemValue <= 0xFF && itemValue >= 0x00){
    
    if (slot == 1) {
      this.slot_1 = itemValue;
      return true;
    }
    
  }
  return false;
}

exports.Name = function() {
    return "ItemSlot";
}

exports.Function = function() {
    return new ItemSlot();
}
