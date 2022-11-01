import { neumorphismBoxShadow } from "@common/tools";
import styled from "styled-components";

export const TimerCountdownContainer = styled.div<{ size: string }>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  font-weight: 900;

  & .CircularProgressbar {
    border-radius: 50%;
    box-shadow: ${neumorphismBoxShadow(true)};
    &-trail {
      stroke: ${({ theme }) => theme.backgroundColor};
      stroke-linecap: butt;
      filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.7))
        drop-shadow(-4px -4px 2px rgba(59, 59, 59, 0.4));
    }
    &-path {
      stroke: ${({ theme }) => theme.secondaryColor};
      stroke-linecap: round;
      transition: stroke-dashoffset 0.2ms ease-in-out;
    }
    &-text {
      fill: ${({ theme }) => theme.secondaryColor};
      font-size: 150%;
    }
  }
`;
