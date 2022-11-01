import { LightenDarkenColor } from "@common/tools";
import styled from "styled-components";

export const Base = styled.div<{
  color?: string;
  textColor?: string;
  height?: string;
  width?: string;
}>`
  ${({ width = "100%", height = "fit-content" }) => ({ width, height })}
  & button {
    padding: 0.2rem 1rem;
    width: 100%;
    border-radius: 0.3em;
    border: none;
    outline: none;
    font-size: 1.2rem;
    background-color: ${(props) => props.color ?? props.theme.secondaryColor};
    color: ${(props) => props.textColor ?? props.theme.onSecondaryColor};
    font-weight: bold;
    border: 2px solid
      ${({ color, theme }) =>
        LightenDarkenColor(color ?? theme.secondaryColor, -2)};
    box-shadow: 0.5em 0.5em 8px
      ${({ color, theme }) =>
        LightenDarkenColor(color ?? theme.secondaryColor, -10)}80;

    &:hover {
      scale: 1.02;
      background-color: ${({ color, theme }) =>
        LightenDarkenColor(color ?? theme.secondaryColor, 10)};
    }

    &:focus {
      border: 2px solid
        ${({ color, theme }) =>
          LightenDarkenColor(color ?? theme.secondaryColor, 10)};
      scale: 1.02;
    }

    &:active {
      scale: 0.98;
      background-color: ${({ color, theme }) =>
        LightenDarkenColor(color ?? theme.secondaryColor, -10)};
    }
  }
`;
