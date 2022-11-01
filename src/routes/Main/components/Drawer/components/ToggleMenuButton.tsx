import { motion } from "framer-motion";
import styled from "styled-components";

export const ToggleButton = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  position: absolute;
  top: 24px;
  left: 24px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`;

export const Path = styled(motion.path)`
  fill: transparent;
  stroke-width: 3;
  stroke: ${({ theme }) => theme.secondaryColor};
  stroke-linecap: round;
`;

interface ToggleMenuButtonProps {
  toggle: () => void;
}

const ToggleMenuButton = (props: ToggleMenuButtonProps) => {
  return (
    <ToggleButton onClick={props.toggle}>
      <svg width={23} height={23} viewBox='0 0 23 23'>
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </ToggleButton>
  );
};

export default ToggleMenuButton;
