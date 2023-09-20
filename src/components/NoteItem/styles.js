import styled from 'styled-components'

export const Container = styled.div`

  display: flex;
  align-items: center;
  gap: .8rem;

  font-size: 1.6rem;
  padding: .4rem 1.6rem;
  border-radius: .5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.6rem;
  height: 3.2rem;
  max-width: 12rem;



  >input{
    width: 100%;
    border: none;
    background: transparent;
    color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100}
  }

  >button{
    border: none;
    background: none;
    color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100}
  }



 

  background: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.LIGHT_600};
  border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  
`