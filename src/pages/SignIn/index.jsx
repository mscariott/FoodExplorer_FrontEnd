import { Container, Form, InputWrapper, Demo } from './styles'
import { Link } from 'react-router-dom'
import { useState } from "react"

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'



export function SignIn() {

  const { signIn } = useAuth()

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignInAsDemo(demoEmail, demoPassword) {
    setLoading(true)
    await signIn({ email: demoEmail, password: demoPassword })
    setLoading(false)

  }

  async function handleSignIn() {
    setLoading(true)
    await signIn({ email, password })
    setLoading(false)
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

        <Button title={loading ? "Carregando..." : "Entrar"} onClick={handleSignIn} disabled={loading} />

        <Demo>
        <Button title={loading ? "Carregando..." : "Entrar como Admin"} 
        onClick={() => {
          handleSignInAsDemo("admin@email.com","123456")
        }
        } 
        disabled={loading} />

        <Button title={loading ? "Carregando..." : "Entrar como User"} 
        onClick={() => {
          handleSignInAsDemo("user@email.com","123456")
        }
        } 
        disabled={loading} />
        </Demo>

        <Link to="/register" >
          Criar uma conta
        </Link>
      </Form>

    </Container>
  )
}