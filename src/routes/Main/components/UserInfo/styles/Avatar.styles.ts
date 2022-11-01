import { neumorphismBoxShadow } from "@common/tools";
import styled from "styled-components";

export const AvatarContainer = styled.div`
  margin: 1rem;
  height: clamp(7rem, 112px + 1vh, 10rem);
  width: clamp(7rem, 112px + 1vh, 10rem);
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundColor};
  box-shadow: ${neumorphismBoxShadow(true)};
  & img {
    margin-top: 2rem;
  }
`;
