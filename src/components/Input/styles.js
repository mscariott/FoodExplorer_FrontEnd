import styled from 'styled-components'

export const Container = styled.div`

width: 100%;
display: flex;
align-items: center;
border-radius: .8rem;
color: ${({ theme }) => theme.COLORS.LIGHT_100};
padding: 1.6rem 1.4rem; 
height: 4.8rem;
gap: 1.4rem;

background-color: ${({ theme, $isDish }) => $isDish ?  theme.COLORS.DARK_800 : theme.COLORS.DARK_900};

>input{
  width: 100%;

  border: none;
  
   
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background: transparent;
}
&:placeholder{
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

@media(min-width: 1024px){

>svg{
margin-left: 15%;
}
}

`