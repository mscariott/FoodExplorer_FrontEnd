import { Container } from "./styles";


export function Input({ icon: Icon, placeholer, isDish = false, ...rest }) {
  return (
    <Container
      $isDish={isDish}
      {...rest}>
      {Icon && <Icon size={20} />}
      <input placeholder={placeholer} {...rest} />
    </Container>
  )
}