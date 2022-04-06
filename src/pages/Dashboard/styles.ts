import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100px;
  background-color: var(--emerald-2);
`;

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: var(--emerald-4);
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 70px;
  } 
  
  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: var(--white);
      width: 25px;
      height: 25px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
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