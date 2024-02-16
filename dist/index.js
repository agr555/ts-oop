define(["require", "exports", "./types/condition.type.js", "./entities/car.js", "./entities/boat.js"], function (require, exports, condition_type_js_1, car_js_1, boat_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const mersedesC2022 = new car_js_1.Car('Mersedes', 'C-class', 2022, condition_type_js_1.ConditionType.new);
    mersedesC2022.price = -1;
    console.log(mersedesC2022.toString());
    // mersedesC2022.brandName='HONDA'; для private  не даст изм
    // console.log(mersedesC2022.toString());
    mersedesC2022.setUsedCondition();
    console.log(mersedesC2022.toString());
    const bmw3202021 = new car_js_1.Car('BMW', '320', 2021);
    bmw3202021.price = 10000;
    console.log(bmw3202021.toString());
    mersedesC2022.price = -1;
    const yamaha212 = new boat_js_1.Boat('yamaha', '212', 2024, 20);
    yamaha212.price = 101010;
    console.log(yamaha212.toString());
    //статич методы
    console.log(car_js_1.Car.getVehicleName());
    console.log(boat_js_1.Boat.getVehicleName());
    console.log(car_js_1.Car.vehicleName);
    console.log(boat_js_1.Boat.vehicleName);
    console.log('Hello, world!');
});
