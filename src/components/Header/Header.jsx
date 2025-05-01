import { useState } from "react";
import "./header.css";
import { Link } from "react-router";
import useOnlineStatus from "../../util/useOnlineStatus";

const Header = () => {
  const [status, setStatus] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between gap-1 sm:justify-around sm:items-center bg-emerald-100 ">
      <div className="sm:flex items-center gap-2">
        <img
          src="src\assets\logo.png"
          className="w-30  object-cover"
          alt="image not loaded"
        />
        <h4 className="font-bold font-mono text-green-900 text-xs">
          Nk&apos;s Kitchen
        </h4>
      </div>

      <ul className="flex items-center gap-1.5 sm:gap-3 text-sm  space-x-4">
        <li className="bg-green-300 text-black text-sm sm:p-1  rounded-lg hover:bg-green-800 hover:cursor-not-allowed hover:text-white">
          {onlineStatus ? "✅ Online" : "🔴 Offine"}
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about"> About Us </Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <button
          className="bg-white text-green-950 px-4 py-2 rounded-full hover:cursor-pointer "
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
