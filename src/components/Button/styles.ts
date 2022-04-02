import styled from "styled-components";
import { shade } from 'polished'

export const Container = styled.button`
  height: 40px;
  width: 100%;
  background-color: var(--emerald-3);
  border-radius: 5px;
  padding: 0 10 px;
  color: var(--white);
  border: 0;
  margin-top: 16px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover{
    background: ${shade(0.2, '#07cd78ff')};
  }
`;