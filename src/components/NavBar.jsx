import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const NavBar = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10">
      <Link to={isAuthenticated ? "/tasks":"/"}>
        <h1 className="text-2xl font-bold ">Administrador de tareas</h1>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>Bienvenido {user.username}</li>
            <li>
              <Link
                className="bg-indigo-500 px-4 py-1 rounded-sm"
                to="/add-task"
              >
                Añadir tarea
              </Link>
            </li>
            <Link
              to="/"
              onClick={() => {
                logout();
              }}
            >
              <li>Salir</li>
            </Link>
          </>
        ) : (
          <>
            <li>
              <Link className="bg-indigo-500 px-4 py-1 rounded-sm" to="/login">
                Ingresar
              </Link>
            </li>
            <li>
              <Link
                className="bg-indigo-500 px-4 py-1 rounded-sm"
                to="/register"
              >
                Registrarse
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
