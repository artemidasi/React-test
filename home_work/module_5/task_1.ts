import jsConcat from './myJsLib.js';

type ConcatFunction = (a: string, b: string) => string;

const typeScriptConcat: ConcatFunction = jsConcat;

typeScriptConcat ('Ghbdtn','Ghfbb');

type TsConcatVarArg = (...arg: Array<string>) => string;

const concat: TsConcatVarArg = (...args) => {
    return args.join("");
}

const str = concat('1','+','1');

console.log(str);
