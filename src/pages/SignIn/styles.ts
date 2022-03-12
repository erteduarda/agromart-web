import styled from "styled-components";
import { shade } from 'polished'
import signInBackground from '../../assets/02.jpg'

// export const ImageContainer = styled.div``

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      padding: 10px;
      background-color: #FFF;
      border-radius: 5px;
      width: 100%;
      border: 2px solid #e0e0e0;
      color: grey;

      &::placeholder {
        color: gray;
      };

      & + input {
        margin-top: 8px;
      }
    }

    button {
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
    }

    a {
      color: var(--emerald-4);
      display: block;
      margin-top: 10px;
      text-decoration: none;
      transition: color 0.4s;

      &:hover {
        color: ${shade(1, '#00cb76ff')}
      }
    }
  }

  > a {
    font-weight: bold;
    color: var(--keppel);
    display: block;
    margin-top: 10px;
    text-decoration: none;
    transition: color 0.4s;
    display: flex;
    align-items: center;
    
    svg{
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(1, '#28baa1ff')}
    }
  }

`;

export const Text = styled.text`
  font-size: 40px;
  margin-top: 20px;
`

export const Background = styled.div`
  flex: 1;
  background-color: var(--emerald-4);
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;