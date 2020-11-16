const mistake = [] as Array<number>;
mistake.push(1);
mistake.push(2);

let bigObject = {
  "commit": {
    "id": "12412ij12mnb24i1u2",
    "short_id": "12412ij12",
    "title": "JS fix",
    "autor_name": "Example User",
    "autor_email": "user@example.com",
    "created_id": "20141-12401240124124"
  },
  "commits": [{
    "id": "12412ij12mnb24i1u2",
    "short_id": "12412ij12",
    "title": "JS fix",
    "autor_name": "Example User",
    "autor_email": "user@example.com",
    "created_id": "20141-12401240124124"
  }],
  "diffs": [{
    "old_path": "files/js/application.js",
    "new_path": "files/js/application.js",
    "a_module": null,
    "b_module": "100644",
    "new_file": false,
    "renamed_file": false,
    "deleted_file": false
  }],
  "compare_timeout": false,
  "compare_same_ref": false
};

bigObject.compare_same_ref = true;
//Присвоение типа bigObject в тип TMyBigObject
type TMyBigObject = typeof bigObject;
//Делаем все свойства в bigObject только для чтения
const typedBigObject: MyReadonly<TMyBigObject> = bigObject; //Readonly работает только с внешними ключами
//Все ключи объекта TMyBigObject помещены в переменную TObjectKeys
type TObjectKeys = keyof TMyBigObject;
type TCommitType = TMyBigObject["commit"];

type MyReadonly<T> = {
  //mapped types   
  readonly [N in keyof T]: T[N];
}


// const some: MyReadOnly<TMyBigObject> = {
//     compare_same_ref: true;
// };

//Делает ключи в объекте необязательными
// type MyPartial<T> = {
//   [N in keyof T]?: T[N];
// }

type MyPick<T, K extends keyof T> = {
  [N in K]: T[N];
}

type picked = MyPick<TMyBigObject, "commit">;

type MyReadonlyDeep<T> = {
  //mapped types   
  readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N];
}

type TSomeType = MyReadonlyDeep<TMyBigObject>;
//type inference
type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;

type TTest = RemoveReadonly<TSomeType>

function greaterThenZero(a: number) {
  return a > 0;
}

type FnReturnType<T> = T extends ((...args: any[]) => infer R) ? R : never;

type FnPerameters<T> = T extends ((...args:  infer R) => any) ? R : never;

type TReturnType = FnReturnType<typeof greaterThenZero>;
type TArgsType = FnPerameters<typeof greaterThenZero>;
