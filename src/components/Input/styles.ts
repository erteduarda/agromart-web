import styled, { css } from "styled-components";
import Tooltip from '../Tooltip'
interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 10px;
  background: #FFF;
  border-radius: 5px;
  width: 100%;

  border: 2px solid #e0e0e0;
  color: grey;

  display:flex;
  align-items: center;

  & + div {
      margin-top: 8px;
    }
    
  ${props => props.isErrored && css`
    border-color: #ff3340;
  `}

  ${props => props.isFocused && css`
    color: var(--emerald-4);
    border-color: var(--emerald-4); 
  `}

  ${props => props.isFilled && css`
    color: var(--emerald-4);
  `}


  input {
    width: 100%;
    background: transparent;
    border: 0;
    
    &::placeholder {
      color: gray;
    };

  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;