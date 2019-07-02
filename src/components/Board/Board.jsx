import React from "react";
import "./Board.css";
import PostIt from "../PostIt/PostIt";

export default function Board(props) {
  const { list } = props;

  return (
    <div className="board">
      {list.map(p => (
        <PostIt
          key={p.id}
          postIt={p}
          handleRemove={props.handleRemove}
          handleLido={props.handleLido}
        />
      ))}
    </div>
  );
}
