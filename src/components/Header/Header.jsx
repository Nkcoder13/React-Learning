import { useState } from "react";
import "./header.css";
import { Link } from "react-router";

const Header = () => {
  const [status, setStatus] = useState("Login");
  return (
    <div className="Header">
      <div>
        <img
          src="src\assets\logo.png"
          className="logo"
          alt="image not loaded"
        />
        <h4>Nk&apos;s Kitchen</h4>
      </div>

      <ul className="resLinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about"> About Us </Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>Cart</li>
        <button
          onClick={() => {
            status === "Login" ? setStatus("Logout") : setStatus("Login");
          }}
        >
          {status}
        </button>
      </ul>
    </div>
  );
};

export default Header;
