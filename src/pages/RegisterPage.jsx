import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    user,
  } = useForm();
  //uso el hook useAuth para obtener el método signup y el usuario
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/login");
  }, [isAuthenticated]);

  return (
    <div className=" flex h-[calc(100vh-100px)] items-center justify-center">
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
            <p className="text-red-500">La contraseña es requerida</p>
          )}
          <button type="submit">Register</button>
        </form>
        <p className="flex gap-x-2 justify-between mt-5">
          Ya tienes cuenta?{" "}
          <Link to="/login" className="text-sky-600">
            Ingresar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
