import { Variants } from "framer-motion";

export const billItemAnimate: Variants = {
  in: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  outBottom: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};
