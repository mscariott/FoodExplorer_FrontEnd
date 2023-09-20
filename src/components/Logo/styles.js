import styled from 'styled-components'

export const Container = styled.div`

display: flex;
align-items: center;
gap: 1rem;
flex: 1;
height: 4.8rem;
justify-content: center;

&.logOut{
    gap: 2rem;
 }

@media(min-width: 1024px){
  &.logOut{
    justify-content: start;
  }
}

`

export const Text = styled.div`

height: 4.8rem;
display: flex;
align-items: center;
gap: .8rem;

>h1{
  
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
}
  >span{
  color: ${({ theme }) => theme.COLORS.CAKE_200};
  font-family: 'Roboto', sans-serif;
}


&.logIn{
  >h1{
    
    font-size: 2.1rem;
  }
 
  >span{
    font-size: 1.2rem;

  }
}

.logOut{

  >h1{
    font-size: 3.724rem;
  }
 
  >span{
    font-size: 1.2rem;

  }

}

@media (min-width: 1024px) {

 flex-direction: column;
 align-items: end;
 gap: 0;

 ${({isAdmin}) => isAdmin ? `justify-content: end;` :  `justify-content: center;`}
 

>h1{
  font-size: 4.2rem;
}
  
}
`