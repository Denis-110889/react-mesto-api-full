import logo from '../images/logo_mesto.svg';
import {Link, useLocation} from "react-router-dom";

function Header({onLoggOut, isLoggedIn, userEmail, name, path}) {
    
    const location = useLocation();

    if (location.pathname === '/sign-in') {
        path = '/sign-up';
        name = 'Регистрация';
    } else if (location.pathname === '/sign-up') {
        path = '/sign-in';
        name = 'Войти';
    }

    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип" />
            <div className="header__container">
                {isLoggedIn ? <p className="header__email">{userEmail}</p> : null}
                {isLoggedIn ? 
                    <span className="header__link  link" 
                        onClick={onLoggOut}>
                        Выйти
                    </span> : 
                        <Link to={path} className="header__link link">
                            {name}
                        </Link>}
            </div>
        </header>
    )
}

export default Header;