import { motion } from "framer-motion";
import styled from "styled-components";
import UserInfo from "../../UserInfo";
import { navAnimation } from "../styles/variants/slide.variants";
import NavLinks from "../../NavLinks";
import Actions from "../../Actions";

const NavigationContainer = styled(motion.ul)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Navigation = () => {
  return (
    <NavigationContainer variants={navAnimation}>
      <UserInfo />
      <NavLinks />
      <Actions />
    </NavigationContainer>
  );
};

export default Navigation;
