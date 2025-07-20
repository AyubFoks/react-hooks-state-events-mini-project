import React from "react";

function Task(props) {

  const { text, category } = props.task || props;
  const { onDeleteTask } = props;

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDeleteTask}>X</button>
    </div>
  );
}

export default Task;