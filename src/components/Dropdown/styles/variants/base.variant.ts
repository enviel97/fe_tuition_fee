export const dropdownAnimate = {
  expanded: {
    // visibility: "visible",
    height: "fit-content",
    opacity: 1,
    overflow: "auto",
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
      overflow: {
        delay: 0.5,
      },
    },
  },
  collapsed: {
    height: 0,
    opacity: 0,
    overflow: "hidden",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
