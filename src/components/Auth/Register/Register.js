  import React, {useState}  from "react";
  import { Form, Input, Button } from 'antd';
  import { auth } from "../../firebase/config";
  import style from '../Register/registerModule.css'

      const Register = ({
        history
    }) => {
        const onRegisterSubmitHandler = (e) => {
            e.preventDefault();
    
            const username = e.target.username.value;
            const password = e.target.password.value;
            const rePassword = e.target.rePassword.value;

            if(password !== rePassword){
                return;
            }

            auth.createUserWithEmailAndPassword(username, password)
                .then(userCredential => {
                    console.log('Register');
                    history.push('/places');
                });
        }

        return (
          <form onSubmit={onRegisterSubmitHandler}>
              <legend>Register</legend>
              <p className="field">
                  <label htmlFor="username">Username</label>
                  <span className="input">
                     <i className="fas fa-user"></i>
                      <input type="text" name="username" id="username" placeholder="Username" />
                  </span>
              </p>
              <p className="field">
                  <label htmlFor="password">Password</label>
                  <span className="input">
                  <i className="fas fa-lock"></i>
                      <input type="password" name="password" id="password" placeholder="Password" />
                  </span>
              </p>
              <p className="field">
                  <label htmlFor="password"> Repeat Password</label>
                  <span className="input">
                  <i className="fas fa-key"></i>
                      <input type="password" name="rePassword" id="rePassword" placeholder=" Repeat Password" />
                  </span>
              </p>
              <input className="button" type="submit" className="submit" value="Register" />
      </form>
        );
};

export default Register;
