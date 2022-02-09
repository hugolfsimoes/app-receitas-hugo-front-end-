import React, { useState } from 'react';
import { createNewUser } from '../../service/Auth';
import './style.css';
export default function Register() {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: ''
  });


  const handleChangeInput = ({ target: { name, value } }) => {
    setInputValues({ ...inputValues, [name]: value });
  };

  const verifyFields = () => {
    const { name, email, password } = inputValues;
    const regEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (name.length < 3) return { message: 'The name must contain more than three characters' };
    if (!regEmail.test(email)) return { message: 'Must be a valid email' };
    if (password.length < 8) return { message: 'Password must contain at least 8 characters' };
    return true;
  };
  const handleClickCreateUser = async () => {
    const verify = verifyFields();
    if (verify === true) {
      const result = await createNewUser(inputValues);
    }
    else {
      alert(verify.message);
    }
  };

  return (
    <main className='mt-5'>
      <div className='container'>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              placeholder="Name"
              value={inputValues.name}
              name='name'
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
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email" placeholder="Email"
              value={inputValues.email} name='email'
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
            <button className="button is-hovered ml-5" onClick={handleClickCreateUser}>
              Register
            </button>
          </p>
        </div>
      </div>
    </main >
  );
}
