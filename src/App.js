import React from "react";

import PostIt from "./components/PostIt/PostIt";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";

function App() {
  return (
    <>
      <Header />
      <Board>
        <PostIt />
      </Board>
    </>
  );
}

export default App;
