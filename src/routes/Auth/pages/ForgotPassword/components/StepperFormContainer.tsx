import { motion, Variants, AnimatePresence, Transition } from "framer-motion";
import styled from "styled-components";

const StepperFormDecorate = styled(motion.div)`
  flex: 1;
`;

const transition: Transition = {
  duration: 0.5,
  ease: "backInOut",
  staggerChildren: 0.1,
};

const slide: Variants = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1, transition },
  exit: { y: -10, opacity: 0, transition },
};

const StepperFormContainer = (props: Components) => {
  return (
    <AnimatePresence>
      <StepperFormDecorate
        variants={slide}
        initial='initial'
        exit='exit'
        animate='animate'
        transition={{ duration: 0.2 }}
      >
        {props.children}
      </StepperFormDecorate>
    </AnimatePresence>
  );
};

export default StepperFormContainer;
