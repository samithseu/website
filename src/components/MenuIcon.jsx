import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MenuIcon = ({ menuState }) => {
  const [isOpen, setIsOpen] = useState(menuState);

  useEffect(() => {
    setIsOpen(menuState);
  }, [menuState]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {/* Top Line */}
      <motion.line
        x1={isOpen ? 7 : 3}
        y1={isOpen ? 7 : 6}
        x2={isOpen ? 17 : 21}
        y2={isOpen ? 17 : 6}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={false} // Prevents unwanted animations on mount
        animate={{
          x1: isOpen ? 7 : 3,
          y1: isOpen ? 7 : 6,
          x2: isOpen ? 17 : 21,
          y2: isOpen ? 17 : 6,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      {/* Middle Line */}
      <motion.line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ opacity: 1 }} // Fix the undefined opacity issue
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      {/* Bottom Line */}
      <motion.line
        x1={isOpen ? 7 : 3}
        y1={isOpen ? 17 : 18}
        x2={isOpen ? 17 : 21}
        y2={isOpen ? 7 : 18}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={false}
        animate={{
          x1: isOpen ? 7 : 3,
          y1: isOpen ? 17 : 18,
          x2: isOpen ? 17 : 21,
          y2: isOpen ? 7 : 18,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default MenuIcon;
