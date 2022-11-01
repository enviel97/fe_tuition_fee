import { Variants } from "framer-motion";

export const sidebar: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const navAnimation: Variants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  close: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

export const navItemAnimationSlide: Variants = {
  open: {
    y: 0,
    opacity: 1,
    pointerEvents: "auto",
    cursor: "auto",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    pointerEvents: "none",
    cursor: "not-allow",
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const navItemAnimationZoom: Variants = {
  open: {
    width: "100%",
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    width: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
