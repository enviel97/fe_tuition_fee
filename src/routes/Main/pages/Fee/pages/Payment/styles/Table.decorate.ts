import { neumorphismBoxShadow } from "@common/tools";
import styled from "styled-components";

export const TableContainer = styled.div`
  box-shadow: ${neumorphismBoxShadow(true)};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & .divider {
    padding: 0.5em 2em;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 1em;
  font-size: 0.8em;
  & th[scope="col"] {
    box-shadow: ${neumorphismBoxShadow(true)};
    border: none;
    outline: none;
    padding: 0.2em 0.5em;
    font-weight: bold;
  }
  & td {
    text-align: center;
    width: fit-content;
    font-size: inherit;
  }
`;

export const TablePaymentContainer = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 1em 1.5em 1.5em 0em;
  & span {
    font-size: 0.8em;
  }
  & strong {
    font-size: 0.8em;
    color: ${({ theme }) => theme.secondaryColor};
  }
`;
