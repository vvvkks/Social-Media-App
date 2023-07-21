import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return <header className={s.header}>
        <img src="https://www.freeiconspng.com/uploads/purple-flower-png-17.png" alt="Logo"/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}
export default Header;