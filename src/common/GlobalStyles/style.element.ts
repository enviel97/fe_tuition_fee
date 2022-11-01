import { neumorphismBoxShadow, neumorphismBoxShadowInset } from "@common/tools";
import { typography } from "@common/typography";
import { createGlobalStyle } from "styled-components";

const ElementStyle = createGlobalStyle`
  .f {
    &-center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-1 {
      flex: 1;
    }
    &-2 {
      flex: 2;
    }
    &-4 {
      flex: 4;
    }


    &-column {
      flex-direction: column;
      &-reverse{
        flex-direction: column-reverse;
      }
    }

    &-row {
      flex-direction: row;
      &-reverse{
        flex-direction: row-reverse;
      }
    }
  }

  .a-center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .link {
    cursor: pointer;
    text-decoration: none;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.disableColor};
    & strong {
      color: ${({ theme }) => theme.secondaryColor};
    }
  }

  .neumorphism {
    box-shadow: ${neumorphismBoxShadow(true)};
    &-inset {
      box-shadow: ${neumorphismBoxShadowInset(true)};
    }
  }

  &::-webkit-scrollbar {
    width: 1em;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.backgroundColor};
    &-track {
      box-shadow: ${({ theme }) =>
        neumorphismBoxShadowInset(true, {
          background: theme.backgroundColor,
        })}; 
      border-radius: 10px;
    }
    &-thumb {
      width: 1em;  
      border: 1px solid #000000;
      background-color: ${({ theme }) => theme.surfaceColor};
      box-shadow: 
        inset -8px -8px 8px #0d0d0d,
        inset 10px 10px 20px ${({ theme }) => theme.surfaceColor} ;
      
      border-radius: 20px;
      &:hover {
        background-color: ${({ theme }) => theme.surfaceColor};
        box-shadow: inset -5px -5px 5px #0d0d0d;
      }
    }
  }

  .decorate {
    font-family: ${typography.fontFamily.decorate};
  }
`;

export default ElementStyle;
