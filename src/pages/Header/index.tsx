import logoImg  from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent } from './styles'

export function Header(){
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <img src={ logoImg } alt="agromart"/>
        </HeaderContent>
      </HeaderContainer>
    </>
  )
}