import { Player } from "./player";

export class Board {
    player : Player;
    tiles: Object[];

    constructor(value: object = {}){
        Object.assign(this, value);
    }
}
