import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signInErrors, isAuthenticated } = useAuth();

  const onSubmit = handleSubmit(async (values) => {
    await signin(values);
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  return (
    <div className=" flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {signInErrors.map((error, i) => {
          return (
            <div key={i} className="text-white bg-red-500 p-2">
              {error}
            </div>
          );
        })}

        <h1 className="text-2xl font-bold">Ingresá con tus datos</h1>

        <form onSubmit={onSubmit}>
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
            <p className="text-red-500 ">La contraseña es requerida</p>
          )}
          <button type="submit">Entrar</button>
        </form>
        <p className="flex gap-x-2 justify-between mt-5">
          No tienes cuenta aun?
          <Link to="/register" className="text-sky-600">
            Crear cuenta
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
