import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  
  const [token, setToken] = React.useState();

  const [click, setClick] = React.useState(false);

  const handleClick = () =>{
    setClick(!click)
  } ;
  const logout=()=>{
    console.log("Cli")
    if (confirm("Are you sure you want to sign out?")) {
      if(typeof window !== undefined) {
        localStorage.removeItem('token')
      }
      setToken()
    }
  }
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""} onClick={()=>Close()} />
      <nav className="navbar" onClick={(e)=>e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Food-App
            <i className="fa fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/profile"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/order"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Stafflogin"
                activeClassName="active"
                className="nav-links"
               onClick={()=>{
                logout();
                click ? handleClick : null;
                
              }}
              >
                Log out
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  )};

export default Navbar;
