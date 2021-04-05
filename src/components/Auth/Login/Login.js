import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import Header from '../../Header/Header';
import { useHistory } from 'react-router-dom'
import firebase from "../../firebase/config";

const Login = (props) => {
    const history = useHistory()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  async function login() {
    try {
      await firebase.login(email, password);
      history.push("/places");
    } catch (error) {
        history.push("/login");
      alert(error);
    }
  }
  return (
    <>
      <Header />
      <form>
        <legend>Login</legend>
        <p className="field">
          <label htmlFor="username">Your Email</label>
          <span className="input">
            <i className="fas fa-user"></i>
            <input
              type="email"
              name="userEmail"
              value={email}
              onChange={(event) => onChangeHandler(event)}
              id="userEmail"
              placeholder="Your Email Here"
            />
          </span>
        </p>
        <p className="field">
          <label htmlFor="password">Password</label>
          <span className="input">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              value={password}
              onChange={(event) => onChangeHandler(event)}
              name="userPassword"
              id="userPassword"
              placeholder="Your Password Here" 
            />
          </span>
        </p>
        <Button
          className="submit"
          type="submit"
          value="Login"
          onClick={login}
        > Login </Button>
      </form>
    </>
  );
};

export default Login;
