import { Variants } from "framer-motion";

export const fadeInOut: Variants = {
  in: { x: 0, y: 0, opacity: 1 },
  out: { x: 0, y: 0, opacity: 0 },
  outLeft: { x: 50, opacity: 0 },
  outRight: { x: -50, opacity: 0 },
  outTop: { y: 50, opacity: 0 },
  outBottom: { y: -50, opacity: 0 },
};
