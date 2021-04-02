import React, {useState}  from "react";
import { Form, Input, Button } from 'antd';
import { auth } from "../../firebase/config";

const Login = ({
    history
}) => {
    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        console.log(username, password);

        auth.signInWithEmailAndPassword(username, password)
            .then((userCredential) => {
                history.push('/');
            });
    };
    return (
        <form onSubmit={onLoginFormSubmitHandler}>
            <legend>Login</legend>
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
            <input className="button" type="submit" className="submit" value="Register" />
    </form>
      );
    };

    export default Login;