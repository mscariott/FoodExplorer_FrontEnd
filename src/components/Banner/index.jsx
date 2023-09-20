import { Container, Content } from './styles'

import imgBannerDesktop from '../../assets/barnnerdesktop.png'

export function Banner(){
  return(
    <Container>
      <img src={imgBannerDesktop} alt="Imagem de frustas e bolachas no ar" />
      <Content>
        <h2>Sabores inigualáveis</h2>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </Content>
    </Container>
  )

}