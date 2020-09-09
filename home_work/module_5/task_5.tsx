function HomeComponent(props: { firstProp: string }) {
  return (
    <div>
      {props.firstProp}
    </div>
  )
}

interface IProps<T> {
    firstProp: T;
}

type TMyType<T> = T extends React.ComponentType<IProps<infer R>> ? R : never;

type T =  TMyType<typeof HomeComponent>;

