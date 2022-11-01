import { neumorphismBoxShadow, neumorphismBoxShadowInset } from "@common/tools";
import { motion } from "framer-motion";
import styled from "styled-components";

export const DropdownContainer = styled.div<{ width: string; height: string }>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  position: relative;
  display: flex;
`;

export const DropdownSearch = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1000;
  & .search {
    &-icon {
      position: absolute;
      left: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1.2rem;
      aspect-ratio: 1/1;
    }
    &-dropdown {
      background-color: ${({ theme }) => theme.backgroundColor};
      box-shadow: ${({ theme }) =>
        neumorphismBoxShadowInset(true, {
          background: theme.backgroundColor,
        })};
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      color: ${({ theme }) => theme.secondaryColor};
      &:disabled {
        background-color: ${({ theme }) => theme.disableColor};
        box-shadow: none;
        border: inset 1px solid ${({ theme }) => theme.disableColor};
      }
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      aspect-ratio: 1/1;
    }

    &-input {
      display: flex;
      width: 100%;
      inset: none;
      border: none;
      padding: 0.75em 0em 0.75em 2.5em;
      background-color: ${({ theme }) => theme.backgroundColor};

      box-shadow: ${({ theme }) =>
        neumorphismBoxShadow(true, {
          background: theme.backgroundColor,
        })};

      &:disabled {
        background-color: ${({ theme }) => theme.white}10;
      }
    }
  }
`;

export const DropdownItemContainer = styled(motion.div)`
  min-height: 0px;
  max-height: 200px;
  width: 100%;
  position: absolute;
  border: none;
  outline: none;
  top: calc(100% + 1em);
  background-color: ${({ theme }) => theme.backgroundColor};
  z-index: 100;
  box-shadow: ${({ theme }) =>
    neumorphismBoxShadow(true, {
      background: theme.backgroundColor,
    })};

  & .empty {
    color: ${({ theme }) => theme.disableColor};
    height: 12.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DropdownItem = styled.div`
  padding: 0.2rem 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.onBackgroundColor};

  &:hover,
  &.select,
  &:focus {
    background-color: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.onSecondaryColor};
  }
  &-value {
    display: flex;
    padding: 0.6rem 1rem;
    background-color: inherit;
    color: inherit;
    border: none;
    outline: none;
  }
  &::after {
    content: "";
    padding: 0 2rem;
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.disableColor}20;
  }
`;
