import React, { Component } from "react";
import "./Board.css";

export default function Board(props) {
  return <div className="board">{props.children}</div>;
}
