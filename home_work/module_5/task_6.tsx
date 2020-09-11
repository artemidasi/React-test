type TGetJSXPropsProp<tag> = {
    [N in keyof React.HTMLProps<tag>]: N extends keyof React.ClassAttributes<tag> | keyof React.DOMAttributes<tag> ? never : string | boolean;
}

type TDivElement = JSX.IntrinsicElements['div'];

type TDivProps = TGetJSXPropsProp<'input'>;

const props: TDivProps = {
    required: true,
}
