import style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
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
  );
};

export default Header;
