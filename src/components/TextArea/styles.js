import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;
  
  background-color: ${({theme}) => theme.COLORS.DARK_800};
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;

  border: none;
  resize: none;

  border-radius: 0.8rem;
  padding: 1.4rem;

  &::placeholder{
    font-family: "Roboto", sans-serif;
    color: ${({theme}) => theme.COLORS.LIGHT_500};
  }
`