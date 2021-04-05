import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import firebase from "../../firebase/config";

const SignOut = () => {
    const history = useHistory();

    async function Logout() {
        try {
          await firebase.logout();
          history.push("/");
        } catch (error) {
            history.push("/login");
          alert(error);
        }
      }
  return (
    <div>
      <Header />
      <legend>Logout</legend>
      <Button onClick={Logout}>Click here to logout</Button>
      <Footer />
    </div>
  );
};

export default SignOut;
