import "./header.css";
const Header = () => {
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
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Review</li>
      </ul>
    </div>
  );
};

export default Header;
