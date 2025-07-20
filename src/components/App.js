import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }
  
  const handleDeleteTask = (taskText) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.text !== taskText));
  }

  const tasksToDisplay = tasks.filter((task) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return task.category === selectedCategory;
    }
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
      <NewTaskForm onTaskFormSubmit={handleAddTask} categories={CATEGORIES.filter((cat) => cat !== "All")}/>
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
