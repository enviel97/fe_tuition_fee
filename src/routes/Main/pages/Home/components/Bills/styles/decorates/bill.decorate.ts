import { breakpoint } from "@common/breakpoint";
import { neumorphismBoxShadow } from "@common/tools";
import { motion } from "framer-motion";
import styled from "styled-components";

const columnSize = (width: string) =>
  `repeat(auto-fill, minmax(${width}, 1fr))`;

export const BillContainer = styled(motion.div)`
  flex: 1;
  width: 100%;
`;

export const BillListContainer = styled(motion.div)`
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: ${columnSize("20rem")};
  grid-gap: 2rem 2.5rem;
  min-height: 90vh;
  margin-bottom: 3rem;

  ${breakpoint.down("desktop")} {
    grid-template-columns: ${columnSize("25rem")};
  }

  ${breakpoint.down("tablet")} {
    grid-template-columns: ${columnSize("28rem")};
  }
`;

export const BillCard = styled(motion.div)`
  position: relative;
  height: fit-content;
  padding: 1rem;
  background-color: ${({ theme }) => theme.surfaceColor};
  border-radius: 0 1.2rem 1.2rem;
  box-shadow: ${neumorphismBoxShadow(true, {
    background: "#121212",
  })};
  color: ${({ theme }) => theme.onBackgroundColor};
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  & h5 {
    font-weight: bold;
    color: inherit;
  }
  & p {
    padding: 0.2rem 0;
    font-weight: 300;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.disableColor};
  }
`;

export const CardSubjects = styled.div`
  position: relative;
  padding: 1.2rem 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  line-height: 0;

  & .subjects-row {
    display: flex;
    height: fit-content;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.9rem;
    padding: 1rem 0;

    & .text-right {
      text-align: right;
    }

    & span {
      flex: 3;
      color: ${({ theme }) => theme.disableColor};
    }

    & strong {
      flex: 2;
      text-align: right;
      color: ${({ theme }) => theme.onBackgroundColor};
    }
  }
`;

export const CardSubjectsMore = styled(motion.div)`
  position: absolute;
  display: flex;

  bottom: -0.5rem;
  right: 0.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-align: right;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.disableColor}50;
  & span {
    margin-left: 0.2rem;
    background-color: ${({ theme }) => theme.disableColor}50;
    font-size: 0.7rem;
    padding: 0.5rem;
    border-radius: 50%;
    color: ${({ theme }) => theme.disableColor};
  }
  & .icon {
    margin: 0 0.2rem;
  }
`;

export const CardSubjectsFooter = styled.span`
  margin-top: 0.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.disableColor};
  & strong {
    margin-left: 1rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.secondaryColor};
  }
  & .expired {
    color: ${({ theme }) => theme.errorColor};
  }
`;

export const CardStatus = styled.div`
  position: absolute;
  padding: 0.5rem;
  bottom: 2.5%;
  left: 2.5%;
  font-size: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.surfaceColor};
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 20%;
  border: 2px solid currentColor;

  &.expired {
    color: ${({ theme }) => theme.errorColor};
  }

  &.debt {
    color: ${({ theme }) => theme.warningColor};
  }

  &.paid {
    color: ${({ theme }) => theme.successColor};
  }
`;
