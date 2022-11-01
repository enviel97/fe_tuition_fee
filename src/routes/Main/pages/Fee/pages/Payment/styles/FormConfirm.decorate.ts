import styled from "styled-components";

export const FormConfirmContainer = styled.div`
  display: flex;
  gap: 1em;
`;

export const Form = styled.form.attrs({
  noValidate: true,
  autoComplete: "off",
})`
  display: flex;
  flex: 1;
  gap: 0.8em;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  & .row {
    display: flex;
    gap: 0.8em;
  }
`;

export const TimerCountdownContainer = styled.div`
  display: flex;
  align-items: center;
`;
