import React, {useState}  from "react";
import { Form, Input, Button } from 'antd';
import firebase from "../../firebase/config";


const Login = (props) =>{
 
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'userEmail') {
        setEmail(value);
    }
    else if (name === 'userPassword') {
        setPassword(value);
    }
}

async function login() {
    try {
        await firebase.login(email, password);
        props.history.push('/places');


    } catch (error) {
        alert(error);
    }
}
    return (
        <form >
            <legend>Login</legend>
            <p className="field">
                <label htmlFor="username">Username</label>
                <span className="input">
                   <i className="fas fa-user"></i>
                    <input type="email" name="userEmail" value={email}
                        onChange={(event) => onChangeHandler(event)}  id="username" placeholder="Username" />
                </span>
            </p>
            <p className="field">
                <label htmlFor="password">Password</label>
                <span className="input">
                <i className="fas fa-lock"></i>
                    <input type="password" value={password}
                      onChange={(event) => onChangeHandler(event)} name="userPassword" id="password" placeholder="Password" />
                </span>
            </p>
            <input className="button" type="submit" className="submit" value="Register" onClick={login}/>
    </form>
      );
    };

    export default Login;