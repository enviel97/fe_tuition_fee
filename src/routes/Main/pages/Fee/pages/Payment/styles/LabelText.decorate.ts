import styled from "styled-components";

export const LabelTextContainer = styled.div`
  width: 100%;
  gap: 1em;
  display: flex;
  align-items: flex-end;
  & label {
    font-size: 1rem;
    color: ${({ theme }) => theme.disableColor};
  }
  & span {
    font-size: 1.2rem;
    font-weight: bold;
  }
  &.notification > span {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;
