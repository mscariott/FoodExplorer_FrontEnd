import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 2.4rem 10%;
  justify-content: space-between;
  align-items: center;
  height: 7.7rem;
  

  >p{ 
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.2rem;
    animation: up 1s;
  
  }

  @media(min-width: 1024px){

    >p{
      font-size: 1.5rem;
    }
    
  }
  `

export const Logo = styled.div`
animation: up 1s;
  
display: flex;
gap: .6rem;
align-items: center;
color: ${({ theme }) => theme.COLORS.LIGHT_700};
font-size: 1.6rem;
font-weight: 700;

@media(min-width: 1024px){
  font-size: 2.4rem;
  
  >img{
  height: 3rem;
  width: 3rem;
}

}


`

export const WaterMark = styled.div`



`