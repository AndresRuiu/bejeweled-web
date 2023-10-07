import React from 'react';
import '../style/register-login.css'

function formRegister() {
  return (
    <>
      <div className="form-container registrarse">
        <form>
          <h1>Crear una cuenta</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>o usa tu email para registrarte</span>
          <input type="text" placeholder="Ingresar un usuario" />
          <input type="email" placeholder="Ingresar un email" />
          <input type="password" placeholder="Ingresar una contraseña" />
          <button>Registrarse</button>
        </form>
      </div>
    </>
  );
}

export default formRegister;

