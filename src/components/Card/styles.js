import styled from 'styled-components'

export const Container = styled.div`

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  min-width: 21rem;
  width: 21rem;
  border-radius: .8rem;
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_300};
  height: 29.2rem;

  ${({ isAdmin }) => isAdmin && `justify-content: center;`}
  
  >button{
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
    
  }

  >button:hover{
    animation: scale .2s forwards linear;
  }

  .description-of-dish{
    display: none;
  }

  @media(min-width: 1024px) {
    min-width: 30.4rem;
    width: 30.4rem;
    height: 46.2rem;
    .description-of-dish{
      display: flex;
    }
  }

  transition: 200ms;
  &:hover{
    cursor: pointer;
    filter: brightness(1.15);
  }


`

export const Content = styled.div`

  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;

  >h3{
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.4rem;
    font-weight: 500;
    animation: show 3s linear;
  }

  >span{
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1.6rem;
    animation: show 3s linear
  }

  >img{
    width: 8.8rem;
    height: 8.8rem;  
    border-radius: 50%;
    animation: down .8s linear;
  }
 
  @media (min-width: 1024px){ 

    gap: 1.5rem;

    >img{
      height: 17.6rem;
      width: 17.6rem;
    }

    >h3{
    font-size: 2.4rem;
    font-weight: 700;
    }

    >p{

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      text-align: center;

      height: 4.4rem;
      font-size: 14px;
      line-height: 2.24rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400}; 
    }

    >span{
      font-size: 3.2rem;
    }
  }


`

export const Stepper = styled.div`

display: flex;
color: ${({ theme }) => theme.COLORS.LIGHT_100};
gap: 1.4rem;
align-items: center;
> p{
  animation: show 2s linear;
}

>button:hover{
    animation: scale .2s forwards linear;
}

@media(min-width: 1024px){
  width: 10rem;

  >p{
    font-size: 2rem;
  }

}

`

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  
  >button:hover{
    animation: scale .2s forwards linear;

}


  @media(min-width: 1024px){
    flex-direction: row;
  }
`