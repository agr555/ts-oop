//
// реализация с интерфейсом
export interface VenicleInterface{
    price: number | null;
    setUsedCondition():void;
    toString():string;
    getTypes(): string[];
}