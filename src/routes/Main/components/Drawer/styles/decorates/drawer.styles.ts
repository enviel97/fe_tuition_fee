import { breakpoint } from "@common/breakpoint";
import { motion } from "framer-motion";
import styled from "styled-components";

export const DrawerBackground = styled(motion.div)`
  background-color: ${({ theme }) => theme.surfaceColor};
  width: clamp(250px, 250px + 5vw, 300px);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;

  ${breakpoint.up("laptop")} {
    visibility: hidden;
  }
`;

export const DrawerContainer = styled(motion.nav)`
  background-color: ${({ theme }) => theme.surfaceColor};
  width: clamp(250px, 250px + 5vw, 300px);
  position: relative;
  overflow: hidden;
  display: flex;
  z-index: 999;
  pointer-events: none;

  & button {
    pointer-events: all;
  }

  ${breakpoint.down("laptop")} {
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }
`;
