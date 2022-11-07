import { breakpoint } from "@common/breakpoint";
import { neumorphismBoxShadow } from "@common/tools";
import { motion } from "framer-motion";
import styled from "styled-components";

export const AuthContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled(motion.form).attrs({
  noValidate: true,
  autoComplete: "off",
})`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 1em;
  background-color: ${({ theme }) => theme.backgroundColor};
  box-shadow: ${neumorphismBoxShadow(true, {
    background: "#121212",
  })};
`;

export const FormTitle = styled.h4`
  font-weight: 700;
  color: #afafaf;
  margin-bottom: 1rem;
`;

export const FormLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &.c {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export const FormContainer = styled(motion.div)`
  width: 30%;
  height: 75%;
  ${breakpoint.down("laptop")} {
    width: 50%;
  }
  ${breakpoint.down("tablet")} {
    width: 80%;
  }
  display: flex;
  padding: 2rem 2rem;
  gap: 0.5em;
  background-color: ${({ theme }) => theme.backgroundColor};
  box-shadow: ${neumorphismBoxShadow(true, {
    background: "#121212",
  })};
`;

export const FormRow = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  gap: 0.2rem;
  align-items: flex-end;
  & span {
    color: ${({ theme }) => theme.disableColor};
  }
`;
