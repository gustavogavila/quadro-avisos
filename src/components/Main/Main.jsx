import React, { useState, useEffect } from "react";
import {
  getAll,
  add,
  remove,
  markedAsRead
} from "../../services/PostItService";
import PostItForm from "../PostItForm/PostItForm";
import Board from "../Board/Board";

import "./Main.css";

export default function Main(props) {
  const [list, setList] = useState([]);

  const getAllPostIts = () => {
    setList(getAll());
  };

  const handleAdd = data => {
    add(`postIt${data.id}`, data);
    getAllPostIts();
  };

  const handleRemove = postIt => {
    remove(`postIt${postIt.id}`);
    getAllPostIts();
  };

  const handleLido = postIt => {
    markedAsRead(postIt);
    getAllPostIts();
  };

  useEffect(getAllPostIts, []);

  return (
    <div className="main">
      <PostItForm handleAdd={handleAdd} />
      <Board list={list} handleRemove={handleRemove} handleLido={handleLido} />
    </div>
  );
}
