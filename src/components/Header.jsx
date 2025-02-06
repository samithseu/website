import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const [menuClass, setMenuClass] = useState(false);
  const location = useLocation();

  // handle outside click
  const handleOutsideClick = (event) => {
    if (menuClass && event.target instanceof HTMLElement) {
      if (!event.target.closest(".burger-menu")) {
        setMenuClass(false);
      }
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuClass]);

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
          <div
            data-show-menu={menuClass}
            onClick={handleClickMenu}
            className="burger-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* nav-links for mobile*/}
          {menuClass && (
            <Navbar
              onclick={handleOutsideClick}
              forMobile={menuClass}
              cName={"nav-link-mobile"}
            />
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
