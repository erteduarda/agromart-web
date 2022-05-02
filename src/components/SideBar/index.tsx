import React from 'react';
import { useHistory } from "react-router-dom";
import { IconContext } from 'react-icons'
import { FiBookmark, FiHome, FiLogIn } from 'react-icons/fi'
import { SideBarContainer, SideBarContent, SideBarItem, SideBarItemText } from './styles'

interface SideBarProps { 
  toggle: boolean
}

const SideBar: React.FC<SideBarProps> = ({ toggle }) => {
  const history = useHistory();
  
  const changeToDashboard = () => {
    history.push('/dashboard');
  }

  // const changeToHome = () => {
  //   history.push('/repository');
  // }

  const changeToNewAccount = () => {
    history.push('/signup');
  }

  return (
    <SideBarContainer toggled={toggle}>
      <SideBarContent>
        <IconContext.Provider value={{ color: 'white'}}>
          {/* <SideBarItem>
            <FiHome size={30}/>
            <SideBarItemText onClick={changeToHome}>Home</SideBarItemText>
          </SideBarItem> */}
          <SideBarItem>
            <FiBookmark size={30}/>
            <SideBarItemText onClick={changeToDashboard}>Notificação</SideBarItemText>
          </SideBarItem>
          <SideBarItem>
            <FiLogIn size={30}/>
            <SideBarItemText onClick={changeToNewAccount}>Cadastro</SideBarItemText>
          </SideBarItem>
        </IconContext.Provider>
      </SideBarContent>
    </SideBarContainer>
  )
}

export default SideBar;