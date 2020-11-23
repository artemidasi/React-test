export function assoc<K extends string>(key: K) {
  return <O extends object, T extends string>(obj: O, param: T) =>
    ({
      ...obj,
      [key]: param,
    }) as K extends keyof O ? (Omit<O, K> & Record<K, T>) : (O & Record<K, T>);
}  