import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { useHistory } from 'react-router-dom'
import firebase from "../../firebase/config";
import style from './Login.module.css'
import photo from '../../images/details.jpg'
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
      <div style={{
         backgroundImage: `url(${photo})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover',position: 'relative', width:'100%',height:'100vh',color:'white', opacity: '0.8'
      }}/>
      <form  className={style.loginBox}>
        <legend className={style.title}>Login</legend>
        <p className="field" className= {style.placeBox}>
          <label htmlFor="username">Your Email</label>
          <span className="input">
            <i className="fas fa-user"></i>
            <input className= {style.addInput}
              type="email"
              name="userEmail"
              value={email}
              onChange={(event) => onChangeHandler(event)}
              id="userEmail"
            />
          </span>
        </p>
        <p className="field" className= {style.imageUrlBox}>
          <label  htmlFor="password">Password</label>
          <span className="input">
            <i className="fas fa-lock"></i>
            <input className= {style.addInput}
              type="password"
              value={password}
              onChange={(event) => onChangeHandler(event)}
              name="userPassword"
              id="userPassword"
            />
          </span>
        </p>
        <Button
      className={style.loginBtn}
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
