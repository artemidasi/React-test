type TDivElement = JSX.IntrinsicElements['div'];

type TGetJSXPropsProp<T> = {
    [N in keyof React.HTMLAttributes<T>]: string;
}

type TDivProps = TGetJSXPropsProp<'div'>

const props: TDivProps = {
    className: "Максим",
}