import styled from "styled-components";
import { shade } from 'polished'
import signUnBackground from '../../assets/03.jpg'

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

export const Text = styled.span`
  font-size: 40px;
  margin-top: 20px;
`

export const Background = styled.div`
  flex: 1;
  background-color: var(--emerald-4);
  background: url(${signUnBackground}) no-repeat center;
  background-size: cover;
`;