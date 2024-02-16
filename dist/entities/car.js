define(["require", "exports", "./vehicle.js"], function (require, exports, vehicle_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Car = void 0;
    class Car extends vehicle_js_1.Vehicle {
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
    exports.Car = Car;
    Car.vehicleName = 'Car!';
});
//# sourceMappingURL=car.js.map