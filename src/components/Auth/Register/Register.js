import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import firebase from "../../firebase/config";
import style from "./registerModule.css";
import photo from '../../images/details.jpg'
import { toast } from "react-toastify";


const Register = (props) => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();

    //if (password != rePassword) {
    // alert("Password must match!");
    // }

    try {
      firebase.register(email, password);
      toast.success(`Successful registration.`, {
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
      history.push("/register");
      alert(error);
    }
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "rePassword") {
      setRePassword(value);
    }
  };
  return (
    <>
      <Header />
      <div style={{
         backgroundImage: `url(${photo})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover',position: 'relative', width:'100%',height:'100vh',color:'white', opacity: '0.8'
      }}/>
      <form  className={style.loginBox} >
      <div className="register-form">
        <h1 className={style.title}>Register</h1>
        <p className="field"  className= {style.placeBox}>
          <label htmlFor="username">Email Adress</label>
          <span className="input">
            <i className="fas fa-user"></i>
            <input
              className= {style.addInput}
              type="text"
              name="userEmail"
              id="username"
              value={email}
              onChange={(event) => onChangeHandler(event)}
            />
          </span>
        </p>
        <p className="field" className= {style.imageUrlBox}>
          <label htmlFor="password">Password</label>
          <span className="icon">
            <i className="fas fa-lock"></i>
            <input
              className= {style.addInput}
              type="password"
              name="userPassword"
              id="password"
              value={password}
              onChange={(event) => onChangeHandler(event)}
            />
          </span>
        </p>
        <p className="field" className= {style.descriptionBox}>
          <label htmlFor="password"> Repeat Password</label>
          <span className="input">
            <i className="fas fa-key"></i>
            <input className= {style.addInput}
              type="password"
              name="rePassword"
              id="rePassword"
            />
          </span>
        </p>
        <input
        className={style.registerBtn}
          className="button"
          type="submit"
          className="submit"
          value="Register"
          onClick={signUp}
        />
      </div>
      </form>
      <Footer />
    </>
  );
};

export default Register;
