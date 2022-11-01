import Divider from "@components/Divider";
import { motion } from "framer-motion";
import styled from "styled-components";
import { navItemAnimationZoom } from "../Drawer/styles/variants/slide.variants";

const DividerContainer = styled(motion.div)`
  width: 100%;
  padding: 0 2rem;
  margin: 0 0 1rem 0;

  & .caption {
    font-size: 0.9rem;
    font-weight: bold;
  }
`;

interface DividerAnimationProps {
  label: string;
}

const DividerAnimation = (props: DividerAnimationProps) => {
  return (
    <DividerContainer variants={navItemAnimationZoom}>
      <Divider label={props.label} />
    </DividerContainer>
  );
};

export default DividerAnimation;
