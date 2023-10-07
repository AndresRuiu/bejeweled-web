import React from 'react';
import '../style/register-login.css'

function formLogin() {
  return (
    <div className="form-container ingresar">
      <form>
        <h1>Ingresar</h1>
        <div className="social-icons">
          <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
        <span>o usa tu email para ingresar</span>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <a href="#">¿Olvidaste tu Contraseña?</a>
        <button>Ingresar</button>
      </form>
    </div>
  );
}

export default formLogin;