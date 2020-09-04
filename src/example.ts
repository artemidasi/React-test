const tsNumber = 2;
const tsString = "str";

const result = tsString + tsNumber;
const resultTwo = parseInt(tsString) - tsNumber;

if (typeof tsString == 'number') {
    const resultTwo = tsString - tsNumber;
}

//Union type
const strOrNumber: string | number = "2";
//Type alias. Можно создавать свои типы
type StrOrNumber = string | number;

const strOrNumber1: StrOrNumber = "2";
const strOrNumber2: StrOrNumber = "2";
const strOrNumber3: StrOrNumber = "2";
const strOrNumber4: StrOrNumber = "2";

type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;

//Array

const tsArray: number[] = [1, 2, 3];
const tsArrayGeneric: Array<number> = [];

const unionArray: (string | number)[] = [];
const unionArray2: Array<string | number> = [];

//Tuple. Массив фиксированной длины
const myTuple: [number, string] = [1, "2"];
const val = myTuple[0];

//Object

type MyObjType = { a: number, b: string };
const myObj: MyObjType = { a: 1, b: "2" };

interface MyFirstInterface {
    readonly a: number;
    readonly b: string;
    c?: number[];
}

const myObj2: MyFirstInterface = {
    a: 2,
    b: "123",
}

const value = myObj2.c;

const ApiAnswer = { key: 'asd', key1: 'ert' };

interface IndexInterface {
    [N: string]: string;
}

enum Methods {
    add,
    sub,
}

//calculate('add',5,5) -> 10
function calculate(method: Methods, left: number, right: number): number {
    switch (method) {
        case Methods.add: return left + right;
        case Methods.sub: return left - right;
    }
}

const sum = calculate(Methods.add, 4, 5);

const ArrowFn: FnInterface = () => 2;

type TypeFn = () => number;

interface FnInterface {
    (a: number): void;
}

type StrangTsTypes = any | unknown | never;

const some: any = 2;

const un: unknown = 2;