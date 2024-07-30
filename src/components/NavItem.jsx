import { Link } from "react-router-dom";

const NavItem = ({ content }) => {
  return (
    <li>
      <Link className="nav-item" to={`/${content.slug}`}>
        {content.name}
      </Link>
    </li>
  );
};

export default NavItem;
