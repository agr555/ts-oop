define(["require", "exports", "../types/condition.type.js"], function (require, exports, condition_type_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Vehicle = void 0;
    class Vehicle {
        constructor(brandName, modelName, year, condition) {
            this._price = null;
            this.brandName = brandName;
            this.modelName = modelName;
            this.year = year;
            this.condition = condition ? condition : condition_type_js_1.ConditionType.used;
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
    }
    exports.Vehicle = Vehicle;
});
//# sourceMappingURL=vehicle.js.map