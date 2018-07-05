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
