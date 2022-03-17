import styled from "styled-components";

export const Container = styled.div`
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

  input {
    flex: 1;
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