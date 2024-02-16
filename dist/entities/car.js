import { Vehicle } from "./vehicle.js";
export class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.test = 1;
    }
    toString() {
        return 'Авто марки: ' + this.brandName + ', модель: ' + this.modelName
            + ', год выпуска: ' + this.year + ', автомобиль '
            + this.getConditionString() + (this._price ? ' цена: ' + this._price : ' free ');
    }
    getTypes() {
        return ['асфальт'];
    }
    static getVehicleName() {
        return 'Car';
    }
}
Car.vehicleName = 'Car!';
//# sourceMappingURL=car.js.map