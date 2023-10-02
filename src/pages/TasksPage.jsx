import { useEffect } from "react";
import { useTasks } from "../context/tasksContex";

const TasksPage = () => {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);


  if(tasks.length === 0) return (<h1>No hay tareas agregadas aun!</h1>);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TasksPage;
