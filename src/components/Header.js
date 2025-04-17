import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import navItems from "../utils/NavItems";

const Header = () => {
  const [navbarItems, setNavbarItems] = useState([]);
  const [btnName, setBtnName] = useState("Login");

  // if no dependecy array => useEffect will get called on every render
  // if dependency array is empty => useEffect will get called on initial render(just Once)
  // if dependency array [btnName] => called everytime when [btnName] is updated
  useEffect(() => {}, []);

  const onLogin = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  const isLoggedIn = () => {
    btnName === "Logout" ? setNavbarItems(navItems) : setNavbarItems([]);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          {navbarItems?.map((item) => (
            <li>{item.title}</li>
          ))}
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              btnName === "Logout"
                ? setNavbarItems(navItems)
                : setNavbarItems([]);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
