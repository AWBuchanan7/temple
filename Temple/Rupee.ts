export enum RupeeType {
    GREEN,
    BLUE,
    RED,
    PURPLE,
    ORANGE
}


export class Rupee {

  color: RupeeType;
  value;
  
  static GREEN = new Rupee(RupeeType.GREEN, 1);
  
  
    
   //$000E64DC  2  green rupee value
   //$000E64DE  2  blue rupee value
   //$000E64E0  2  red rupee value
   //$000E64E2  2  purple rupee value
   //$000E64E4  2  orange rupee value
  constructor(_color: RupeeType, _value: number) {
        this.color = _color;
        
        
        switch(this.color) {
          case RupeeType.GREEN:
            mem.bindvar(this, 0x000E64DC, 'SLOT_1', u8);
          break;
          default:
          break;          
        }
        
        this.value = _value;
  }




}
