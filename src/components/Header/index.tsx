import logoImg  from '../../assets/logo.svg'
import { Container, Content } from './styles'
import { Admin } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export function Header(){
  return (
    <>
      <Container>
        <Content>
          <img src={ logoImg } alt="agromart"/>
        </Content>
      </Container>
      <Admin dataProvider={ dataProvider }/>
    </>
  )
}