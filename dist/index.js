/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./types/condition.type.js */ "./src/types/condition.type.js"), __webpack_require__(/*! ./entities/car.js */ "./src/entities/car.js"), __webpack_require__(/*! ./entities/boat.js */ "./src/entities/boat.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, condition_type_js_1, car_js_1, boat_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    var mersedesC2022 = new car_js_1.Car('Mersedes', 'C-class', 2022, condition_type_js_1.ConditionType.new);
    mersedesC2022.price = -1;
    console.log(mersedesC2022.toString());
    // mersedesC2022.brandName='HONDA'; для private  не даст изм
    // console.log(mersedesC2022.toString());
    mersedesC2022.setUsedCondition();
    console.log(mersedesC2022.toString());
    var bmw3202021 = new car_js_1.Car('BMW', '320', 2021);
    bmw3202021.price = 10000;
    console.log(bmw3202021.toString());
    mersedesC2022.price = -1;
    var yamaha212 = new boat_js_1.Boat('yamaha', '212', 2024, 20);
    yamaha212.price = 101010;
    console.log(yamaha212.toString());
    //статич методы
    console.log(car_js_1.Car.getVehicleName());
    console.log(boat_js_1.Boat.getVehicleName());
    console.log(car_js_1.Car.vehicleName);
    console.log(boat_js_1.Boat.vehicleName);
    console.log('Hello, world!');
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/entities/boat.js":
/*!******************************!*\
  !*** ./src/entities/boat.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Boat: () => (/* binding */ Boat)
/* harmony export */ });
/* harmony import */ var _vehicle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle.js */ "./src/entities/vehicle.js");
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

class Boat extends _vehicle_js__WEBPACK_IMPORTED_MODULE_0__.Vehicle {
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
Boat.vehicleName = 'Boat!';


/***/ }),

/***/ "./src/entities/car.js":
/*!*****************************!*\
  !*** ./src/entities/car.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Car: () => (/* binding */ Car)
/* harmony export */ });
/* harmony import */ var _vehicle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle.js */ "./src/entities/vehicle.js");

class Car extends _vehicle_js__WEBPACK_IMPORTED_MODULE_0__.Vehicle {
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
Car.vehicleName = 'Car!';


/***/ }),

/***/ "./src/entities/vehicle.js":
/*!*********************************!*\
  !*** ./src/entities/vehicle.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vehicle: () => (/* binding */ Vehicle)
/* harmony export */ });
/* harmony import */ var _types_condition_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/condition.type.js */ "./src/types/condition.type.js");
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

class Vehicle {
    constructor(brandName, modelName, year, condition) {
        this._price = null;
        this.brandName = brandName;
        this.modelName = modelName;
        this.year = year;
        this.condition = condition ? condition : _types_condition_type_js__WEBPACK_IMPORTED_MODULE_0__.ConditionType.used;
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
        this.condition = _types_condition_type_js__WEBPACK_IMPORTED_MODULE_0__.ConditionType.used;
    }
    getConditionString() {
        return (this.condition === _types_condition_type_js__WEBPACK_IMPORTED_MODULE_0__.ConditionType.new ? 'новый' : 'подержанный');
    }
}


/***/ }),

/***/ "./src/types/condition.type.js":
/*!*************************************!*\
  !*** ./src/types/condition.type.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConditionType: () => (/* binding */ ConditionType)
/* harmony export */ });
var ConditionType;
(function (ConditionType) {
    ConditionType["new"] = "new";
    ConditionType["used"] = "used";
})(ConditionType || (ConditionType = {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUdBQU8sQ0FBQyxtQkFBUyxFQUFFLE9BQVMsRUFBRSxxRkFBMkIsRUFBRSxxRUFBbUIsRUFBRSx1RUFBb0IsQ0FBQyxtQ0FBRTtBQUN2RztBQUNBLElBQUksOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQSxrR0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkY7QUFDQSxRQUFRLGVBQWU7QUFDdkIsUUFBUSxTQUFTO0FBQ2pCLFFBQVEsa0JBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNpQztBQUNoQyxtQkFBbUIsZ0RBQU87QUFDakM7QUFDQSxzREFBc0Q7QUFDdEQsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDdUM7QUFDaEMsa0JBQWtCLGdEQUFPO0FBQ2hDO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBLFFBQVEsZUFBZTs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDMEQ7QUFDcEQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELG1FQUFhO0FBQzlEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtRUFBYTtBQUN0QztBQUNBO0FBQ0EsbUNBQW1DLG1FQUFhO0FBQ2hEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Rk87QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNDQUFzQzs7Ozs7OztVQ0p2QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLW9vcC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90cy1vb3AvLi9zcmMvZW50aXRpZXMvYm9hdC5qcyIsIndlYnBhY2s6Ly90cy1vb3AvLi9zcmMvZW50aXRpZXMvY2FyLmpzIiwid2VicGFjazovL3RzLW9vcC8uL3NyYy9lbnRpdGllcy92ZWhpY2xlLmpzIiwid2VicGFjazovL3RzLW9vcC8uL3NyYy90eXBlcy9jb25kaXRpb24udHlwZS5qcyIsIndlYnBhY2s6Ly90cy1vb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtb29wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cy1vb3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cy1vb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cy1vb3Avd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90cy1vb3Avd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RzLW9vcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi90eXBlcy9jb25kaXRpb24udHlwZS5qc1wiLCBcIi4vZW50aXRpZXMvY2FyLmpzXCIsIFwiLi9lbnRpdGllcy9ib2F0LmpzXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgY29uZGl0aW9uX3R5cGVfanNfMSwgY2FyX2pzXzEsIGJvYXRfanNfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB2YXIgbWVyc2VkZXNDMjAyMiA9IG5ldyBjYXJfanNfMS5DYXIoJ01lcnNlZGVzJywgJ0MtY2xhc3MnLCAyMDIyLCBjb25kaXRpb25fdHlwZV9qc18xLkNvbmRpdGlvblR5cGUubmV3KTtcbiAgICBtZXJzZWRlc0MyMDIyLnByaWNlID0gLTE7XG4gICAgY29uc29sZS5sb2cobWVyc2VkZXNDMjAyMi50b1N0cmluZygpKTtcbiAgICAvLyBtZXJzZWRlc0MyMDIyLmJyYW5kTmFtZT0nSE9OREEnOyDQtNC70Y8gcHJpdmF0ZSAg0L3QtSDQtNCw0YHRgiDQuNC30LxcbiAgICAvLyBjb25zb2xlLmxvZyhtZXJzZWRlc0MyMDIyLnRvU3RyaW5nKCkpO1xuICAgIG1lcnNlZGVzQzIwMjIuc2V0VXNlZENvbmRpdGlvbigpO1xuICAgIGNvbnNvbGUubG9nKG1lcnNlZGVzQzIwMjIudG9TdHJpbmcoKSk7XG4gICAgdmFyIGJtdzMyMDIwMjEgPSBuZXcgY2FyX2pzXzEuQ2FyKCdCTVcnLCAnMzIwJywgMjAyMSk7XG4gICAgYm13MzIwMjAyMS5wcmljZSA9IDEwMDAwO1xuICAgIGNvbnNvbGUubG9nKGJtdzMyMDIwMjEudG9TdHJpbmcoKSk7XG4gICAgbWVyc2VkZXNDMjAyMi5wcmljZSA9IC0xO1xuICAgIHZhciB5YW1haGEyMTIgPSBuZXcgYm9hdF9qc18xLkJvYXQoJ3lhbWFoYScsICcyMTInLCAyMDI0LCAyMCk7XG4gICAgeWFtYWhhMjEyLnByaWNlID0gMTAxMDEwO1xuICAgIGNvbnNvbGUubG9nKHlhbWFoYTIxMi50b1N0cmluZygpKTtcbiAgICAvL9GB0YLQsNGC0LjRhyDQvNC10YLQvtC00YtcbiAgICBjb25zb2xlLmxvZyhjYXJfanNfMS5DYXIuZ2V0VmVoaWNsZU5hbWUoKSk7XG4gICAgY29uc29sZS5sb2coYm9hdF9qc18xLkJvYXQuZ2V0VmVoaWNsZU5hbWUoKSk7XG4gICAgY29uc29sZS5sb2coY2FyX2pzXzEuQ2FyLnZlaGljbGVOYW1lKTtcbiAgICBjb25zb2xlLmxvZyhib2F0X2pzXzEuQm9hdC52ZWhpY2xlTmFtZSk7XG4gICAgY29uc29sZS5sb2coJ0hlbGxvLCB3b3JsZCEnKTtcbn0pO1xuIiwiLyrRgNC10LDQu9C40LfQsNGG0LjRjyDRgSDQuNC90YLQtdGA0YTQtdC50YHQvtC8XG5pbXBvcnQge0NvbmRpdGlvblR5cGV9IGZyb20gXCIuLi90eXBlcy9jb25kaXRpb24udHlwZS5qc1wiXG5pbXBvcnQge1ZlaGljbGV9IGZyb20gXCIuL3ZlaGljbGUuanNcIjtcbmltcG9ydCB7VmVuaWNsZUludGVyZmFjZX0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdmVoaWNsZS5pbnRlcmZhY2UuanNcIlxuZXhwb3J0IGNsYXNzIEJvYXQgZXh0ZW5kcyBWZWhpY2xlIGltcGxlbWVudHMgVmVuaWNsZUludGVyZmFjZXtcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICfQmtCw0YLQtdGAINC80LDRgNC60Lg6ICcgKyB0aGlzLmJyYW5kTmFtZSArICcsINC80L7QtNC10LvRjDogJyArIHRoaXMubW9kZWxOYW1lXG4gICAgICAgICAgICArICcsINCz0L7QtCDQstGL0L/Rg9GB0LrQsDogJyArIHRoaXMueWVhciArICcsINC60LDRgtC10YAgJ1xuICAgICAgICAgICAgKyB0aGlzLmdldENvbmRpdGlvblN0cmluZygpICArICh0aGlzLl9wcmljZSA/ICcg0YbQtdC90LA6ICcgKyB0aGlzLl9wcmljZSA6ICcgZnJlZSAnKSA7XG5cbiAgICB9XG4gICAgcHVibGljIGdldFR5cGVzKCk6IHN0cmluZ1tde1xuICAgICAgICByZXR1cm4gWyfRgNC10LrQsCcsJ9C80L7RgNC1Jywn0L7QutC10LDQvScsICfQvtC30LXRgNC+J107XG4gICAgfX0qL1xuaW1wb3J0IHsgVmVoaWNsZSB9IGZyb20gXCIuL3ZlaGljbGUuanNcIjtcbmV4cG9ydCBjbGFzcyBCb2F0IGV4dGVuZHMgVmVoaWNsZSB7XG4gICAgY29uc3RydWN0b3IoYnJhbmROYW1lLCBtb2RlbE5hbWUsIHllYXIsIGxlbmd0aCwgY29uZGl0aW9uKSB7XG4gICAgICAgIHN1cGVyKGJyYW5kTmFtZSwgbW9kZWxOYW1lLCB5ZWFyLCBjb25kaXRpb24pOyAvLyAg0LrQsNC6INCyINGA0L7QtNC40YIg0LrQu9Cw0YHRgdC1XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoOyAvLyArINGB0LLQvtC1INGB0LLQvtC50YHRgtCy0L5cbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiAn0JrQsNGC0LXRgCDQvNCw0YDQutC4OiAnICsgdGhpcy5icmFuZE5hbWUgKyAnLCDQvNC+0LTQtdC70Yw6ICcgKyB0aGlzLm1vZGVsTmFtZVxuICAgICAgICAgICAgKyAnLCDQs9C+0LQg0LLRi9C/0YPRgdC60LA6ICcgKyB0aGlzLnllYXIgKyAnLCDQutCw0YLQtdGAICdcbiAgICAgICAgICAgICsgdGhpcy5nZXRDb25kaXRpb25TdHJpbmcoKSArICh0aGlzLl9wcmljZSA/ICcg0YbQtdC90LA6ICcgKyB0aGlzLl9wcmljZSA6ICcgZnJlZSAnKSArXG4gICAgICAgICAgICAnLCDQtNC70LjQvdC+0LkgJyArIHRoaXMubGVuZ3RoICsgJ9C8Lic7XG4gICAgfVxuICAgIGdldFR5cGVzKCkge1xuICAgICAgICByZXR1cm4gWyfRgNC10LrQsCcsICfQvNC+0YDQtScsICfQvtC60LXQsNC9JywgJ9C+0LfQtdGA0L4nXTtcbiAgICB9XG4gICAgLy/RgdGC0LDRgtC40Ycg0LzQtdGC0L7QtNGLXG4gICAgc3RhdGljIGdldFZlaGljbGVOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ0JvYXQnO1xuICAgIH1cbn1cbkJvYXQudmVoaWNsZU5hbWUgPSAnQm9hdCEnO1xuIiwiaW1wb3J0IHsgVmVoaWNsZSB9IGZyb20gXCIuL3ZlaGljbGUuanNcIjtcbmV4cG9ydCBjbGFzcyBDYXIgZXh0ZW5kcyBWZWhpY2xlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50ZXN0ID0gMTsgLy8g0L3QtdC+0LHRhSDQv9GA0LjRgdCy0L7QuNGC0Ywg0LfQvdCw0YcsINGC0Log0L/QvtC00LrQu9GO0YfQtdC9INC4INGN0YLQvtGCINC40L3RgtC10YDRhNC10LnRgSAoVGVzdEludGVyZmFjZSApIVxuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuICfQkNCy0YLQviDQvNCw0YDQutC4OiAnICsgdGhpcy5icmFuZE5hbWUgKyAnLCDQvNC+0LTQtdC70Yw6ICcgKyB0aGlzLm1vZGVsTmFtZVxuICAgICAgICAgICAgKyAnLCDQs9C+0LQg0LLRi9C/0YPRgdC60LA6ICcgKyB0aGlzLnllYXIgKyAnLCDQsNCy0YLQvtC80L7QsdC40LvRjCAnXG4gICAgICAgICAgICArIHRoaXMuZ2V0Q29uZGl0aW9uU3RyaW5nKCkgKyAodGhpcy5fcHJpY2UgPyAnINGG0LXQvdCwOiAnICsgdGhpcy5fcHJpY2UgOiAnIGZyZWUgJyk7XG4gICAgfVxuICAgIGdldFR5cGVzKCkge1xuICAgICAgICByZXR1cm4gWyfQsNGB0YTQsNC70YzRgiddO1xuICAgIH1cbiAgICAvL9GB0YLQsNGC0LjRhyDQvNC10YLQvtC00YtcbiAgICBzdGF0aWMgZ2V0VmVoaWNsZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnQ2FyJztcbiAgICB9XG59XG5DYXIudmVoaWNsZU5hbWUgPSAnQ2FyISc7XG4iLCIvKi8vINGA0LXQsNC70LjQt9Cw0YbQuNGPINGBINC40L3RgtC10YDRhNC10LnRgdC+0LxcbmltcG9ydCB7Q29uZGl0aW9uVHlwZX0gZnJvbSBcIi4uL3R5cGVzL2NvbmRpdGlvbi50eXBlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBWZWhpY2xle1xuICAgcmVhZG9ubHkgYnJhbmROYW1lOiBzdHJpbmc7XG4gICByZWFkb25seSBtb2RlbE5hbWU6IHN0cmluZztcbiAgIHJlYWRvbmx5IHllYXI6IG51bWJlcjtcbiAgIHByaXZhdGUgY29uZGl0aW9uOiBDb25kaXRpb25UeXBlO1xuICAgcHJvdGVjdGVkIF9wcmljZTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgIHRvU3RyaW5nKCk6IHN0cmluZztcbiAgIGdldFR5cGVzOiBzdHJpbmdbXTtcblxuICAgY29uc3RydWN0b3IoYnJhbmROYW1lOiBzdHJpbmcsIG1vZGVsTmFtZTogc3RyaW5nLCB5ZWFyOiBudW1iZXIsIGNvbmRpdGlvbj86IENvbmRpdGlvblR5cGUpIHtcbiAgICAgICB0aGlzLmJyYW5kTmFtZSA9IGJyYW5kTmFtZTtcbiAgICAgICB0aGlzLm1vZGVsTmFtZSA9IG1vZGVsTmFtZTtcbiAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uPyBjb25kaXRpb246IENvbmRpdGlvblR5cGUudXNlZDtcbiAgICAgICAvLyBpZighY29uZGl0aW9uKXtcbiAgICAgICAvLyAgICAgdGhpcy5jb25kaXRpb24gPSAndXNlZCdcbiAgICAgICAvLyB9IGVsc2V7XG4gICAgICAgLy8gICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uXG4gICAgICAgLy8gfVxuICAgfVxuICAgZ2V0IHByaWNlKCl7XG4gICAgICAgcmV0dXJuIHRoaXMuX3ByaWNlO1xuICAgfVxuICAgc2V0IHByaWNlKHByaWNlOm51bWJlciB8IG51bGwgKSB7XG4gICAgICAgaWYgKHByaWNlID09PSBudWxsKSB7XG4gICAgICAgICAgIHRoaXMuX3ByaWNlID0gbnVsbDtcbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICBpZiAocHJpY2UgPD0gMCkge1xuICAgICAgICAgICAgICAgdGhpcy5fcHJpY2UgPSAxMDA7XG4gICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICB0aGlzLl9wcmljZSA9IHByaWNlO1xuICAgICAgICAgICB9XG4gICAgICAgfVxuICAgfVxuICAgcHVibGljICBzZXRVc2VkQ29uZGl0aW9uKCk6dm9pZHtcbiAgICAgICB0aGlzLmNvbmRpdGlvbiA9IENvbmRpdGlvblR5cGUudXNlZDtcbiAgIH1cbiAgIHByb3RlY3RlZCBnZXRDb25kaXRpb25TdHJpbmcoKXtcbiAgICAgICByZXR1cm4gKHRoaXMuY29uZGl0aW9uID09PSBDb25kaXRpb25UeXBlLm5ldz8gJ9C90L7QstGL0LknOiAn0L/QvtC00LXRgNC20LDQvdC90YvQuScpO1xuICAgfVxuICAvLyAg0LXRgdC70Lgg0LzQtdGC0L7QtCDQtdGB0YLRjCDQuCDQsiDRgNC+0LTQuNGCINC4INC00L7Rh9C10YDQvdC10LwsINC00L7Rh9C10YDQvdC40Lkg0LjQvNC10LXRgiDQv9GA0LjQvtGA0LjRgtC10YIhXG4gIC8vIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAvLyAgICAgIHJldHVybiAn0KfRgtC+LdGC0L4g0LzQsNGA0LrQuDogJyArIHRoaXMuYnJhbmROYW1lICsgJywg0LzQvtC00LXQu9GMOiAnICsgdGhpcy5tb2RlbE5hbWVcbiAgLy8gICAgICAgICAgKyAnLCDQs9C+0LQg0LLRi9C/0YPRgdC60LA6ICcgKyB0aGlzLnllYXIgKyAnLCDQsNCy0YLQvtC80L7QsdC40LvRjCAnXG4gIC8vICAgICAgICAgICsgdGhpcy5nZXRDb25kaXRpb25TdHJpbmcoKSAgKyAodGhpcy5fcHJpY2UgPyAnINGG0LXQvdCwOiAnICsgdGhpcy5fcHJpY2UgOiAnIGZyZWUgJykgO1xuICAvL1xuICAvLyAgfVxufSovXG5pbXBvcnQgeyBDb25kaXRpb25UeXBlIH0gZnJvbSBcIi4uL3R5cGVzL2NvbmRpdGlvbi50eXBlLmpzXCI7XG5leHBvcnQgY2xhc3MgVmVoaWNsZSB7XG4gICAgY29uc3RydWN0b3IoYnJhbmROYW1lLCBtb2RlbE5hbWUsIHllYXIsIGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLl9wcmljZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYnJhbmROYW1lID0gYnJhbmROYW1lO1xuICAgICAgICB0aGlzLm1vZGVsTmFtZSA9IG1vZGVsTmFtZTtcbiAgICAgICAgdGhpcy55ZWFyID0geWVhcjtcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb24gPyBjb25kaXRpb24gOiBDb25kaXRpb25UeXBlLnVzZWQ7XG4gICAgICAgIC8vIGlmKCFjb25kaXRpb24pe1xuICAgICAgICAvLyAgICAgdGhpcy5jb25kaXRpb24gPSAndXNlZCdcbiAgICAgICAgLy8gfSBlbHNle1xuICAgICAgICAvLyAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb25cbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBnZXQgcHJpY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmljZTtcbiAgICB9XG4gICAgc2V0IHByaWNlKHByaWNlKSB7XG4gICAgICAgIGlmIChwcmljZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fcHJpY2UgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByaWNlIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmljZSA9IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByaWNlID0gcHJpY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0VXNlZENvbmRpdGlvbigpIHtcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBDb25kaXRpb25UeXBlLnVzZWQ7XG4gICAgfVxuICAgIGdldENvbmRpdGlvblN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvbmRpdGlvbiA9PT0gQ29uZGl0aW9uVHlwZS5uZXcgPyAn0L3QvtCy0YvQuScgOiAn0L/QvtC00LXRgNC20LDQvdC90YvQuScpO1xuICAgIH1cbn1cbiIsImV4cG9ydCB2YXIgQ29uZGl0aW9uVHlwZTtcbihmdW5jdGlvbiAoQ29uZGl0aW9uVHlwZSkge1xuICAgIENvbmRpdGlvblR5cGVbXCJuZXdcIl0gPSBcIm5ld1wiO1xuICAgIENvbmRpdGlvblR5cGVbXCJ1c2VkXCJdID0gXCJ1c2VkXCI7XG59KShDb25kaXRpb25UeXBlIHx8IChDb25kaXRpb25UeXBlID0ge30pKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9