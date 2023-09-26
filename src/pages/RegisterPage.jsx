import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //uso el hook useAuth para obtener el método signup y el usuario
  const { signup, isAuthtenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthtenticated) {
      navigate("/tasks");
      console.log("is authenticated");
    }
  }, [isAuthtenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {registerErrors.map((error, i) => {
        return (
          <span key={i} className="text-white bg-red-500 p-2">
            {error}
          </span>
        );
      })}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Nombre de usuario"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        {errors.username && (
          <span className="text-red-500">
            El nombre de usuario es requerido
          </span>
        )}
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="correo electrónico"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        {errors.email && (
          <span className="text-red-500">
            El correo electrónico es requerido
          </span>
        )}

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Contraseña"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        {errors.password && (
          <span className="text-red-500">La contraseña es requerida</span>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
