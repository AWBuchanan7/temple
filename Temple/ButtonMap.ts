export enum ButtonType {
    A = 1,
    B = 2
}

export class ButtonMap {
    value: number;
    type: ButtonType;

    constructor(_value: number, _type: ButtonType) {
        this.value = _value;
        this.type = _type;
    }

    static C_UP = new ButtonMap(8, 1);
    static C_RIGHT_UP = new ButtonMap(9, 1);
    static C_RIGHT = new ButtonMap(1, 1);
    static C_RIGHT_DOWN = new ButtonMap(5, 1);
    static C_DOWN = new ButtonMap(4, 1);
    static C_LEFT_DOWN = new ButtonMap(6, 1);
    static C_LEFT = new ButtonMap(2, 1);
    static C_LEFT_UP = new ButtonMap(10, 1);
    static A = new ButtonMap(4000, 1);
    static B = new ButtonMap(8000, 1);
    static Z = new ButtonMap(2000, 1);
    static R = new ButtonMap(10, 2);
    static L = new ButtonMap(20, 2);
    static START = new ButtonMap(100, 1);
    static D_RIGHT = new ButtonMap(100, 2);
    static D_UP = new ButtonMap(800, 2);
    static D_LEFT = new ButtonMap(200, 2);
    static D_DOWN = new ButtonMap(400, 2);
}


