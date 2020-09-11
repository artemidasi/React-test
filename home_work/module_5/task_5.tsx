import * as React from "react";
import {Component, ComponentClass, ComponentType, FunctionComponent} from "react";

type ClockState = {
  time: Date
}

export class Clock extends Component<{}, ClockState> {
  render() {
    return <p>The current time is {this.state.time.toLocaleTimeString()}</p>
  }
}

class MyClass<T> extends ComponentType<T> {}

type TMyTypeClass = MyClass<typeof Clock>;

const type2: TMyTypeClass = {
  time: new Date()  // should compile OK
}

function HomeComponent(props: { firstProp: string }) {
  return (
    <div>
      {props.firstProp}
    </div>
  )
}

interface IProps {
  firstProp: string
}

type TMyType<T> = T extends ((arg: infer R) => JSX.Element) ? R : never;

type t = TMyType<typeof HomeComponent>;

const test: t = {
  firstProp: 'Проверка',
}


