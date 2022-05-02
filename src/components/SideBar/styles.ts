import styled from 'styled-components'


export const SideBarContainer = styled.div<{toggled: boolean}>`
  @keyframes openSideBar {
    from {
      opacity: 1;
      width: 300px;
      left: -100%;
    }
    to {
      opacity: 1;
      width: 300px;
      left: 0%;
    }
  }

  @keyframes closeSideBar {
    from {
      opacity: 1;
      width: 300px;
      left: 0%;
    }
    to {
      opacity: 1;
      width: 300px;
      left: -100%;
    }
  }

  background-color: var(--emerald);
  height: 85vh;
  width: 300px;
  position: absolute;
  bottom: 0px;
  box-shadow: 4px 2px 10px gray;
  left: ${props => props.toggled ? '0%' : '-100%'};
  animation-name: ${props => props.toggled ? "openSideBar" : "closeSideBar"};
  animation-duration: 0.8s;
  
`

export const SideBarContent = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`

export const SideBarItem = styled.button`
  margin-bottom: 1rem;
  margin-left: 1rem;
  border: none;
  background-color: var(--keppel);
  display: flex;
  align-items: center;
  width: 90%;
  padding: 0px 10px;
  border-radius: 5px;
  flex-direction: row;

  &:hover{
    opacity: 0.8;
  }
`

export const SideBarItemText = styled.p`
  margin-left: 10px;
  font-size: 24px;
  color: white;
`