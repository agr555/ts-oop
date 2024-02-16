/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entities/boat.ts":
/*!******************************!*\
  !*** ./src/entities/boat.ts ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*реализация с интерфейсом
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./vehicle.js */ "./src/entities/vehicle.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vehicle_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Boat = void 0;
    var Boat = /** @class */ (function (_super) {
        __extends(Boat, _super);
        function Boat(brandName, modelName, year, length, condition) {
            var _this = _super.call(this, brandName, modelName, year, condition) || this; //  как в родит классе
            _this.length = length; // + свое свойство
            return _this;
        }
        Boat.prototype.toString = function () {
            return 'Катер марки: ' + this.brandName + ', модель: ' + this.modelName
                + ', год выпуска: ' + this.year + ', катер '
                + this.getConditionString() + (this._price ? ' цена: ' + this._price : ' free ') +
                ', длиной ' + this.length + 'м.';
        };
        Boat.prototype.getTypes = function () {
            return ['река', 'море', 'океан', 'озеро'];
        };
        //статич методы
        Boat.getVehicleName = function () {
            return 'Boat';
        };
        Boat.vehicleName = 'Boat!';
        return Boat;
    }(vehicle_js_1.Vehicle));
    exports.Boat = Boat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/entities/car.ts":
/*!*****************************!*\
  !*** ./src/entities/car.ts ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./vehicle.js */ "./src/entities/vehicle.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vehicle_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Car = void 0;
    var Car = /** @class */ (function (_super) {
        __extends(Car, _super);
        function Car() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.test = 1; // необх присвоить знач, тк подключен и этот интерфейс (TestInterface )!
            return _this;
        }
        Car.prototype.toString = function () {
            return 'Авто марки: ' + this.brandName + ', модель: ' + this.modelName
                + ', год выпуска: ' + this.year + ', автомобиль '
                + this.getConditionString() + (this._price ? ' цена: ' + this._price : ' free ');
        };
        Car.prototype.getTypes = function () {
            return ['асфальт'];
        };
        //статич методы
        Car.getVehicleName = function () {
            return 'Car';
        };
        Car.vehicleName = 'Car!';
        return Car;
    }(vehicle_js_1.Vehicle));
    exports.Car = Car;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./types/condition.type */ "./src/types/condition.type.ts"), __webpack_require__(/*! ./entities/car */ "./src/entities/car.ts"), __webpack_require__(/*! ./entities/boat */ "./src/entities/boat.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, condition_type_1, car_1, boat_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    var mersedesC2022 = new car_1.Car('Mersedes', 'C-class', 2022, condition_type_1.ConditionType.new);
    mersedesC2022.price = -1;
    console.log(mersedesC2022.toString());
    // mersedesC2022.brandName='HONDA'; для private  не даст изм
    // console.log(mersedesC2022.toString());
    mersedesC2022.setUsedCondition();
    console.log(mersedesC2022.toString());
    var bmw3202021 = new car_1.Car('BMW', '320', 2021);
    bmw3202021.price = 10000;
    console.log(bmw3202021.toString());
    mersedesC2022.price = -1;
    var yamaha212 = new boat_1.Boat('yamaha', '212', 2024, 20);
    yamaha212.price = 101010;
    console.log(yamaha212.toString());
    //статич методы
    console.log(car_1.Car.getVehicleName());
    console.log(boat_1.Boat.getVehicleName());
    console.log(car_1.Car.vehicleName);
    console.log(boat_1.Boat.vehicleName);
    console.log('Hello, world!');
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/types/condition.type.ts":
/*!*************************************!*\
  !*** ./src/types/condition.type.ts ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.ConditionType = void 0;
    var ConditionType;
    (function (ConditionType) {
        ConditionType["new"] = "new";
        ConditionType["used"] = "used";
    })(ConditionType || (exports.ConditionType = ConditionType = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtRUFBYTtBQUN0QztBQUNBO0FBQ0EsbUNBQW1DLG1FQUFhO0FBQ2hEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Rk87QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNDQUFzQzs7Ozs7OztVQ0p2QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLW9vcC8uL3NyYy9lbnRpdGllcy9ib2F0LnRzIiwid2VicGFjazovL3RzLW9vcC8uL3NyYy9lbnRpdGllcy9jYXIudHMiLCJ3ZWJwYWNrOi8vdHMtb29wLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3RzLW9vcC8uL3NyYy90eXBlcy9jb25kaXRpb24udHlwZS50cyIsIndlYnBhY2s6Ly90cy1vb3AvLi9zcmMvZW50aXRpZXMvdmVoaWNsZS5qcyIsIndlYnBhY2s6Ly90cy1vb3AvLi9zcmMvdHlwZXMvY29uZGl0aW9uLnR5cGUuanMiLCJ3ZWJwYWNrOi8vdHMtb29wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLW9vcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMtb29wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMtb29wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtb29wL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHMtb29wL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90cy1vb3Avd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8q0YDQtdCw0LvQuNC30LDRhtC40Y8g0YEg0LjQvdGC0LXRgNGE0LXQudGB0L7QvFxuaW1wb3J0IHtDb25kaXRpb25UeXBlfSBmcm9tIFwiLi4vdHlwZXMvY29uZGl0aW9uLnR5cGUuanNcIlxuaW1wb3J0IHtWZWhpY2xlfSBmcm9tIFwiLi92ZWhpY2xlLmpzXCI7XG5pbXBvcnQge1ZlbmljbGVJbnRlcmZhY2V9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3ZlaGljbGUuaW50ZXJmYWNlLmpzXCJcbmV4cG9ydCBjbGFzcyBCb2F0IGV4dGVuZHMgVmVoaWNsZSBpbXBsZW1lbnRzIFZlbmljbGVJbnRlcmZhY2V7XG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAn0JrQsNGC0LXRgCDQvNCw0YDQutC4OiAnICsgdGhpcy5icmFuZE5hbWUgKyAnLCDQvNC+0LTQtdC70Yw6ICcgKyB0aGlzLm1vZGVsTmFtZVxuICAgICAgICAgICAgKyAnLCDQs9C+0LQg0LLRi9C/0YPRgdC60LA6ICcgKyB0aGlzLnllYXIgKyAnLCDQutCw0YLQtdGAICdcbiAgICAgICAgICAgICsgdGhpcy5nZXRDb25kaXRpb25TdHJpbmcoKSAgKyAodGhpcy5fcHJpY2UgPyAnINGG0LXQvdCwOiAnICsgdGhpcy5fcHJpY2UgOiAnIGZyZWUgJykgO1xuXG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlcygpOiBzdHJpbmdbXXtcbiAgICAgICAgcmV0dXJuIFsn0YDQtdC60LAnLCfQvNC+0YDQtScsJ9C+0LrQtdCw0L0nLCAn0L7Qt9C10YDQviddO1xuICAgIH19Ki9cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL3ZlaGljbGUuanNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCB2ZWhpY2xlX2pzXzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgZXhwb3J0cy5Cb2F0ID0gdm9pZCAwO1xuICAgIHZhciBCb2F0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoQm9hdCwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gQm9hdChicmFuZE5hbWUsIG1vZGVsTmFtZSwgeWVhciwgbGVuZ3RoLCBjb25kaXRpb24pIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGJyYW5kTmFtZSwgbW9kZWxOYW1lLCB5ZWFyLCBjb25kaXRpb24pIHx8IHRoaXM7IC8vICDQutCw0Log0LIg0YDQvtC00LjRgiDQutC70LDRgdGB0LVcbiAgICAgICAgICAgIF90aGlzLmxlbmd0aCA9IGxlbmd0aDsgLy8gKyDRgdCy0L7QtSDRgdCy0L7QudGB0YLQstC+XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgQm9hdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ9Ca0LDRgtC10YAg0LzQsNGA0LrQuDogJyArIHRoaXMuYnJhbmROYW1lICsgJywg0LzQvtC00LXQu9GMOiAnICsgdGhpcy5tb2RlbE5hbWVcbiAgICAgICAgICAgICAgICArICcsINCz0L7QtCDQstGL0L/Rg9GB0LrQsDogJyArIHRoaXMueWVhciArICcsINC60LDRgtC10YAgJ1xuICAgICAgICAgICAgICAgICsgdGhpcy5nZXRDb25kaXRpb25TdHJpbmcoKSArICh0aGlzLl9wcmljZSA/ICcg0YbQtdC90LA6ICcgKyB0aGlzLl9wcmljZSA6ICcgZnJlZSAnKSArXG4gICAgICAgICAgICAgICAgJywg0LTQu9C40L3QvtC5ICcgKyB0aGlzLmxlbmd0aCArICfQvC4nO1xuICAgICAgICB9O1xuICAgICAgICBCb2F0LnByb3RvdHlwZS5nZXRUeXBlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBbJ9GA0LXQutCwJywgJ9C80L7RgNC1JywgJ9C+0LrQtdCw0L0nLCAn0L7Qt9C10YDQviddO1xuICAgICAgICB9O1xuICAgICAgICAvL9GB0YLQsNGC0LjRhyDQvNC10YLQvtC00YtcbiAgICAgICAgQm9hdC5nZXRWZWhpY2xlTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnQm9hdCc7XG4gICAgICAgIH07XG4gICAgICAgIEJvYXQudmVoaWNsZU5hbWUgPSAnQm9hdCEnO1xuICAgICAgICByZXR1cm4gQm9hdDtcbiAgICB9KHZlaGljbGVfanNfMS5WZWhpY2xlKSk7XG4gICAgZXhwb3J0cy5Cb2F0ID0gQm9hdDtcbn0pO1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIi4vdmVoaWNsZS5qc1wiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIHZlaGljbGVfanNfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBleHBvcnRzLkNhciA9IHZvaWQgMDtcbiAgICB2YXIgQ2FyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoQ2FyLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBDYXIoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgICAgIF90aGlzLnRlc3QgPSAxOyAvLyDQvdC10L7QsdGFINC/0YDQuNGB0LLQvtC40YLRjCDQt9C90LDRhywg0YLQuiDQv9C+0LTQutC70Y7Rh9C10L0g0Lgg0Y3RgtC+0YIg0LjQvdGC0LXRgNGE0LXQudGBIChUZXN0SW50ZXJmYWNlICkhXG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgQ2FyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAn0JDQstGC0L4g0LzQsNGA0LrQuDogJyArIHRoaXMuYnJhbmROYW1lICsgJywg0LzQvtC00LXQu9GMOiAnICsgdGhpcy5tb2RlbE5hbWVcbiAgICAgICAgICAgICAgICArICcsINCz0L7QtCDQstGL0L/Rg9GB0LrQsDogJyArIHRoaXMueWVhciArICcsINCw0LLRgtC+0LzQvtCx0LjQu9GMICdcbiAgICAgICAgICAgICAgICArIHRoaXMuZ2V0Q29uZGl0aW9uU3RyaW5nKCkgKyAodGhpcy5fcHJpY2UgPyAnINGG0LXQvdCwOiAnICsgdGhpcy5fcHJpY2UgOiAnIGZyZWUgJyk7XG4gICAgICAgIH07XG4gICAgICAgIENhci5wcm90b3R5cGUuZ2V0VHlwZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gWyfQsNGB0YTQsNC70YzRgiddO1xuICAgICAgICB9O1xuICAgICAgICAvL9GB0YLQsNGC0LjRhyDQvNC10YLQvtC00YtcbiAgICAgICAgQ2FyLmdldFZlaGljbGVOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdDYXInO1xuICAgICAgICB9O1xuICAgICAgICBDYXIudmVoaWNsZU5hbWUgPSAnQ2FyISc7XG4gICAgICAgIHJldHVybiBDYXI7XG4gICAgfSh2ZWhpY2xlX2pzXzEuVmVoaWNsZSkpO1xuICAgIGV4cG9ydHMuQ2FyID0gQ2FyO1xufSk7XG4iLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL3R5cGVzL2NvbmRpdGlvbi50eXBlXCIsIFwiLi9lbnRpdGllcy9jYXJcIiwgXCIuL2VudGl0aWVzL2JvYXRcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBjb25kaXRpb25fdHlwZV8xLCBjYXJfMSwgYm9hdF8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHZhciBtZXJzZWRlc0MyMDIyID0gbmV3IGNhcl8xLkNhcignTWVyc2VkZXMnLCAnQy1jbGFzcycsIDIwMjIsIGNvbmRpdGlvbl90eXBlXzEuQ29uZGl0aW9uVHlwZS5uZXcpO1xuICAgIG1lcnNlZGVzQzIwMjIucHJpY2UgPSAtMTtcbiAgICBjb25zb2xlLmxvZyhtZXJzZWRlc0MyMDIyLnRvU3RyaW5nKCkpO1xuICAgIC8vIG1lcnNlZGVzQzIwMjIuYnJhbmROYW1lPSdIT05EQSc7INC00LvRjyBwcml2YXRlICDQvdC1INC00LDRgdGCINC40LfQvFxuICAgIC8vIGNvbnNvbGUubG9nKG1lcnNlZGVzQzIwMjIudG9TdHJpbmcoKSk7XG4gICAgbWVyc2VkZXNDMjAyMi5zZXRVc2VkQ29uZGl0aW9uKCk7XG4gICAgY29uc29sZS5sb2cobWVyc2VkZXNDMjAyMi50b1N0cmluZygpKTtcbiAgICB2YXIgYm13MzIwMjAyMSA9IG5ldyBjYXJfMS5DYXIoJ0JNVycsICczMjAnLCAyMDIxKTtcbiAgICBibXczMjAyMDIxLnByaWNlID0gMTAwMDA7XG4gICAgY29uc29sZS5sb2coYm13MzIwMjAyMS50b1N0cmluZygpKTtcbiAgICBtZXJzZWRlc0MyMDIyLnByaWNlID0gLTE7XG4gICAgdmFyIHlhbWFoYTIxMiA9IG5ldyBib2F0XzEuQm9hdCgneWFtYWhhJywgJzIxMicsIDIwMjQsIDIwKTtcbiAgICB5YW1haGEyMTIucHJpY2UgPSAxMDEwMTA7XG4gICAgY29uc29sZS5sb2coeWFtYWhhMjEyLnRvU3RyaW5nKCkpO1xuICAgIC8v0YHRgtCw0YLQuNGHINC80LXRgtC+0LTRi1xuICAgIGNvbnNvbGUubG9nKGNhcl8xLkNhci5nZXRWZWhpY2xlTmFtZSgpKTtcbiAgICBjb25zb2xlLmxvZyhib2F0XzEuQm9hdC5nZXRWZWhpY2xlTmFtZSgpKTtcbiAgICBjb25zb2xlLmxvZyhjYXJfMS5DYXIudmVoaWNsZU5hbWUpO1xuICAgIGNvbnNvbGUubG9nKGJvYXRfMS5Cb2F0LnZlaGljbGVOYW1lKTtcbiAgICBjb25zb2xlLmxvZygnSGVsbG8sIHdvcmxkIScpO1xufSk7XG4iLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIGV4cG9ydHMuQ29uZGl0aW9uVHlwZSA9IHZvaWQgMDtcbiAgICB2YXIgQ29uZGl0aW9uVHlwZTtcbiAgICAoZnVuY3Rpb24gKENvbmRpdGlvblR5cGUpIHtcbiAgICAgICAgQ29uZGl0aW9uVHlwZVtcIm5ld1wiXSA9IFwibmV3XCI7XG4gICAgICAgIENvbmRpdGlvblR5cGVbXCJ1c2VkXCJdID0gXCJ1c2VkXCI7XG4gICAgfSkoQ29uZGl0aW9uVHlwZSB8fCAoZXhwb3J0cy5Db25kaXRpb25UeXBlID0gQ29uZGl0aW9uVHlwZSA9IHt9KSk7XG59KTtcbiIsIi8qLy8g0YDQtdCw0LvQuNC30LDRhtC40Y8g0YEg0LjQvdGC0LXRgNGE0LXQudGB0L7QvFxuaW1wb3J0IHtDb25kaXRpb25UeXBlfSBmcm9tIFwiLi4vdHlwZXMvY29uZGl0aW9uLnR5cGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIFZlaGljbGV7XG4gICByZWFkb25seSBicmFuZE5hbWU6IHN0cmluZztcbiAgIHJlYWRvbmx5IG1vZGVsTmFtZTogc3RyaW5nO1xuICAgcmVhZG9ubHkgeWVhcjogbnVtYmVyO1xuICAgcHJpdmF0ZSBjb25kaXRpb246IENvbmRpdGlvblR5cGU7XG4gICBwcm90ZWN0ZWQgX3ByaWNlOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICAgdG9TdHJpbmcoKTogc3RyaW5nO1xuICAgZ2V0VHlwZXM6IHN0cmluZ1tdO1xuXG4gICBjb25zdHJ1Y3RvcihicmFuZE5hbWU6IHN0cmluZywgbW9kZWxOYW1lOiBzdHJpbmcsIHllYXI6IG51bWJlciwgY29uZGl0aW9uPzogQ29uZGl0aW9uVHlwZSkge1xuICAgICAgIHRoaXMuYnJhbmROYW1lID0gYnJhbmROYW1lO1xuICAgICAgIHRoaXMubW9kZWxOYW1lID0gbW9kZWxOYW1lO1xuICAgICAgIHRoaXMueWVhciA9IHllYXI7XG4gICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb24/IGNvbmRpdGlvbjogQ29uZGl0aW9uVHlwZS51c2VkO1xuICAgICAgIC8vIGlmKCFjb25kaXRpb24pe1xuICAgICAgIC8vICAgICB0aGlzLmNvbmRpdGlvbiA9ICd1c2VkJ1xuICAgICAgIC8vIH0gZWxzZXtcbiAgICAgICAvLyAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb25cbiAgICAgICAvLyB9XG4gICB9XG4gICBnZXQgcHJpY2UoKXtcbiAgICAgICByZXR1cm4gdGhpcy5fcHJpY2U7XG4gICB9XG4gICBzZXQgcHJpY2UocHJpY2U6bnVtYmVyIHwgbnVsbCApIHtcbiAgICAgICBpZiAocHJpY2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgdGhpcy5fcHJpY2UgPSBudWxsO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIGlmIChwcmljZSA8PSAwKSB7XG4gICAgICAgICAgICAgICB0aGlzLl9wcmljZSA9IDEwMDtcbiAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIHRoaXMuX3ByaWNlID0gcHJpY2U7XG4gICAgICAgICAgIH1cbiAgICAgICB9XG4gICB9XG4gICBwdWJsaWMgIHNldFVzZWRDb25kaXRpb24oKTp2b2lke1xuICAgICAgIHRoaXMuY29uZGl0aW9uID0gQ29uZGl0aW9uVHlwZS51c2VkO1xuICAgfVxuICAgcHJvdGVjdGVkIGdldENvbmRpdGlvblN0cmluZygpe1xuICAgICAgIHJldHVybiAodGhpcy5jb25kaXRpb24gPT09IENvbmRpdGlvblR5cGUubmV3PyAn0L3QvtCy0YvQuSc6ICfQv9C+0LTQtdGA0LbQsNC90L3Ri9C5Jyk7XG4gICB9XG4gIC8vICDQtdGB0LvQuCDQvNC10YLQvtC0INC10YHRgtGMINC4INCyINGA0L7QtNC40YIg0Lgg0LTQvtGH0LXRgNC90LXQvCwg0LTQvtGH0LXRgNC90LjQuSDQuNC80LXQtdGCINC/0YDQuNC+0YDQuNGC0LXRgiFcbiAgLy8gcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gIC8vICAgICAgcmV0dXJuICfQp9GC0L4t0YLQviDQvNCw0YDQutC4OiAnICsgdGhpcy5icmFuZE5hbWUgKyAnLCDQvNC+0LTQtdC70Yw6ICcgKyB0aGlzLm1vZGVsTmFtZVxuICAvLyAgICAgICAgICArICcsINCz0L7QtCDQstGL0L/Rg9GB0LrQsDogJyArIHRoaXMueWVhciArICcsINCw0LLRgtC+0LzQvtCx0LjQu9GMICdcbiAgLy8gICAgICAgICAgKyB0aGlzLmdldENvbmRpdGlvblN0cmluZygpICArICh0aGlzLl9wcmljZSA/ICcg0YbQtdC90LA6ICcgKyB0aGlzLl9wcmljZSA6ICcgZnJlZSAnKSA7XG4gIC8vXG4gIC8vICB9XG59Ki9cbmltcG9ydCB7IENvbmRpdGlvblR5cGUgfSBmcm9tIFwiLi4vdHlwZXMvY29uZGl0aW9uLnR5cGUuanNcIjtcbmV4cG9ydCBjbGFzcyBWZWhpY2xlIHtcbiAgICBjb25zdHJ1Y3RvcihicmFuZE5hbWUsIG1vZGVsTmFtZSwgeWVhciwgY29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuX3ByaWNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5icmFuZE5hbWUgPSBicmFuZE5hbWU7XG4gICAgICAgIHRoaXMubW9kZWxOYW1lID0gbW9kZWxOYW1lO1xuICAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/IGNvbmRpdGlvbiA6IENvbmRpdGlvblR5cGUudXNlZDtcbiAgICAgICAgLy8gaWYoIWNvbmRpdGlvbil7XG4gICAgICAgIC8vICAgICB0aGlzLmNvbmRpdGlvbiA9ICd1c2VkJ1xuICAgICAgICAvLyB9IGVsc2V7XG4gICAgICAgIC8vICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvblxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIGdldCBwcmljZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaWNlO1xuICAgIH1cbiAgICBzZXQgcHJpY2UocHJpY2UpIHtcbiAgICAgICAgaWYgKHByaWNlID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmljZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJpY2UgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByaWNlID0gMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJpY2UgPSBwcmljZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRVc2VkQ29uZGl0aW9uKCkge1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IENvbmRpdGlvblR5cGUudXNlZDtcbiAgICB9XG4gICAgZ2V0Q29uZGl0aW9uU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuY29uZGl0aW9uID09PSBDb25kaXRpb25UeXBlLm5ldyA/ICfQvdC+0LLRi9C5JyA6ICfQv9C+0LTQtdGA0LbQsNC90L3Ri9C5Jyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IHZhciBDb25kaXRpb25UeXBlO1xuKGZ1bmN0aW9uIChDb25kaXRpb25UeXBlKSB7XG4gICAgQ29uZGl0aW9uVHlwZVtcIm5ld1wiXSA9IFwibmV3XCI7XG4gICAgQ29uZGl0aW9uVHlwZVtcInVzZWRcIl0gPSBcInVzZWRcIjtcbn0pKENvbmRpdGlvblR5cGUgfHwgKENvbmRpdGlvblR5cGUgPSB7fSkpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=