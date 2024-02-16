import {ConditionType} from "./types/condition.type.js"
import {Car} from "./entities/car.js";
import {Boat} from "./entities/boat.js";
const mersedesC2022 = new Car('Mersedes', 'C-class', 2022, ConditionType.new);
mersedesC2022.price = -1;
console.log(mersedesC2022.toString());
// mersedesC2022.brandName='HONDA'; для private  не даст изм
// console.log(mersedesC2022.toString());
mersedesC2022.setUsedCondition();
console.log(mersedesC2022.toString());
const bmw3202021 = new Car('BMW', '320', 2021);
bmw3202021.price = 10000;
console.log( bmw3202021.toString());
mersedesC2022.price = -1;

const yamaha212 = new Boat('yamaha', '212', 2024,20);
yamaha212.price = 101010;
console.log( yamaha212.toString());

//статич методы
console.log(Car.getVehicleName());
console.log(Boat.getVehicleName());

console.log(Car.vehicleName);
console.log(Boat.vehicleName);
