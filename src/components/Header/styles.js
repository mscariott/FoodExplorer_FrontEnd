import styled from 'styled-components'


export const Container = styled.div`

  color: white;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 2.1rem;
  padding: 5.6rem 2.8rem 2.4rem;
  font-family: "Roboto", sans-serif;



  @media (min-width: 1024px) {

    padding: 3.4rem 12.3rem 2.4rem ;

  }
`

export const Content = styled.div`
animation: down 1s; 
  .desktop{
    display: none;
  }

  :nth-child(2){

    font-size: 2.1rem;
    >img{
    height:2.4rem
    }
  }
  
    @media(min-width: 1024px) {

      .mobile{
      display: none;
      }

      .desktop{
        display: flex;
        align-items: center;
        gap: 3.2rem;

        >div:first-child{
          min-width: 19.7rem;
        }

        >button{        
          min-width: 21.6rem;
          width: 21.6rem; 
        }

        >button:last-child{
          width: auto;
          min-width: auto;
        }
      }

  }



`
export const Show = styled.div`
    display: flex;
    position: relative;

    gap: 1.6rem;
    align-items: center;
    height: 3.4rem;
    width: 100%;

    .cart{
    display: flex;
    
    >button{
      position: relative;
      top: .2em;
      right: .5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }


    >span{
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -0.5rem;
      right: -0.3rem;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  
  gap: 1.6rem;

`