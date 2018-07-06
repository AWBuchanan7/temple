/*
 *
 *    * UNDER CONSTRUCTION * 
 * 
 */

export enum AspectRatio {
  _16x9 = 1,
  _21x9 = 2,
  _48x9 = 3
}

export class GameDisplay {

  static aspectRatio;
  static drawDist_A;
  static drawDist_B;
  static framerate;

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
    mem.bindvars({},
      [
        [0x80048D7E , 'drawDist_A', u16], // default value 3F4A, lower values increase the draw distance, try 3E80
        [0x80048DAA, 'drawDist_B', u16] // default value value 3F80, lower values increase the draw distance, try 3E80
      ]);
    
    mem.bindvar(this, 0x801C6FA1 , 'framerate', u8);

  }
  
  static setAspectRatio(ratio: AspectRatio) {
    if (this.aspectRatio.c != 0x0000) {
      switch(ratio) {
        case AspectRatio._16x9:
          this.aspectRatio.a = 0x0000;
          this.aspectRatio.b = 0x0001;
          this.aspectRatio.c = 0xF96A;
          this.aspectRatio.d = 0xBB6C;
          this.aspectRatio.e = 0x0000;
          this.aspectRatio.f = 0x0001;
          this.aspectRatio.g = 0xF96A;
          this.aspectRatio.h = 0xBB6C;
        break;
        case AspectRatio._21x9:
          this.aspectRatio.a = 0x0000;
          this.aspectRatio.b = 0x0001;
          this.aspectRatio.c = 0xBE08;
          this.aspectRatio.d = 0xBB6C;
          this.aspectRatio.e = 0x0000;
          this.aspectRatio.f = 0x0001;
          this.aspectRatio.g = 0xBE08;
          this.aspectRatio.h = 0xBB6C;
        break;
        case AspectRatio._48x9:
        break;
        default:
        break;
      }
    }
  }
  
  static setDrawDistance(distance: number) {   
    this.drawDist_A = distance
    this.drawDist_B = distance;
  }

  static setFrameRate(rate: number) {
      this.framerate = rate;
  }
  
  
}
