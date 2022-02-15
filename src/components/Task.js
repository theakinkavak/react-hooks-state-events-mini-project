import React from "react";
import { TASKS } from "../data";


function Task({ text, category, setTasks }) {

  // function handleRemoveTask(e) {
  //   const index = e.target.getAttribute("index")
  //   console.log(index);
  //   setTasks(TASKS.filter(task => task.index !== index));
  // }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
