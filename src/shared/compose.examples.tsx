import * as React from "react";
import { getValue } from "../utilits/react/pickFromSyntheticEvent";
import { preventDefault } from "../utilits/react/preventDefault";
import { stopPropagation } from "../utilits/react/stopPropagation";

function InputExample({ value, onChange}: any) {
    return (
      <input
        value={value}
        onChange={pipe(preventDefault,stopPropagation,getValue,onChange,)}
      />
    );
}

export function compose<U>(...fns: Function[]) {
    return <E,>(initialValue: any): U =>
      fns.reduceRight((previusValue, fn) => fn(previusValue), initialValue);
}

export function pipe<U>(...fns: Function[]) {
    return <E,>(initialValue: any): U => fns.reduce((previusValue, fn) => fn(previusValue), initialValue);
}

function pick<K extends string>(prop: K) {
    return <O extends Record<K, any>>(obj: O) => obj[prop];
}

function isEquel<T>(left: T) {
    return <E extends T>(right: E) => left === right;
}

function cond(b: boolean) {
    return !b;
}

const getValueNumber = pipe<number>(
  pick("currentTarget"),
  pick("value"),
  parseInt
);