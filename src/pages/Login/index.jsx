import React from 'react';
import logo from '../../images/logo.png';
import './style.css';

export default function Login() {
  return (
    <main className='mt-5'>
      <div className='container'>
        <figure className="image is-128x128 mb-5" >
          <img src={ logo } alt='logo recipes app' />
        </figure>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Email" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="password" placeholder="Password" />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-hovered">
              Login
            </button>
            <button className="button is-hovered ml-5">
              Register
            </button>
          </p>
        </div>
      </div>
    </main >
  );
}
