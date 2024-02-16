define(["require", "exports", "./vehicle.js"], function (require, exports, vehicle_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Car = void 0;
    class Car extends vehicle_js_1.Vehicle {
        constructor() {
            super(...arguments);
            this.test = 1; // необх присвоить знач, тк подключен и этот интерфейс (TestInterface )!
        }
        toString() {
            return 'Авто марки: ' + this.brandName + ', модель: ' + this.modelName
                + ', год выпуска: ' + this.year + ', автомобиль '
                + this.getConditionString() + (this._price ? ' цена: ' + this._price : ' free ');
        }
        getTypes() {
            return ['асфальт'];
        }
        //статич методы
        static getVehicleName() {
            return 'Car';
        }
    }
    exports.Car = Car;
    Car.vehicleName = 'Car!';
});
