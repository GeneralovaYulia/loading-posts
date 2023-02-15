import React, { useEffect, useState } from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { textCommentContext } from "./context/textCommentContext";
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import { rootReducer } from "./store/store";
import thunk from "redux-thunk";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Post } from "./shared/Post";
import { NotFound } from "./shared/NotFound";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function AppComponent() {
  const [textCommentValue, setTextCommentValue] = useState('');
  const TextCommentProvider = textCommentContext.Provider;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  })

  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
          <TextCommentProvider value={{
            value: textCommentValue,
            onChange: setTextCommentValue,
          }}>
            <Layout>
              <Header />
              <Content>
                <Routes>
                  <Route path="/posts/:id" element={<Post />} />
                  <Route path="/auth" element={<Navigate replace to='/posts' />} />
                  <Route path="/" element={<Navigate replace to='/posts' />} />
                  <Route path="/posts" element={<CardsList />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Content>
            </Layout>
          </TextCommentProvider>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
