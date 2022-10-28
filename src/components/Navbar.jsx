import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import "../css/navbar.css";

const Navbar = () => {
  // const [isActive, setisActive] = useState(false)
  return (
    <div>
      <nav className="navbar " style={{ backgroundColor: "rgb(186, 1, 50)" }}>
        <div className="container-fluid css">
          <Link
            target={"blank"}
            to="https://github.com/B-Oz/recipe-app"
            className="navbar-brand mx-4"
          >
            Link for Recipe App GitHub <BsGithub className="mb-1 " />
          </Link>
          <div className="d-flex flex-row " id="navbarNavDropdown">
            <ul
              className="navbar-nav d-flex flex-row"
              style={{ fontSize: "1.3rem", fontWeight: "600" }}
            >
              <li className="nav-item my-2 mx-4">
                <NavLink className="nav-link " aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item my-2 mx-4">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item my-2 mx-4">
                <NavLink className="nav-link" to="/">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
