import styled from 'styled-components'

export const Container = styled.div`
 color: ${({ theme }) => theme.COLORS.LIGHT_300};
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 height: 100vh;

 >button{
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 2.4rem;
  line-height: 3.6rem;
  font-weight: 500;
  margin-top: 3.6rem;
  margin-left: 5.6rem;
}




`

export const Content = styled.div`
flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  padding: 0 5.6rem 0;

  
  animation: show 3s;
  
  >img{
  height: 26.4rem;
  width: 26.4rem;
  border-radius: 50%;
  }

  @media (min-width: 1024px) {
  flex-direction: row;

  align-items: flex-start;
  padding-top: 10rem;

  >img{
  height: 39rem;
  width: 39rem;

  }
}
`
export const Info = styled.div`

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 4.5rem 5.6rem 0;
  align-items: center;

  >h3{
    font-size: 2.7rem;
    font-weight: 500;
    line-height: 3.78rem;  
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  >p{

    margin-top: .8rem;
    margin-bottom: .8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.2rem;
    text-align: center;
  }

  .ingridients{
    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    align-items: start;
    gap: 2.4rem;

    >h3{
      font-size: 4rem;
      line-height: 5.6rem;
    }

    >p{
      text-align: left;
      font-size: 2.4rem;
      line-height: 3.36rem;
    }

    .ingridients{
    justify-content: left;
   }

   
  
  }

`

export const Order = styled.div`
display: flex; 
gap: 1.6rem;
width: 100%;

>button{
  min-width: 15rem;
}

>button:hover{
  animation: scale .2s forwards;
}


@media (min-width: 1024px) {
  width: auto;
  margin-top: 2.8rem;
  gap: 3.6rem
}

`

export const Stepper = styled.div`
display: flex;
gap: 1.6rem;
align-items: center;

>button:hover{
  animation: scale .2s forwards;
}

>p{
  font-size: 2.26rem;
  font-weight: 700;
  line-height: 3.62rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: "Roboto", sans-serif;

}

`

