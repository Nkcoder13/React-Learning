import "./header.css";
const Header = () => {
  return (
    <div className="Header">
      <img src="src\assets\logo.png" className="logo" alt="image not loaded" />

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
