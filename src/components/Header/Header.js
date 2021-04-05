import React, { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import getNavigation from '../helper/nav'
import LinkComponent from '../Link/Link'
import { Link } from 'react-router-dom'
import style from "./Header.module.css";

const Header = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in
        setUserLoggedIn(authUser);
      } else {
        // user has logged out
        setUserLoggedIn(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [userLoggedIn]);


  const links = getNavigation(userLoggedIn)


const Header = () => {
  return (
    <header >
    <nav className={style.navigation}>
      <ul>
        <Link to="/">
          <li>
            <img src="./images/logo.png" alt="travel logo" />
          </li>
        </Link>
        <article className={style.listItems}>
        <Link to="/places">Places</Link>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
        </article>
      </ul>
    </nav>
    </header >
  );
};
}
export default Header;
