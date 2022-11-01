import { motion } from "framer-motion";
import styled from "styled-components";

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &.center {
    justify-content: center;
    align-items: center;
  }
  & .flex {
    &__1 {
      flex: 1;
    }
    &__2 {
      flex: 2;
    }
    &__3 {
      flex: 3;
    }
    &__end {
      align-items: flex-end;
    }
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  &.center {
    justify-content: center;
    align-items: center;
  }
  &.end {
    justify-content: flex-end;
    justify-content: flex-end;
  }
  & .flex {
    &__1 {
      flex: 1;
    }
    &__2 {
      flex: 2;
    }
    &__3 {
      flex: 3;
    }
    &__4 {
      flex: 4;
    }
  }
`;

export const FormContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

export const FormTitle = styled.p`
  font-weight: bold;
`;

export const FormContent = styled.form.attrs({
  noValidate: true,
  autoComplete: "off",
})``;

export const FormNotification = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.warningColor};
  justify-content: flex-end;
  text-align: right;
  font-size: 1.2rem;
`;

export const IdPromiseField = styled.div`
  width: 100%;
`;
