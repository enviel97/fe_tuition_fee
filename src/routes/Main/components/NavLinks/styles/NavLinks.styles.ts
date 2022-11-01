import { breakpoint } from "@common/breakpoint";
import { neumorphismBoxShadow, neumorphismBoxShadowInset } from "@common/tools";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinksContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: clamp(0.8rem, 1px + 1vh, 1rem);
  border-radius: 10px;

  &.active {
    background-color: ${({ theme }) => theme.backgroundColor};
    font-weight: bold;
    box-shadow: ${neumorphismBoxShadow(true)};
    & .icon {
      color: ${({ theme }) => theme.secondaryColor};
    }
  }

  & .text {
    display: flex;
    flex: 1;
    margin-left: 0.5rem;
  }
`;

export const NavLinkContainer = styled(motion.li)`
  position: relative;
  list-style: none;
  margin: 0 0 1rem 2rem;
  width: 100%;
  border-radius: 10px 0 0 10px;
  ${breakpoint.down("laptop")} {
    width: 90%;
    border-radius: 10px;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  box-shadow: ${neumorphismBoxShadowInset(true)};
`;

export const navAnimation = {
  hover: {
    backgroundColor: "#121212",
    boxShadow: neumorphismBoxShadow(true),
  },
  tap: {
    scaleX: 0.98,
    boxShadow: "0 0 0 #212121ff",
  },
};
