import { breakpoint } from "@common/breakpoint";
import styled from "styled-components";
export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  flex-direction: row;

  & .root {
    flex: 1;
    min-height: 78vh;
  }

  & footer {
    display: flex;
    text-align: right;
    align-items: flex-end;
    justify-content: flex-end;
    max-height: 10vh;
    height: 100%;
  }
`;

export const MainScreens = styled.div`
  flex: 1;
  padding: 2em 2em;
  overflow-x: hidden;
  overflow-y: auto;
  ${breakpoint.down("laptop")} {
    padding-top: 4.5em;
  }
`;
