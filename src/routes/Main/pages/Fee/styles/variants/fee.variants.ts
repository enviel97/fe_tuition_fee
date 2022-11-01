import { Variants } from "framer-motion";

export const FeeUserConfirm: Variants = {
  default: {
    opacity: 0,
    x: "100vw",
  },
  fadeIn: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 50,
    },
  },
};

export const FeePaymentConfirm: Variants = {
  default: {
    opacity: 0,
    x: "100vw",
  },
  fadeIn: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.35,
      type: "spring",
      stiffness: 500,
      damping: 50,
    },
  },
};
