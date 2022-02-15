import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [category, setCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS); 


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setCategory={setCategory} />
      <NewTaskForm categories={CATEGORIES} setTasks={setTasks} tasks={tasks} />
      <TaskList tasks={tasks} category={category} setTasks={setTasks} />
    </div>
  );
}

export default App;
