import { Container } from "./styles";


export function Tags({title, isNew=false}){
  
  return(
    <Container
    isNew = {isNew}>
      {title}
    </Container>
  ) 
}