import "./navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">LowPrice</span>
        </Link>

         <div className="navItems">
          <button className="navButton" style={{borderRadius:"20px"}}>
              <NavLink to="/"></NavLink>
            Admin</button>

          </div>
          
          <div className="navItems">
            <button className="navButton" style={{borderRadius:"20px"}}>
              <NavLink
                to="/register"
                style={{ textDecoration: "none", color: "inherit"}}
              >
                Registar
              </NavLink>
            </button>
            <button className="navButton" style={{borderRadius:"20px"}}>
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "inherit"}}
              >
                Login
              </NavLink>
            </button>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
