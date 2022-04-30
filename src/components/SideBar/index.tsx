import React, {useState} from 'react';
import { IconContext } from 'react-icons'
import { FiBookmark } from 'react-icons/fi'
import { SideBarContainer, SideBarContent, SideBarItem, SideBarItemText } from './styles'

interface SideBarProps { 
  toggle: boolean
}

const SideBar: React.FC<SideBarProps> = ({ toggle }) => {

  return (
    <SideBarContainer toggled={toggle}>
      <SideBarContent>
        <IconContext.Provider value={{ color: 'white'}}>
          <SideBarItem>
            <FiBookmark size={30}/>
            <SideBarItemText>Notificação</SideBarItemText>
          </SideBarItem>
        </IconContext.Provider>
      </SideBarContent>
    </SideBarContainer>
  )
}

export default SideBar;