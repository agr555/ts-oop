System.register("types/condition.type", [], function (exports_1, context_1) {
    "use strict";
    var ConditionType;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (ConditionType) {
                ConditionType["new"] = "new";
                ConditionType["used"] = "used";
            })(ConditionType || (exports_1("ConditionType", ConditionType = {})));
        }
    };
});
/*// реализация с интерфейсом
import {ConditionType} from "../types/condition.type.js";

export class Vehicle{
   readonly brandName: string;
   readonly modelName: string;
   readonly year: number;
   private condition: ConditionType;
   protected _price: number | null = null;

   toString(): string;
   getTypes: string[];

   constructor(brandName: string, modelName: string, year: number, condition?: ConditionType) {
       this.brandName = brandName;
       this.modelName = modelName;
       this.year = year;
       this.condition = condition? condition: ConditionType.used;
       // if(!condition){
       //     this.condition = 'used'
       // } else{
       //     this.condition = condition
       // }
   }
   get price(){
       return this._price;
   }
   set price(price:number | null ) {
       if (price === null) {
           this._price = null;
       } else {
           if (price <= 0) {
               this._price = 100;
           } else {
               this._price = price;
           }
       }
   }
   public  setUsedCondition():void{
       this.condition = ConditionType.used;
   }
   protected getConditionString(){
       return (this.condition === ConditionType.new? 'новый': 'подержанный');
   }
  //  если метод есть и в родит и дочернем, дочерний имеет приоритет!
  // public toString(): string {
  //      return 'Что-то марки: ' + this.brandName + ', модель: ' + this.modelName
  //          + ', год выпуска: ' + this.year + ', автомобиль '
  //          + this.getConditionString()  + (this._price ? ' цена: ' + this._price : ' free ') ;
  //
  //  }
}*/
System.register("entities/vehicle", ["types/condition.type"], function (exports_2, context_2) {
    "use strict";
    var condition_type_js_1, Vehicle;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (condition_type_js_1_1) {
                condition_type_js_1 = condition_type_js_1_1;
            }
        ],
        execute: function () {
            Vehicle = class Vehicle {
                constructor(brandName, modelName, year, condition) {
                    this._price = null;
                    this.brandName = brandName;
                    this.modelName = modelName;
                    this.year = year;
                    this.condition = condition ? condition : condition_type_js_1.ConditionType.used;
                    // if(!condition){
                    //     this.condition = 'used'
                    // } else{
                    //     this.condition = condition
                    // }
                }
                get price() {
                    return this._price;
                }
                set price(price) {
                    if (price === null) {
                        this._price = null;
                    }
                    else {
                        if (price <= 0) {
                            this._price = 100;
                        }
                        else {
                            this._price = price;
                        }
                    }
                }
                setUsedCondition() {
                    this.condition = condition_type_js_1.ConditionType.used;
                }
                getConditionString() {
                    return (this.condition === condition_type_js_1.ConditionType.new ? 'новый' : 'подержанный');
                }
            };
            exports_2("Vehicle", Vehicle);
        }
    };
});
System.register("entities/car", ["entities/vehicle"], function (exports_3, context_3) {
    "use strict";
    var vehicle_js_1, Car;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (vehicle_js_1_1) {
                vehicle_js_1 = vehicle_js_1_1;
            }
        ],
        execute: function () {
            Car = class Car extends vehicle_js_1.Vehicle {
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
            };
            exports_3("Car", Car);
            Car.vehicleName = 'Car!';
        }
    };
});
System.register("interfaces/vehicle.interface", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
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
System.register("entities/boat", ["entities/vehicle"], function (exports_5, context_5) {
    "use strict";
    var vehicle_js_2, Boat;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (vehicle_js_2_1) {
                vehicle_js_2 = vehicle_js_2_1;
            }
        ],
        execute: function () {
            Boat = class Boat extends vehicle_js_2.Vehicle {
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
            };
            exports_5("Boat", Boat);
            Boat.vehicleName = 'Boat!';
        }
    };
});
System.register("index", ["types/condition.type", "entities/car", "entities/boat"], function (exports_6, context_6) {
    "use strict";
    var condition_type_js_2, car_js_1, boat_js_1, mersedesC2022, bmw3202021, yamaha212;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (condition_type_js_2_1) {
                condition_type_js_2 = condition_type_js_2_1;
            },
            function (car_js_1_1) {
                car_js_1 = car_js_1_1;
            },
            function (boat_js_1_1) {
                boat_js_1 = boat_js_1_1;
            }
        ],
        execute: function () {
            mersedesC2022 = new car_js_1.Car('Mersedes', 'C-class', 2022, condition_type_js_2.ConditionType.new);
            mersedesC2022.price = -1;
            console.log(mersedesC2022.toString());
            // mersedesC2022.brandName='HONDA'; для private  не даст изм
            // console.log(mersedesC2022.toString());
            mersedesC2022.setUsedCondition();
            console.log(mersedesC2022.toString());
            bmw3202021 = new car_js_1.Car('BMW', '320', 2021);
            bmw3202021.price = 10000;
            console.log(bmw3202021.toString());
            mersedesC2022.price = -1;
            yamaha212 = new boat_js_1.Boat('yamaha', '212', 2024, 20);
            yamaha212.price = 101010;
            console.log(yamaha212.toString());
            //статич методы
            console.log(car_js_1.Car.getVehicleName());
            console.log(boat_js_1.Boat.getVehicleName());
            console.log(car_js_1.Car.vehicleName);
            console.log(boat_js_1.Boat.vehicleName);
            console.log('Hello, world!');
        }
    };
});
System.register("interfaces/test.interface", [], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
