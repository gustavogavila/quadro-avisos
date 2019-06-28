import React from "react";

import PostIt from "./components/PostIt/PostIt";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
import PostItForm from "./components/PostItForm/PostItForm";

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
