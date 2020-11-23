import React from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { Layout } from "./shared/Layout";
import { CardsList } from "./shared/CardsList";
import { GenericList, MyList } from "./shared/GenericList";
import { Dropdown } from "./shared/Dropdown";
import { generateId, generateRandomString} from "./utilits/react/generateRandomIndex";
import { merge } from "./utilits/js/merge";

const LIST = [
  { As: "div" as const, text: "some" },
  { As: "div" as const, text: "over some" },
  { As: "div" as const, text: "some" },
].map(generateId);

console.log(LIST);

function AppComponent() {
  const [list, setList] = React.useState(LIST);

  const handleItemCLick = (id: string) => {
    setList(list.filter((item:any) => item.id != id));
  }

  const handleAdd =() => {
    setList(list.concat(generateId({ text: generateRandomString(), As: 'div' as const})));
  }


  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        {/* <GenericList list={list.map(merge({ onClick: handleItemCLick }))} /> */}
      </Content>
      <button onClick={handleAdd}>Add Element</button>
      <br />
      <Dropdown
        onClose={() => console.log("closed")}
        onOpen={() => console.log("opened")}
        button={<button>Test</button>}
      >
        <CardsList />
      </Dropdown>
    </Layout>
  );
}

export const App = hot(() =>  <AppComponent />);
