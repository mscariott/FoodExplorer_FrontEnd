import { Container, Logo, WaterMark } from './styles'

import logoFooter from '../../assets/logo_footer.svg'

export function Footer() {
  return (
    <Container>

      <Logo>
      <img src={logoFooter} />
      <p>food explorer</p>
      </Logo>


        <p>© 2023 - Todos os direitos reservados.</p>
    </Container>


  )
}