import { Vehicle } from "./vehicle.js";
export class Boat extends Vehicle {
    constructor(brandName, modelName, year, length, condition) {
        super(brandName, modelName, year, condition);
        this.length = length;
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
    static getVehicleName() {
        return 'Boat';
    }
}
Boat.vehicleName = 'Boat!';
//# sourceMappingURL=boat.js.map