import "./HomePage.css";
const HomePage = () => {
  return (
    <div>
      <header>
        <h1 className="title-presentation text-center py-3 ">
          Bienvenido al proyecto: CRUD DE TAREAS MERN
        </h1>
      </header>
      <article className="box-presentation">
        <p className="font-bold text-red-700">
          Hola, soy Marcelo Sebastián Valdez, estudiante de la carrera de
          Programador Universitario en la FACET-UNT.
        </p>
        <p className="font-bold text-red-700">
          Este proyecto esta realizado enteramente con el stack MERN, en donde
          podesmos registrar usuarios y loguearlos. Cada uno podra cargar nuevas
          tareas, modificarlas y eliminarlas. El proyecto aun está en
          desarrollo, por lo que se iran agregando nuevas funcionalidades.
        </p>
      </article>
      <div className="container-presentation">
        <article className="box-presentation">
          <h2>Módulos Backend Utilizados en el crud de tareas</h2>

          <section>
            <h3>bcryptjs</h3>
            <p>
              Se utiliza para garantizar la seguridad de las contraseñas
              almacenadas en nuestra base de datos. Esta biblioteca nos permite
              cifrar y comparar contraseñas de manera segura, lo que es esencial
              para proteger la información confidencial de nuestros usuarios.
            </p>
          </section>

          <section>
            <h3>cookie-parser</h3>
            <p>
              Se implementa para analizar las cookies enviadas por los clientes
              y facilitar la gestión de sesiones de usuario. Esto es
              especialmente útil para mantener a los usuarios autenticados y
              controlar su estado de inicio de sesión.
            </p>
          </section>

          <section>
            <h3>zod</h3>
            <p>
              Es una biblioteca de validación de datos que utilizamos para
              validar y garantizar la integridad de los datos enviados por los
              clientes. Esto es esencial para prevenir errores y problemas de
              seguridad causados por datos no válidos.
            </p>
          </section>
        </article>

        <article className="box-presentation">
          <h2>Módulos Frontend Utilizados en el crud de tareas</h2>

          <section>
            <h3>react-router-dom</h3>
            <p>
              Es una librería esencial para la navegación en una aplicación
              React. La utilizamos para gestionar las rutas y la navegación
              entre las diferentes páginas de nuestra aplicación de manera
              eficiente y dinámica.
            </p>
          </section>

          <section>
            <h3>axios</h3>
            <p>
              Es una librería de cliente HTTP que nos permite realizar
              solicitudes a servidores API de manera sencilla y eficiente. Lo
              utilizamos para interactuar con nuestro servidor backend y obtener
              o enviar datos desde y hacia él.
            </p>
          </section>

          <section>
            <h3>dayjs</h3>
            <p>
              Es una librería de manipulación de fechas y horas que nos ayuda a
              gestionar y mostrar fechas de manera fácil y flexible en nuestra
              aplicación. Esto es fundamental para proporcionar a los usuarios
              una experiencia de usuario amigable.
            </p>
          </section>

          <section>
            <h3>js-cookie</h3>
            <p>
              Se utiliza para gestionar cookies en el lado del cliente. Nos
              permite almacenar y recuperar información en las cookies del
              navegador de manera segura y eficaz, lo que es esencial para
              gestionar la autenticación y las preferencias del usuario.
            </p>
          </section>

          <section>
            <h3>react-hook-form</h3>
            <p>
              Es una librería que facilita la gestión de formularios en
              aplicaciones React. Lo utilizamos para crear formularios
              interactivos y dinámicos, gestionar la validación de datos y
              mejorar la experiencia del usuario al recopilar información
              importante.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default HomePage;
