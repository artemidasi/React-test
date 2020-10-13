import React from "react";
import { starWars, uniqueNamesGenerator } from "unique-names-generator";

interface IStarWarsNameFunctionState {
  name: string;
  count: number;
}

export function StarWarsNameFunction() {
  const randomName = () => uniqueNamesGenerator({dictionaries: [starWars], length: 1});

  // React.useState принимает первым параметром начальное значение,
  // а возвращает массив, первый элемент которого наше состояние. Второй элемент массива - это функция,
  // которая будет обнавлять наше состояние

  const [name, setName] = React.useState(randomName);
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setName(randomName);
    setCount((prevCount: number) => prevCount+1);
  };
  console.log(`>> ${count}`);

  //Вариант с комплексным состоянием

  // const [state, setState] = React.useState<IStarWarsNameFunctionState>({name: randomName(), count: 0});
  // const handleClick = () = {
  //   setState((prevState: number) =>({name: randomName(), count: prevState.count +1}))
  // };
  // console.log(`>> ${state.count}`);

    return (
        <section>
          <span>{name}</span>
          <div></div>
          <button onClick = {handleClick}>Мне нужно имя</button>
        </section>
    )
}