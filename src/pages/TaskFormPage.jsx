import { useForm } from "react-hook-form";
import { useTasks } from "../context/tasksContex";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

//esto es para el que el formato de la fecha sea el mismo en todos los navegadores
dayjs.extend(utc);

const TaskFormPage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs.utc(task.date).format("YYYY-MM-DD"));
      }
    };
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {


    //esta variable guarda la informacion y revisa si la fecha esta vacia, en dicho caso, carga la fecha actual

    const validData = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    //si el id existe, actualiza la tarea, sino, crea una nueva, pero siempre usando la variable validData

    if (params.id) {
      updateTask(params.id, validData);
    } else {
      createTask(validData);
    }
    navigate("/tasks");
  });

  return (
    <div className=" flex h-[calc(100vh-100px)] items-center justify-center">
      <div className=" bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            placeholder="Titulo"
            {...register("title")}
            autoFocus
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <label htmlFor="description">Descripción</label>
          <textarea
            rows="3"
            placeholder="Descripcion"
            {...register("description")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          ></textarea>
          <label htmlFor="date">Fecha limite: </label>
          <input
            
            type="date"
            {...register("date")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />

          <button className="bg-indigo-500 px-3 py-2 rounded-md">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskFormPage;
