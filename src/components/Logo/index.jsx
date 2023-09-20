import { Container, Text } from "./styles";
import {useAuth} from '../../hooks/auth'
import logoIcon from '../../assets/logo_icon.svg'

export function Logo({isAdmin = false}) {

  const {user} = useAuth()

  return (
    <Container
    className= {user ? "logIn" : "logOut"} 
    >

      <img src={logoIcon} />
      <Text className= {user ? "logIn" : "logOut"} isAdmin= {isAdmin}>
      <h1>food explorer</h1>
      {isAdmin ? <span>admin</span> : ""}
      </Text>
    </Container>
  )
}