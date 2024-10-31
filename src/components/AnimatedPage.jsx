import { motion } from "framer-motion";
import React from "react";

const transition = { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(12px)", transform: "translateY(30%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const AnimatedPage = ({ children, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div
            transition={transition}
            variants={variants}
            className={child.props.className}
          >
            {child}
          </motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
};

export default AnimatedPage;
