import React from "react";
import { starWars, uniqueNamesGenerator } from "unique-names-generator";

interface IStarWarsNameClassState {
  name: string;
  count: number;
}

export class StarWarsNameClass extends React.PureComponent<{}, IStarWarsNameClassState> {

  state: Readonly<IStarWarsNameClassState> = {name: this.randomName(), count: 0};

  // constructor(props: {}) {
  //   super(props);

  //   this.state = {name: '123'};
  // }

  public render() {
    return (
      <section>
        <span>{this.randomName()}</span>
        <div></div>
        <button onClick = {this.handleClick}></button>
      </section>
    );
  }

  private handleClick = () => {
    this.setState({name: this.randomName()})
    this.setState((state: any, props: any) => ({count: state.count +1}), () => {console.log(`>> ${this.state.count}`)})
    console.log(`>> ${this.state.count}`);
  }

  private randomName (): string {
    return uniqueNamesGenerator({
      dictionaries: [starWars],
      length: 1,
    })
  }
}