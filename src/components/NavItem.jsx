import { Link } from "react-router-dom";

const NavItem = ({ content, activePath }) => {
  return (
    <li>
      <Link
        className={"nav-item" + (activePath === content.slug ? " active" : "")}
        to={`/${content.slug}`}
      >
        {content.name}
      </Link>
    </li>
  );
};

export default NavItem;
