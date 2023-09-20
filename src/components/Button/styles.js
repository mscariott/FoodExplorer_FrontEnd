import styled from 'styled-components'

export const Container = styled.button`
display: flex;
width: 100%;
padding: 1.2rem 3.2rem;
height: 4.8rem;
border: none;
justify-content: center;
align-items: center;
border-radius: .5rem;

font-family: "Poppins", sans-serif;
background-color: ${({ theme, disabled }) => disabled ? theme.COLORS.TOMATO_400 : theme.COLORS.TOMATO_100};

color: ${({ theme }) => theme.COLORS.LIGHT_100};

${({$deleted,theme}) => $deleted &&  `background-color: ${theme.COLORS.DARK_800};`}

>svg{
  margin-right: .6rem;
}

`
