import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand">
        Navbar
      </div>

      <div >
        <div className="navbar-nav">

          <NavLink 
            to="/"
            className={ ({isActive})=> `nav-link ${isActive ? 'active': ''}` }
            >
            Home
          </NavLink>
          <NavLink 
            to="/login"
            className={ ({isActive})=> `nav-link ${isActive ? 'active': ''}` }
            >
            Login
          </NavLink>
          <NavLink 
            to="/about"
            className={ ({isActive})=> `nav-link ${isActive ? 'active': ''}` }
            >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
