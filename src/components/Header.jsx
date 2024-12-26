import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const [menuClass, setMenuClass] = useState(false);
  const location = useLocation();

  // handle click on burger menu
  function handleClickMenu() {
    setMenuClass((menuClass) => !menuClass);
  }

  // reset the toggle button to close
  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth >= 896) {
      setMenuClass(false);
    }
  });

  // reset the toggle button when changing route
  useEffect(() => {
    setMenuClass(false);
  }, [location]);

  return (
    <>
      <header className="header">
        <nav className="header-container container">
          {/* logo */}
          <Link className="logo" to="/">
            samithseu
          </Link>
          {/* nav-links */}
          <Navbar forMobile={menuClass} cName={"nav-link"} />
          {/* burger menu */}
          <div onClick={handleClickMenu} className="burger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* nav-links for mobile*/}
          {menuClass && (
            <Navbar forMobile={menuClass} cName={"nav-link-mobile"} />
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
