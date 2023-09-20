import {Container} from './styles'

export function Button({title, size, disabled = false, deleted = false, icon:Icon, ...rest}){

  return(
  <Container
  type="button"
  disabled={disabled}
  $deleted = {deleted}
  {...rest}
  >
    {Icon && <Icon size={size}/>}
    {title}
    
  </Container>
  )


}