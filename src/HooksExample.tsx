import React from "react";
 
export function MyHooks({ title }: { title: string }) {
    const items = 1000;
    const multiplier = 5; 
    const result = React.useMemo(() => calculate(items, multiplier),
    [items, multiplier]);
    
  React.useEffect(() => {
    console.log("componentDidMount");
    console.log("componentWillUpdate");
  });

  React.useEffect(() => {
    console.log("componentDidMount");
    return () => {
        console.log('componentWillUnmount');
    }
  }, []);

   React.useEffect(() => {
     console.log("componentWillReciveProps ", title);
   }, [title]);

const [isMounted] = useIsMounted();

React.useEffect(()=> {
    console.log("isMounted ", isMounted);
}, [isMounted])

  return <div>{title}</div>;
}

export function useIsMounted () {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true)
    }, [])
    return [isMounted];
}

function calculate(items: number, multiplier: number) {
    return new Array(items).fill(1).reduce((a, v) => a * multiplier);
}
