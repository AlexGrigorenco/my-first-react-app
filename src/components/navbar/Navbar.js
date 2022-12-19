import "./style.css";



import { NavLink } from "react-router-dom";
import BttnDarkMode from "../BttnDarkMode";

const Navbar = () => {

  const activLink ='nav-list__link nav-list__link--active'
  const inActivLink ='nav-list__link'



  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">

          <NavLink to="/" className="logo">
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <BttnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className={({isActive}) => {
                return isActive ? activLink : inActivLink
              }}>
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/projects" className={({isActive}) => {
                return isActive ? activLink : inActivLink
              }}>
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/contacts" className={({isActive}) => {
                return isActive ? activLink : inActivLink
              }}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
