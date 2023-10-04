import { useTasks } from "../context/tasksContex";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();

  return (
    <div className="bg-zinc-800 max-w-md w-full p-8 m-2 rounded-md">
      <header className=" flex justify-between">
        <h2 className="text-2xl font-bold">{task.title}</h2>
        <div className="flex gap-x-2 items-center">
          <button
            onClick={() => {
              deleteTask(task._id);
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
          >
            Borrar
          </button>
          <Link to={`/tasks/${task._id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md">Editar</Link>
        </div>
      </header>
      <p className="text-slate-300">{task.description}</p>
      <p>Fecha limite: {dayjs(task.date).utc().format("DD/MM/YYYY")}</p>
    </div>
  );
};

export default TaskCard;
