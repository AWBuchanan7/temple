/*
 *
 *    * UNDER CONSTRUCTION * 
 * 
 */

export enum AspectRatio {
  16_9 = 1,
  21_9 = 2,
  48_9 = 3
}

export class GameDisplay {

  aspectRatio;
  drawDistance;
  widescreenRender;

  static initialize(mem, u8, u16, u32) {
    this.aspectRatio = mem.bindvars({},
      [
          [0x801764F8, 'a', u16],
          [0x80176502, 'b', u16],
          [0x80176518, 'c', u16],
          [0x80176522, 'd', u16],
          [0x80188908, 'e', u16],
          [0x80188912, 'f', u16],
          [0x80188928, 'g', u16],
          [0x80188932, 'h', u16]
      ]);
    
    // http://forum.pj64-emu.com/showthread.php?t=5389
    this.drawDistance = mem.bindvars({},
      [
        [0x80048D7E , 'a', u16], // default value 3F4A, lower values increase the draw distance, try 3E80
        [0x80048DAA, 'b', u16] // default value value 3F80, lower values increase the draw distance, try 3E80
      ]);
    
    this.widescreenRender = mem.bindvar(this, 0x80024A0A, 'widescreenRender', u16);
  }
  
  static setRatio(ratio: AspectRatio) {
    switch(ratio) {
      case AspectRatio.16_9:
        this.widescreenRender = 0xFFFF;
      break;
      case AspectRatio.21_9:
        this.widescreenRender = 0xFFFF;
      break;
      case AspectRatio.48_9:
        this.widescreenRender = 0xFFFF;
      break;
      default:
      break;
    }
  
  }
  
  
}
