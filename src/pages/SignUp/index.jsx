import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { api } from '../../services/api'

import { Container, Form, InputWrapper } from './styles'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'



export function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()


  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usúario cadastrado com sucesso")
        navigate("/")
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar")
        }
      })
  }

  return (
    <Container>
      <Logo />

      <Form>

      <h3 class="desktop">
          Crie sua conta
        </h3>

        <InputWrapper>
          <span>Seu Nome</span>
          <Input
            placeholer="Exemplo: Maria da Silva"
            type="text"
            onChange={e => setName(e.target.value)} />
        </InputWrapper>

        <InputWrapper>
          <span>Email</span>
          <Input
            placeholer="Exemplo: exemplo@exemplo.com.br"
            type="text"
            onChange={e => setEmail(e.target.value)} />
        </InputWrapper>

        <InputWrapper>
          <span>Senha</span>
          <Input
            placeholer="No mínimo 6 caracteres"
            type="password"
            onChange={e => setPassword(e.target.value)} />
        </InputWrapper>

        <Button 
        type="button"
        title="Criar conta" 
        onClick={handleSignUp} />

        <Link to ="/">
          Já tenho uma conta
        </Link>
      </Form>

    </Container>
  )
}