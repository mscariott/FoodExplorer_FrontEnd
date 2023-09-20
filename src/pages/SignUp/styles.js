import styled from 'styled-components'



export const Container = styled.div`

max-width: 31.6rem;
margin: 15.8rem auto 0 ;
height: 100vh;


.desktop{
  display: none;
}

@media(min-width: 1024px){
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80vw;
  margin-top: 0;

  div:first-child{
    padding-bottom: 12rem;
    animation: left 2s linear;
  }

  .desktop{
  display: block;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-weight: 400;
  font-family: "Poppins",sans-serif;
  font-size: 3.2rem;
  line-height: 4.48rem;
  margin: 0 auto;
  
  }
}
`

export const Form = styled.form`

animation: right 2s;
margin-top: 7.3rem;
display: flex;
flex-direction: column;
gap:3.2rem;

>a{
  margin: 0 auto;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
}

@media(min-width: 1024px){
  min-width: 47.6rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 6.4rem;
  border-radius: 1.6rem;
  height: 62.1rem;
  margin-top : 0;
 
}

`

export const InputWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 0.8rem;;

>span{
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: 1.6rem;
 }
`