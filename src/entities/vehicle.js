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
import { ConditionType } from "../types/condition.type.js";
export class Vehicle {
    constructor(brandName, modelName, year, condition) {
        this._price = null;
        this.brandName = brandName;
        this.modelName = modelName;
        this.year = year;
        this.condition = condition ? condition : ConditionType.used;
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
        this.condition = ConditionType.used;
    }
    getConditionString() {
        return (this.condition === ConditionType.new ? 'новый' : 'подержанный');
    }
}
