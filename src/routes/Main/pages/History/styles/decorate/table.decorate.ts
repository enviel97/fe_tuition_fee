import { neumorphismBoxShadow } from "@common/tools";
import styled from "styled-components";

export const TableContainer = styled.div`
  box-shadow: ${neumorphismBoxShadow(true)};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-height: 70vh;
  & .divider {
    padding: 0.5em 2em;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 1em;
  font-size: 0.8em;

  & th {
    &[scope="col"] {
      box-shadow: ${neumorphismBoxShadow(true)};
      border: none;
      outline: none;
      padding: 0.2em 0.5em;
      font-weight: bold;
    }
    &[scope="row"] {
      width: fit-content;
    }
  }
  & td {
    text-align: center;
    width: fit-content;
    font-size: inherit;
    &.content {
      text-align: left;
    }
    &.success,
    &.failure {
      border-radius: 10px;
      text-transform: capitalize;
      font-weight: bold;
      border: 2px solid currentColor;
    }
    &.success {
      color: ${({ theme }) => theme.successColor};
    }
    &.failure {
      color: ${({ theme }) => theme.errorColor};
    }
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
