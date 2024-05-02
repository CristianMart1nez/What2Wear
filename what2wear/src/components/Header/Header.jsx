import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { HeartFillIcon } from "../Icons/HearFillIcon/HeartFillIcon";

export const Header = () => {
  const navigate = useNavigate();
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [firstLetterUppercase, setFirstLetterUppercase] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticate(true);
      setFirstLetterUppercase(
        name.charAt(0).toUpperCase() + name.charAt(1).toUpperCase()
      );
    } else {
      setIsAuthenticate(false);
    }
  });

  const handleToggleMenu = () => {
    console.log("click");
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticate(false);
    navigate("/");
  };

  return (
    <header>
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
            {isAuthenticate ? (
              <>
                <Avatar
                  sx={{ bgcolor: "#b8e32d" }}
                  style={{ cursor: "pointer" }}
                  onClick={handleToggleMenu}
                >
                  {firstLetterUppercase}
                </Avatar>
                <li>
                  <Link to="/favourite">
                    <HeartFillIcon className="header-heart-icon" />
                  </Link>
                </li>
                <li onClick={handleLogout}>
                  <LoginOutlinedIcon className="header-logout-icon" />
                </li>
              </>
            ) : (
              <Link to="/login" className="btn btn-login">
                Log In
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
