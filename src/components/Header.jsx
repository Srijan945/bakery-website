import { Link } from "react-router-dom";
import './css/Header.css';

function Header() {

    return (
        <header className="header">
            <div className="header__home">
                <Link to='/'>
                    <img src="./home.png" alt="home-icon" />
                </Link>
            </div>
            <div className="header__flexbox">
                <div className="header__flexbox__logo">
                    <img src='./logo.jpg' alt="logo" />
                </div>
                <p className="header__flexbox__name">Bakeology</p>
            </div>
            <div className="header__cart">
                <Link to='/cart'>
                    <img src='./cart.png' alt='cart' />
                </Link>
            </div>
        </header>
    );
}

export default Header;