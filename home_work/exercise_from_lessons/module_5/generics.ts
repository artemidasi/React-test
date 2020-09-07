// const myArray: MyArray<number> = [1, 2, 3];

// interface MyArray<T> {
//     [N: number]: T;

//     map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>;
// }

// let varible = myArray[1];
// myArray.map((f) => f + 1);
// myArray.map((f) => `f + ${f}`);

function identity<T>(arg: T): T {
    return arg;
}

let results = identity(12);

function getLen<T extends Array<any>>(arr: T): number {
    return arr.length;
}

getLen([1,2,3]);

interface IValueWithType<T> {
    type: string;
    value: T;
}

function withType<U>(arg: U): IValueWithType<U> {
    return {
        type: typeof arg,
        value: arg
    }
}

//Встроенные generics

interface IExample<T> {
    type: string;
    value: T;
    isEmpty: boolean;
}

// Выкидывает свойство
const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {
    type: "string",
}

// Берет кокнретные свойства
const picked: Pick<IExample<number>, 'type'> = {
    type: 'number',
}

// Делает ключи необязательными
const partial: Partial<IExample<object>> = {

}