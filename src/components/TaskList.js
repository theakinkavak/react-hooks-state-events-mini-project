import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from 'uuid';

function TaskList({ tasks, category, setTasks }) {

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.filter(task => {
        if (category === "All") return true;
        else {
            return category === task.category
          }
        }).map(item => {
        return <Task key={uuidv4()} text={item.text} category={item.category} setTasks={setTasks} />
      })}
    </div>
  );
}

export default TaskList;
