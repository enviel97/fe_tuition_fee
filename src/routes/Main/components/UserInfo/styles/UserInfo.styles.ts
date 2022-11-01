import { motion } from "framer-motion";
import styled from "styled-components";

export const UserInfoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 1rem;

  & .name {
    font-size: 0.8em;
    font-weight: bold;
  }
`;

export const UserRow = styled(motion.div)`
  display: flex;
  width: 100%;
  padding: 0 1rem;
  align-items: flex-end;
  justify-content: flex-end;

  & .textCenter {
    text-align: center;
  }

  & .label {
    text-transform: capitalize;
  }
  & .value {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    padding-left: 0.5rem;
    color: ${({ theme }) => theme.secondaryColor};
    font-weight: bold;
  }
`;

export const UserIconButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.backgroundColor};
  box-shadow: 5px 5px 4px #12121280;
  color: ${({ theme }) => theme.onBackgroundColor};
  border-radius: 50%;

  padding: 0.2rem;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor}80;
    color: ${({ theme }) => theme.onBackgroundColor}80;
  }
`;
