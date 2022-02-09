import React, { useState } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { Layout } from "./shared/Layout";
import { CardsList } from "./shared/CardsList";
import { generateId, generateRandomString } from "./utilits/react/generateRandomIndex";
import { Text } from './shared/Text';

import { useToken } from "./hooks/useToken";

import { tokenContext } from './context/tokenContext'
import { userContext, UserContextProvider } from './context/userContext'
import { PostContextProvider } from "./context/postContext";
import { commentContext } from "./context/commentContext";


const LIST = [
  { As: "div" as const, text: "some" },
  { As: "div" as const, text: "over some" },
  { As: "div" as const, text: "some" },
].map(generateId);

const AppComponent = () => {
  const [commentValue, setCommentValue] = useState<string>('')

  const [token] = useToken()

  const CommentProvider = commentContext.Provider

  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <PostContextProvider>
          <CommentProvider value={{
            value: commentValue,
            onChange: setCommentValue
          }}>
            <Layout>
              <Header />
              <Content>
                <CardsList />
                <br />
                <Text size={28}>Label 1</Text>
                <Text size={20}>Label 2</Text>
                <Text size={14}>Label 3</Text>
              </Content>
            </Layout>
          </CommentProvider>
        </PostContextProvider>
      </UserContextProvider>
    </tokenContext.Provider>
  );
}

export const App = hot(() => <AppComponent />);
