import React from "react";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
import PostItForm from "./components/PostItForm/PostItForm";
import PostIt from "./components/PostIt/PostIt";

function App() {
  return (
    <>
      <Header />
      <PostItForm />
      <Board>
        <PostIt />
      </Board>
    </>
  );
}

export default App;
