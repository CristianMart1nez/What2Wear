import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav-container">
          <div className="logo-container">
            <img src="./src/assets/What_2_Wear.svg" />
          </div>

          <ul className="links-container">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/closet">Closet</Link>
            </li>
            <li>
              <Link to="/outfits">MyOutfits</Link>
            </li>
            <li>
              <Link to="/trending">Trending</Link>
            </li>
          </ul>

          <div className="btn-login-register-container">
            <Link to="/login" className="btn btn-login">Log In</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
