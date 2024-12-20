import NavItem from "./NavItem";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Navbar = ({ cName, forMobile }) => {
  const { pathname } = useLocation();
  const activePath = pathname.split("/")[1];

  // links
  const links = [
    { id: 1, name: "home", slug: "" },
    { id: 2, name: "about", slug: "about" },
    { id: 3, name: "blog", slug: "blog" },
    { id: 4, name: "projects", slug: "projects" },
  ];

  // animated values
  const variants = {
    initial: { filter: "blur(12px)", x: "100%", opacity: 0 },
    animate: { filter: "blur(0px)", x: "0%", opacity: 1 },
  };

  return (
    <AnimatePresence>
      <motion.ul
        transition={{ duration: 0.325, ease: [0.25, 0.1, 0.25, 1] }}
        initial={forMobile && variants.initial}
        animate={forMobile && variants.animate}
        exit={forMobile && variants.initial}
        className={cName}
      >
        {links.map((item) => (
          <NavItem key={item.id} content={item} activePath={activePath} />
        ))}
      </motion.ul>
    </AnimatePresence>
  );
};

export default Navbar;
