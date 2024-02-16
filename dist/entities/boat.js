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
define(["require", "exports", "./vehicle.js"], function (require, exports, vehicle_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Boat = void 0;
    class Boat extends vehicle_js_1.Vehicle {
        constructor(brandName, modelName, year, length, condition) {
            super(brandName, modelName, year, condition); //  как в родит классе
            this.length = length; // + свое свойство
        }
        toString() {
            return 'Катер марки: ' + this.brandName + ', модель: ' + this.modelName
                + ', год выпуска: ' + this.year + ', катер '
                + this.getConditionString() + (this._price ? ' цена: ' + this._price : ' free ') +
                ', длиной ' + this.length + 'м.';
        }
        getTypes() {
            return ['река', 'море', 'океан', 'озеро'];
        }
        //статич методы
        static getVehicleName() {
            return 'Boat';
        }
    }
    exports.Boat = Boat;
    Boat.vehicleName = 'Boat!';
});
