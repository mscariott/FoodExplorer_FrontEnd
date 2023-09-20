import styled from 'styled-components'

export const Container = styled.button`

display: flex;
align-items: center;
font-family: "Poppins", sans-serif;

background: none;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  border: none;
  font-size: 1.6rem;

  &.favorite{
    >svg{
      fill: red;
      color: red;
    }
  }

`