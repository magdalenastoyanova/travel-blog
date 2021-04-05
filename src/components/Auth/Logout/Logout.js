import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import firebase from "../../firebase/config";
import style from './Logout.module.css';
import image from '../../images/logout.jpeg';
import { toast } from "react-toastify";


const SignOut = () => {
    const history = useHistory();

    async function Logout() {
        try {
          await firebase.logout();
          toast.success('Successful Logout.', {
            type: "success",
            autoClose: 2000,
            position: "top-center",
        })
          history.push("/");
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
    <div>
      <Header />
      <div className={style.logoutWrapper}>
      <div
      style={{
         backgroundImage: `url(${image})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover',position: 'relative', width:'100%',height:'100vh',color:'white', opacity: '0.8'
      }}/>
      <legend className={style.logoutHeader}>Are you sure you want to log out?</legend>
      <Button className={style.logoutBtn} onClick={Logout}>Click here to logout</Button>
   
      <Footer />
      </div>
    </div>
  );
};

export default SignOut;
