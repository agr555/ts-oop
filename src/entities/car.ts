/* реализация с интерфейсом
import {ConditionType} from "../types/condition.type.js"
import {Vehicle} from "./vehicle.js";
import {VenicleInterface} from "../interfaces/vehicle.interface.js";
import {TestInterface} from "../interfaces/test.interface.js";

export class Car extends Vehicle implements VenicleInterface, TestInterface {
    public test = 1; // необх присвоить знач, тк подключен и этот интерфейс (TestInterface )!
    public toString(): string {
        return 'Авто марки: ' + this.brandName + ', модель: ' + this.modelName
            + ', год выпуска: ' + this.year + ', автомобиль '
            + this.getConditionString()  + (this._price ? ' цена: ' + this._price : ' free ') ;

    }
    public getTypes(): string[]{
        return ['асфальт']
    }
}*/
import {ConditionType} from "../types/condition.type.js"
import {Vehicle} from "./vehicle.js";

export class Car extends Vehicle {
    public static vehicleName= 'Car!';
    public test = 1; // необх присвоить знач, тк подключен и этот интерфейс (TestInterface )!
    public toString(): string {
        return 'Авто марки: ' + this.brandName + ', модель: ' + this.modelName
            + ', год выпуска: ' + this.year + ', автомобиль '
            + this.getConditionString() + (this._price ? ' цена: ' + this._price : ' free ');

    }

    public getTypes(): string[] {
        return ['асфальт']
    }

//статич методы
    static getVehicleName() {
        return 'Car';
    }
}