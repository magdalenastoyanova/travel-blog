  import React, {useState}  from "react";
  import Header from '../../Header/Header'
import { useHistory } from 'react-router-dom'
  import { Form, Input, Button } from 'antd';
  import { auth } from "../../firebase/config";
  import style from '../Register/registerModule.css'

      const Register = () =>{
        const history = useHistory()

        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
    
        const signUp = (e) => {
            e.preventDefault()
    
            auth.createUserWithEmailAndPassword(email, password)
                .then((authUser) => {
                   
                        history.push('/')
                    })
                .catch((error) => alert(error.message))
    
          
        }

        return (
          <form>
              <legend>Register</legend>
              <p className="field">
                  <label htmlFor="username">Username</label>
                  <span className="input">
                     <i className="fas fa-user"></i>
                      <input type="text" name="username" id="username" value={email}
                            onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                  </span>
              </p>
              <p className="field">
                  <label htmlFor="password">Password</label>
                  <span className="input">
                  <i className="fas fa-lock"></i>
                      <input type="password" name="password" id="password"   value={password}
                            onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
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
        );
};

export default Register;
