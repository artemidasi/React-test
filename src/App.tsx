import React from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { Layout } from "./shared/Layout";
import { CardsList } from "./shared/CardsList";
import { generateId, generateRandomString} from "./utilits/react/generateRandomIndex";

const LIST = [
  { As: "div" as const, text: "some" },
  { As: "div" as const, text: "over some" },
  { As: "div" as const, text: "some" },
].map(generateId);

function AppComponent() {
  
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}

export const App = hot(() =>  <AppComponent />);
