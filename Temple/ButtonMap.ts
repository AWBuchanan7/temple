export enum ButtonType {
    A = 1,
    B = 2
}

export class Button {
    value: number;
    type: ButtonType;

    constructor(_value: number, _type: ButtonType) {
        this.value = _value;
        this.type = _type;
    }

    static C_UP = new Button(8, 1);
    static C_RIGHT_UP = new Button(9, 1);
    static C_RIGHT = new Button(1, 1);
    static C_RIGHT_DOWN = new Button(5, 1);
    static C_DOWN = new Button(4, 1);
    static C_LEFT_DOWN = new Button(6, 1);
    static C_LEFT = new Button(2, 1);
    static C_LEFT_UP = new Button(10, 1);

    static A = new Button(4000, 1);
    static B = new Button(8000, 1);
    static Z = new Button(2000, 1);
    static R = new Button(10, 2);
    static L = new Button(20, 2);
    static START = new Button(100, 1);

    static D_RIGHT = new Button(100, 2);
    static D_UP = new Button(800, 2);
    static D_LEFT = new Button(200, 2);
    static D_DOWN = new Button(400, 2);
}


