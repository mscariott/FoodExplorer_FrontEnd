import { Container, Content } from './styles'
import { useNavigate } from 'react-router-dom'

import { Header } from '../Header'
import { Input } from '../Input'

import { useAuth } from '../../hooks/auth'


import { FiX, FiSearch } from 'react-icons/fi'


export function Menu({ isAdmin = false, enable, onHandleActive, nameValue}) {

  const navigate = useNavigate()

  const { signOut } = useAuth()

  function handleSignOut() {
    navigate("/")
    signOut();
  }

  return (
    <Container
      $enable={enable}
    >

      <Header isMenu = {true} onHandleActive= {onHandleActive}/>
       
      <Content>
        <Input
          placeholer="Busque por pratos ou ingredientes"
          icon={FiSearch}
          onChange= {nameValue}
          type="text"
        />


        {isAdmin == 1 &&
          <button
            onClick={() => navigate("/new")}>
            <p>Novo prato</p>
          </button>
        }
        <button
        onClick={handleSignOut}>
          <p>Sair</p>
        </button>
      </Content>


    </Container>
  )
}