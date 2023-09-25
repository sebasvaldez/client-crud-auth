import React from "react";
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    const res = await registerRequest(values);
    console.log(res);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Nombre de usuario"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="correo electrónico"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Contraseña"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
