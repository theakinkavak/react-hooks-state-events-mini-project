import React, { useState } from "react";
import { TASKS } from "../data";

function NewTaskForm({ categories, setTasks, tasks }) {

  console.log(categories)

  const [details, setDetails] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const newTask = {text: details, category: selectedCategory}

  function handleSubmit(event) {
    event.preventDefault();
    setTasks([...tasks, newTask]); // [..., {text:details, category: selectedCategory}] 
    setDetails("");
    setSelectedCategory("All");
  }
  console.log(details);
  console.log(selectedCategory);

  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={(event) => setDetails(event.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={selectedCategory} onChange={event => setSelectedCategory(event.target.value)}>
          {/* render <option> elements for each category here */}
          {categories.map(category => <option key={category} value={category}>
                                      {category}
                                      </option> )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
