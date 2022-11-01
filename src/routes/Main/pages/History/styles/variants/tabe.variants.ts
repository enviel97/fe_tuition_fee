import { Variants } from "framer-motion";

export const TBodyAnimation: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const TrAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: -5,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};
