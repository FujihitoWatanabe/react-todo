import React, { useState } from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickback } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul id="complete-list">
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <div className="str">{todo}</div>
              <button onClick={() => onClickback(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
