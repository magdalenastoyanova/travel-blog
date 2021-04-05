import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { useHistory } from 'react-router-dom'
import firebase from "../../firebase/config";
import { toast } from "react-toastify";

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
      toast.success('Successful Login.', {
        type: "success",
        autoClose: 2000,
        position: "top-center",
    })
      history.push("/places");
    } catch (error) {
      toast.success(`${error}`, {
        type: "error",
        autoClose: 2000,
        position: "top-center",
    })
        history.push("/login");
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
      <Footer />
    </>
  );
};

export default Login;
