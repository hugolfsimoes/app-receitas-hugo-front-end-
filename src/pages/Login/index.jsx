import React, { useState } from 'react';
import { login } from '../../service/Auth';
import { useNavigate } from "react-router-dom";
import logo from '../../images/logo.png';
import './style.css';

export default function Login() {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  });

  const handleChangeInput = ({ target: { name, value } }) => {
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleClickLogin = async () => {
    try {
      const { data: { id, name, email, role, token } } = await login(inputValues);
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify({ id, name, email, role }));
        navigate(`/`);
      }
    } catch (error) {
      alert(error.response.data);
    }
  };
  return (
    <main className='mt-5'>
      <div className='container'>
        <figure className="image is-128x128 mb-5" >
          <img src={logo} alt='logo recipes app' />
        </figure>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={inputValues.email}
              name='email'
              onChange={e => handleChangeInput(e)} />
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
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={inputValues.password}
              name='password'
              onChange={e => handleChangeInput(e)} />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-hovered" onClick={handleClickLogin}>
              Login
            </button>
            <button className="button is-hovered ml-5" onClick={() => navigate(`/register`)}>
              Register
            </button>
          </p>
        </div>
      </div>
    </main >
  );
}
