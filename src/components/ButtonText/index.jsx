import { Container } from "./styles";

export function ButtonText({title, icon:Icon, size, onClick, favorite=false, ...rest}){
  return(
    <Container
    type= "button"
    onClick={onClick}
    {...rest}
    className={favorite ? "favorite" : "normal"}

    >
      {Icon  && <Icon size ={size}/>}
      {title}
    </Container>
  )

}