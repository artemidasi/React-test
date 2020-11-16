const myArray: MyArray<string> = ['lisa', 'slon', 'kot'];

type TReduce<T, Z> = (sum: T, iter: Z) => T;

interface MyArray<T> {
    [N: number]: T;

    map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>;

    reduce<O>(fun: TReduce<O, T>, start: O): O;
}
const initialValue = 0;

const tetsValue = myArray.reduce((accumulator, value) => accumulator + value.length, initialValue);

console.log(tetsValue);