import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  align-items: center;
  gap: .8rem;

  font-size: 1.4rem;
  padding: .4rem .8rem;
  border-radius: .5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000}; 
`