import { neumorphismBoxShadow, neumorphismBoxShadowInset } from "@common/tools";
import styled from "styled-components";

export const Neumorphism = styled.div<{
  textColor?: string;
  size?: string;
  color?: string;
}>`
  width: ${({ size }) => size ?? "fit-content"};
  aspect-ratio: 1 / 1;

  & button {
    position: relative;
    height: 100%;
    width: 100%;
    cursor: pointer;
    background-color: ${(props) => props.theme.backgroundColor};
    border: 1px solid ${(props) => props.theme.backgroundColor}50;

    outline: none;
    font-weight: bold;
    box-shadow: ${({ theme }) =>
      neumorphismBoxShadow(true, {
        background: theme.backgroundColor,
        x: 6,
      })};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;

    & svg {
      aspect-ratio: 1 / 1;
      height: 1.2rem;
    }

    &:disabled {
      box-shadow: none;
      background-color: ${({ theme }) => theme.disableColor}20;
    }

    &:active:enabled {
      & span {
        font-size: 70%;
      }
      box-shadow: ${({ theme }) =>
        neumorphismBoxShadowInset(true, {
          background: theme.backgroundColor,
          x: 2,
        })};
    }
  }
`;
