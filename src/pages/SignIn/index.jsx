import { Container, Form, InputWrapper } from './styles'
import { Link } from 'react-router-dom'
import { useState } from "react"

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'



export function SignIn() {

  const { signIn } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  function handleSignIn() {
    signIn({ email, password })
  }


  return (
    <Container>
      <Logo />
      <Form>

        <h3 className="desktop">
          Faça Login
        </h3>

        <InputWrapper>
          <span>Email</span>
          <Input
            placeholer="Exemplo: exemplo@exemplo.com.br"
            type="text"
            onChange={e => setEmail(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <span>Senha</span>
          <Input
            placeholer="No mínimo 6 caracteres"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </InputWrapper>

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register" >
          Criar uma conta
        </Link>
      </Form>

    </Container>
  )
}