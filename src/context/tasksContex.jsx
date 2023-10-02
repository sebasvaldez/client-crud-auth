import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest } from "../api/tasks";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks debe estar dentro del proveedor TaskProvider");
  }

  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = async (task) => {
    const res = await createTaskRequest(task);
    console.log(res.data);
  };

  const getTasks = async () => {
    try {
        const res = await getTasksRequest();
    console.log(res.data);
    setTasks(res.data);
    } catch (error) {
        console.error(error);
        
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, getTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
