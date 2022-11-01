import { breakpoint } from "@common/breakpoint";
import styled from "styled-components";

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  ${breakpoint.down("tablet")} {
    flex-direction: column;
  }

  & .loading,
  .typing {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .typing {
    flex: 1;
    ${breakpoint.up("tablet")} {
      flex: 3;
    }
  }

  & .loading {
    flex: 2;
    ${breakpoint.up("tablet")} {
      flex: 1;
    }
  }
`;
