import styled from 'styled-components'

export const Container = styled.div`

position: relative;
height: 34.2rem;
margin-bottom: 2.4rem;

>h3{
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  font-size: 1.8rem;
  line-height: 2.52rem;
}

@media (min-width: 1024px) {
  height: 53rem;
  margin-bottom: 4.8rem;
  margin: 0 10%;


  >h3{
    font-size: 3.2rem;
    line-height: 4.48rem;
    
  }
  >button{
    top: 50%;

  }
}
`
export const Itens = styled.div`

max-width: 95vw;
overflow-x: hidden;
scroll-behavior: smooth;
margin-top: 2.4rem;
position: relative;
display: flex;         
flex-wrap: nowrap;
gap: 1.6rem;

@media (min-width: 1024px) {
  gap: 2.7rem

}
`

export const Scroll = styled.div`

position: relative;
height: 29.2rem;

>h1{
  display: flex;
  justify-content: center;
  padding-top: 12rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

}

> button{
  position: absolute;
  z-index: 2;
  height: 100%;

  filter: blur(0.9);
}

>button:first-child{
  background: linear-gradient(270deg, rgba(0,10,15,.1) 60%, #000A0F 100%);
  top: 0;
}

> button:last-child {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 5rem;
  height: 90%;
  right: 0;
  top: 3.7rem;
  background: linear-gradient(90deg, rgba(0,10,15,.1) 0%, #000A0F 100%);
}

@media(min-width: 1024px){
  height: 46.2rem;

  >h1{
    padding-top: 20.5rem;

  }

  >button:last-child{
    top: 4.8rem;
  }
}

`