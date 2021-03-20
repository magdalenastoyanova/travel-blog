import style from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className= {style.navigation}>
                <ul>
            <li><img src="./public/images/logo.png" alt="travel logo"/></li>
            <article className={style.listItems}>
            <NavLink to="/">Travels</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/logout">Logout</NavLink>
            </article>
             </ul>
        </nav>
    )
}

export default Header;