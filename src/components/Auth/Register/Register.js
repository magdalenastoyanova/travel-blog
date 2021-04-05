  import React, {useState}  from "react";
import { useHistory } from 'react-router-dom'
  import { Form, Input, Button } from 'antd';
  import Header from '../../Header/Header';
  import firebase from "../../firebase/config";
  import style from '../Register/registerModule.css'

      const Register = (props) =>{
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [rePassword, setRePassword] = useState('');
    
       const signUp = () => {
    
            if (password !== rePassword) {
                alert("Password must match!");
            }
            else {
                try {
                   firebase.register(email, password);
                    props.history.push('/places')
                } catch (error) {
                    alert(error);
                }
            }
        }
        const onChangeHandler = (event) => {
            const { name, value } = event.currentTarget;
    
            if (name === 'userEmail') {
                setEmail(value);
            }
            else if (name === 'userPassword') {
                setPassword(value);
            }
            else if (name === 'rePassword') {
                setRePassword(value);
            }
        }
        return (
            <>
            <Header/>
          <form>
              <legend>Register</legend>
              <p className="field">
                  <label htmlFor="username">Username</label>
                  <span className="input">
                     <i className="fas fa-user"></i>
                      <input type="text" name="userEmail" id="username" value={email}
                            onChange={(event) => onChangeHandler(event)} placeholder="Email" />
                  </span>
              </p>
              <p className="field">
                  <label htmlFor="password">Password</label>
                  <span className="input">
                  <i className="fas fa-lock"></i>
                      <input type="password" name="userPassword" id="password"   value={password}
                             onChange={(event) => onChangeHandler(event)} placeholder="Password" />
                  </span>
              </p>
              <p className="field">
                  <label htmlFor="password"> Repeat Password</label>
                  <span className="input">
                  <i className="fas fa-key"></i>
                      <input type="password" name="rePassword" id="rePassword" placeholder=" Repeat Password" />
                  </span>
              </p>
              <input className="button" type="submit" className="submit" value="Register" onClick={signUp} />
      </form>
      </>
        );
};

export default Register;
