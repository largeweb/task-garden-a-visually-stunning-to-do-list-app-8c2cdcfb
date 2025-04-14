// app/components/Plant.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Task {
  name: string;
  priority: 'high' | 'medium' | 'low';
  isComplete: boolean;
}

interface Props {
  task: Task;
  onComplete: () => void;
}

const Plant: React.FC<Props> = ({ task, onComplete }) => {
  let plantImage = "/plant-generic.svg"; // Default plant
  let altText = "Medium priority task: Plant";

  switch (task.priority) {
    case "high":
      plantImage = "/plant-sunflower.svg";
      altText = "High priority task: Sunflower";
      break;
    case "low":
      plantImage = "/plant-grass.svg";
      altText = "Low priority task: Grass";
      break;
  }

  const plantVariants = {
    initial: { scale: 0 },
    grow: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    complete: {
      scale: 1.2,
      opacity: 0.5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="relative cursor-pointer"
      onClick={onComplete}
      initial="initial"
      animate={task.isComplete ? "complete" : "grow"}
      variants={plantVariants}
    >
      <Image
        src={plantImage}
        alt={altText}
        width={64}
        height={64}
        className="mx-auto"
        priority
      />
      <p className="text-center text-sm mt-2">{task.name}</p>
    </motion.div>
  );
};

export default Plant;