// app/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Plant from "./components/Plant";
import TaskInput from "./components/TaskInput";

// Define the Task type
interface Task {
  id: string;
  name: string;
  priority: "high" | "medium" | "low";
  isComplete: boolean;
}

// Mock Data
const mockTasks = (): Task[] => [
  { id: crypto.randomUUID(), name: "Water the succulents", priority: "low", isComplete: false },
  { id: crypto.randomUUID(), name: "Fertilize the tomatoes", priority: "high", isComplete: false },
  { id: crypto.randomUUID(), name: "Repot the fern", priority: "medium", isComplete: false },
];

export default function Home() {
  const [taskList, setTaskList] = useState<Task[]>(mockTasks());

  const handleAddTask = (name: string, priority: "high" | "medium" | "low") => {
    const newTask: Task = { id: crypto.randomUUID(), name, priority, isComplete: false };
    setTaskList([...taskList, newTask]);
  };

  const handleCompleteTask = (id: string) => {
    const updatedTaskList = taskList.map((task) =>
      task.id === id ? { ...task, isComplete: true } : task
    );
    setTaskList(updatedTaskList);
  };

  return (
    <div className="min-h-screen bg-green-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="p-6 md:w-1/3">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add a Task</h2>
            <TaskInput onAddTask={handleAddTask} />
          </div>
          <div className="p-6 md:w-2/3 bg-green-50 relative">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">My Garden</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {taskList.map((task) => (
                <Plant
                  key={task.id}
                  task={task}
                  onComplete={() => handleCompleteTask(task.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}