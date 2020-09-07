const myArray: MyArray<number> = [1, 2, 3];

type TReduce<T> = (sum: T, iter: T) => T;

interface MyArray<T> {
    [N: number]: T;

    map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>;

    reduce<O>(fun: TReduce<O>, start: O): O;
}
const initialValue = 0;

const tetsValue = myArray.reduce((accumulator, value) => accumulator + value, initialValue);

console.log(tetsValue);