import NavItem from "./NavItem";

const Navbar = ({ cName }) => {
  // links
  const links = [
    { id: 1, name: "home", slug: "" },
    { id: 2, name: "about", slug: "about" },
    { id: 3, name: "blog", slug: "blog" },
    { id: 4, name: "projects", slug: "projects" },
  ];

  return (
    <ul className={cName}>
      {links.map((item) => (
        <NavItem key={item.id} content={item} />
      ))}
    </ul>
  );
};

export default Navbar;
