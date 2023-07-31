import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/authReducer";

const Header = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const login = useSelector((state) => state.auth.login);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <header className={s.header}>
            <img src="https://www.freeiconspng.com/uploads/purple-flower-png-17.png" alt="Logo" />
            <div className={s.loginBlock}>
                {isAuth ? (
                    <div>
                        <span>{login}</span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <NavLink to={'/login'}>Login</NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;