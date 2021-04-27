import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ click }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="">
        <span className="logo">
          {/* <img src={logo} style={{ height: "40px", width: "200px" }} alt="" /> */}
        </span>
      </Link>

      <ul className="navbar__links">
        <li>
          <Link to="/" className="">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/taskmanager" className="">
            <span>Task Manager</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="">
            <span>About Us</span>
          </Link>
        </li>
        <li>
          <Link to="/admin" className="">
            <span>Admin</span>
          </Link>
        </li>
      </ul>

      <ul className="navbar__links">
        <li>
          <Link to="/task" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>Tasks</span>
            <div className= "cart__counter">12</div>
          </Link>
        </li>
        <li></li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
