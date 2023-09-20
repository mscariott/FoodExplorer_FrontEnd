import styled from 'styled-components'

export const Container = styled.div`

  position: relative;
  
  >img{
    position: absolute;
    bottom: -0.6rem;
    left:0.6rem;
    animation: move 1s;
    max-width: 270px;
    min-width: 220px;
    width: 30%;
  }

  animation: appear 1s forwards linear;

  @media(min-width: 1024px){

    >img{
      bottom:-1.2rem;
      left:4%;
      max-width: 690px;
      width: 50%;
    }
  }


`

export const Content = styled.div`
  height: 12rem;
  flex: 1;
  background: ${({ theme }) => theme.COLORS.GARDIENTS_200};
  border-radius: 0.3rem;

  margin: 4.4rem 1.6rem 6.2rem 3.6rem; 

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 2.1rem 0 40%;


  >h2{
    font-size: 1.8rem;
    line-height: 2.52rem; 
    animation: move 1s;

  }

  >p{
    font-size: 1.2rem;
    line-height: 1.68rem; 
    animation: move 1s;

  }


  @media (max-width: 425px){

    padding-left: 16.3rem;
    
  }

  @media (max-width: 590px) {
    padding-left: 20rem;
    
  }

  @media(min-width: 1024px){

    border-radius: 0.8rem;
    height: 26rem;   
    margin: 16.4rem 10% 6.2rem ; 
    padding: 0 2rem 0 40%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.8rem;


    >h2{
      font-size: 4rem;
      line-height: 110%; 
    }

    >p{
      font-size: 1.6rem;
      line-height: 110%;  
    }

}

`