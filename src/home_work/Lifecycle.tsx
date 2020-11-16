import React from "react";

interface ILifecycleProps {
  someProp: number;
}

interface ILifecycleState {
  stateField: number;
  isMounted: boolean;
  hasError: boolean;
}

export class Lifecycle extends React.Component<ILifecycleProps, ILifecycleState> {
  constructor(props: ILifecycleProps) {
    super(props);

    this.state = { stateField: 0, isMounted: false, hasError: false};
    // this.handleClick = this.handleClick.bind(this);
  }

  //Срабатывает всегда перед render
  static getDerivedStateFromProps(props: Readonly<ILifecycleProps>, state: Readonly<ILifecycleState>){
    return { stateField: props.someProp};
    return null;
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }
  //не использовать при PureComponet!
  public shouldComponentUpdate(
    nextProps: Readonly<ILifecycleProps>,
    nextState: Readonly<ILifecycleState>,
    nextContext: any
  ):boolean {
    return this.state != nextState || this.props != nextProps;
  }

  public render() {
    if (this.state.hasError) {
      return <div>Error</div>;
    }
    return <div onClick={this.handleClick}>1</div>;
  }
  public getSnapshotBeforeUpdate(
    prevProps: Readonly<ILifecycleProps>,
    prevState: Readonly<ILifecycleState>,
  ): any | null {
    return null;
  }
  public componentDidUpdate(
    prevProps: Readonly<ILifecycleProps>,
    prevState: Readonly<ILifecycleState>,
    snapshot ?: any,
  ) {

    if (snapshot> 1000) {
      this.setState({});
    }
  }
  //Вызывается после того, как компонент монтируется в DOM дерево
  public componentDidMount() {
    this.setState({isMounted: true});
  }
  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // logError(errorInfo.componentStack);
  }
  //Вызывается перед тем, как компонент удалиться
  public componentWillUnmount() {
  }

  private handleClick = () => {
    this.setState({stateField: 1})
  }
}