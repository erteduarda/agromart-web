import styled, { css } from "styled-components";

export const Header = styled.header`
  height: 15vh;
  padding: 32px 0;
  background: var(--keppel);
`;

export const HeaderContent = styled.div`
  flex: 1;
  margin: 0 auto;
  display: flex;
  align-items: center;
  
  > img {
    height: 70px;
  } 
  
  button {
    /* margin-left: auto; */
    background: transparent;
    border: 0;

    svg {
      color: var(--white);
      width: 25px;
      height: 25px;
    }

    &:hover{
      opacity: 0.6;
    }
  }
`;



export const ContentTextArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  form {
    flex: 1;
    padding: 14px;
  }
`;

export const NotificationsDashboard = styled.div`
  display: flex;
  flex-direction: column;
  width: 45vw;
  align-items: center;
  flex: 1;
  margin-top: 2rem;
  padding: 1.5rem 0;
  border-radius: 10px;
  background-color: var(--keppel);
`

export const CenterNotifications = styled.div`
  width: 70%;
  height: 350px;
  overflow: auto;
`


export const NotificationBox = styled.div`
  align-items: center;
  display: flex;
  padding: 15px;
  margin: 2px;
  margin-bottom: 0.8rem;
  flex: 1;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid ;
  border-color: var(--emerald-4);
  border-radius: 7px; 
`
export const NotificationsDashboardTitle = styled.strong`
  font-weight: bold;
  color: var(--white);
  align-self: start;
  margin: 0 2rem 1rem 2rem;
`

export const NotificationTitle = styled.h3`
  color: var(--emerald-2);
  font-size: sans-serif !important;
`

export const NotificationForm = styled.div`
  margin-top: 1rem;
  width: 45%;
  display: flex;
  flex-direction: column;
`

export const NotificationFormInput = styled.input`
padding-left: 0.5rem;
border: 1px solid var(--emerald-4);
border-radius: 5px;

&::placeholder {
    font-style: italic;
    color: var(--gray-text);
  }
`

export const NotificationFormTextArea = styled.textarea`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  border: 1px solid var(--emerald-4);
  border-radius: 5px;
  resize: none;

  &::placeholder {
    font-style: italic;
    color: var(--gray-text);
  }
`

export const NotificationFormButton = styled.button`
  width: 20%;
  color: var(--white);
  background-color: var(--keppel);
  border: 0px;
  border-radius: 5px;
  &:hover{
    opacity: 0.6;
  }
`

export const Container = styled.div`
  flex: 1;
  flex-direction: row;
`

export const MenuButton = styled.button`
  flex: 0.1;
  align-items: center;
`

export const Logo = styled.img`
  flex: 0.1;
`

export const PowerButton = styled.button`
  flex: 0.1;
`

export const Profile = styled.div`
  display: flex;
  flex: 0.7;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: var(--white);
    }

    strong {
      color: var(--white);
      font-weight: bold;
    }
  }
`;