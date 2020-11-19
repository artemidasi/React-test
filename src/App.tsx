import React from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { Layout } from "./shared/Layout";
import { CardsList } from "./shared/CardsList";
import { GenericList, MyList } from "./shared/GenericList";
import { generateId, generateRandomString } from "./utilits/react/generateRandomIndex";
import { merge } from "./utilits/js/merge";

const LIST = [
  { As: 'li' as const, text: "some" }, 
  { As: 'li' as const, text: "over some" }, 
  { As: 'li' as const, text: "some" }
].map(generateId);

function AppComponent() {
  const [list, setList] = React.useState(LIST);

  const handleItemCLick = (id: string) => {
    setList(list.filter((item:any) => item.id != id));
  }

  const handleAdd =() => {
    setList(list.concat(generateId({ text: generateRandomString(), As: 'li' as const})));
  }


  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <button onClick={handleAdd}>Add Element</button>
        <GenericList list={list.map(merge({onclick: handleItemCLick}))} />
      </Content>
    </Layout>
  );
}

export const App = hot(() =>  <AppComponent />);
