import React, {useState}  from "react";
import { Form, Input, Button } from 'antd';
import { auth } from "../../firebase/config";
import { useHistory } from 'react-router-dom'

const Login = () =>{
    const history = useHistory()

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const Login = (e) => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(email, password)
        .catch((error) => {
            alert(error.message)
            history.push('/login')
        })
        .then(history.push('/places'))

}
    return (
        <form >
            <legend>Login</legend>
            <p className="field">
                <label htmlFor="username">Username</label>
                <span className="input">
                   <i className="fas fa-user"></i>
                    <input type="text" name="username"value={email}
                        onChange={(e) => setEmail(e.target.value)} id="username" placeholder="Username" />
                </span>
            </p>
            <p className="field">
                <label htmlFor="password">Password</label>
                <span className="input">
                <i className="fas fa-lock"></i>
                    <input type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="Password" />
                </span>
            </p>
            <input className="button" type="submit" className="submit" value="Register" onClick={Login}/>
    </form>
      );
    };

    export default Login;