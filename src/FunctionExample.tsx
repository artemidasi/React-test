import React from "react";

add(1)(1);
function add(leftSide: number) {
  return (rightSide: number) => leftSide + rightSide;
}
const addOne = add(1);
addOne(5);

// Пример 2

const withIdKey = withKey("id");

function Feed(props: { blocks: IBlockProps[] }) {
  return <div>{props.blocks.map(withIdKey(Block))}</div>;
}

interface IBlockProps {
  title: string;
  id: string;
}

function Block(props: IBlockProps) {
  return <div>{props.title}</div>;
}

function withKey(key?: string) {
  return <E, T extends React.ComponentType<E>>(component: T) => (
    props: E,
    index: number
  ) =>
    React.createElement(
      component,
      { ...props, key: key /*? props[key as keyof E] : index */ },
      []
    );
}

// Другой пример 

function Input({onChange, value}: {onChange: (value: string) => void, value: string}) {
  return (
  <input value={value} onChange={getValue(onChange)} />
  )
}

function CheckBox(props: { onChange: (value: boolean) => void, value: boolean }) {
  return <input type="checkbox" checked={props.value} onChange={getCkecked(props.onChange)} />;
}

function pickFromSyntheticEvent <T extends HTMLElement>() {
  return <K extends keyof T>(key: K) => 
  <E extends ((t: T[K]) => void)>(fn: E) =>
  (e: React.SyntheticEvent<T>) =>
  fn(e.currentTarget[key])
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
export const getCkecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');

// Еще один пример

function NotStandartLink (props: any) {
  return (
    <a onClick={preventDefault(stopPropagation(props.onClick))}></a>
  )
}

function preventDefault <T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
        e.preventDefault();
        fn(e);
  }
}

function stopPropagation<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation();
    fn(e);
  };
}

interface InputParams {
  onChange: (value: string) => void;
  value: string;
}

// function Input({onChange, value}: InputParams) {
//   return (
//     <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))}/>
//   )
// }

