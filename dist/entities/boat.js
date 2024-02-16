define(["require", "exports", "./vehicle.js"], function (require, exports, vehicle_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Boat = void 0;
    class Boat extends vehicle_js_1.Vehicle {
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
    exports.Boat = Boat;
    Boat.vehicleName = 'Boat!';
});
//# sourceMappingURL=boat.js.map