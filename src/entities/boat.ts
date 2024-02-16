/*реализация с интерфейсом
import {ConditionType} from "../types/condition.type.js"
import {Vehicle} from "./vehicle.js";
import {VenicleInterface} from "../interfaces/vehicle.interface.js"
export class Boat extends Vehicle implements VenicleInterface{
    public toString(): string {
        return 'Катер марки: ' + this.brandName + ', модель: ' + this.modelName
            + ', год выпуска: ' + this.year + ', катер '
            + this.getConditionString()  + (this._price ? ' цена: ' + this._price : ' free ') ;

    }
    public getTypes(): string[]{
        return ['река','море','океан', 'озеро'];
    }}*/

import {ConditionType} from "../types/condition.type"
import {Vehicle} from "./vehicle.js";
import {VenicleInterface} from "../interfaces/vehicle.interface.js"
export class Boat extends Vehicle {
    public static vehicleName= 'Boat!';
    public length: number;
    constructor(brandName: string, modelName: string, year: number, length: number, condition?: ConditionType) {
    super(brandName, modelName, year, condition); //  как в родит классе
    this.length = length; // + свое свойство

    }
    public toString(): string {
        return 'Катер марки: ' + this.brandName + ', модель: ' + this.modelName
            + ', год выпуска: ' + this.year + ', катер '
            + this.getConditionString()  + (this._price ? ' цена: ' + this._price : ' free ') +
             ', длиной ' + this.length + 'м.';

    }
    public getTypes(): string[]{
        return ['река','море','океан', 'озеро'];
    }
    //статич методы
    static getVehicleName() {
        return 'Boat';
    }
}