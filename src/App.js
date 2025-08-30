import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    { text: "Learn React", completed: false },
    { text: "Build a To-Do App", completed: false },
    { text: "Master Tailwind CSS", completed: false },
  ]);

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
                className="mr-2"
              />
              <span
                className={`text-lg ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.text}
              </span>
            </li>
          ))}
        </ul>
        <TaskInput addTask={addTask} />
      </div>
    </div>
  );
};

const TaskInput = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTask(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="New Task"
        className="flex-grow p-2 border border-gray-300 rounded-l"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default App;
