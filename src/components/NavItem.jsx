import { Link, useLocation } from "react-router-dom";

const NavItem = ({ content }) => {
  return (
    <li>
      <Link
        className={`nav-item ${
          useLocation().pathname.substring(1) === content.slug ? "active" : ""
        } `}
        to={`/${content.slug}`}
      >
        {content.name}
      </Link>
    </li>
  );
};

export default NavItem;
