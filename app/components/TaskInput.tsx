// app/components/TaskInput.tsx
"use client";

import React, { useState } from "react";

interface Props {
  onAddTask: (taskName: string, priority: string) => void;
}

const TaskInput: React.FC<Props> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddTask(taskName, priority);
    setTaskName(""); // Clear the input after adding the task.
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task..."
        className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        required
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>

      <button
        type="submit"
        className="px-6 py-3 bg-green-500 text-white font-medium rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;