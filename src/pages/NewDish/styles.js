import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
justify-content: space-between;
`

export const Content = styled.div`

display: flex;
flex-direction: column;
padding: 1.6rem 3.2rem;
flex: 1;
gap: 2.4rem;


>a{
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1%.65;
    line-height: 2.31rem;
    font-weight: 500;
  
    width: 100%;
    font-family: 'Poppins', sans-serif; 
  }

>h2{
  font-family: 'Poppins', sans-serif; 
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 4.48rem; 
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  margin-bottom: 1.2rem;
}

.InputWrapper{
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  >label{
    font-family: 'Roboto', sans-serif; 
    font-size: 1.6rem;
  }
}

.InputWrapper .stylingSelect{
  
  width: 100%;
  padding: 1.3rem 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: .5rem;
}

.InputWrapper select{
 
  border: none;
  min-width: 29.4rem;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-family: 'Roboto', sans-serif; 
  font-size: 1.4rem;
  line-height: 2.24rem;
}

.field{
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  height: 4.8rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  gap: 1.6rem;

  >input{
  display: none;
  cursor: pointer;
  }

  >label{
    display: flex;
    align-items: center;
    padding: 1.2rem 3.2rem;
    gap: .8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    >p{
      font-size: 1.4rem;
      line-height: 2.4rem;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
    }
  }
}

@media (min-width: 1024px) {
  gap: 3.2rem; 
}
`

export const Row = styled.div`
display: flex;
gap: 2.4rem;
flex-direction: column;

@media (min-width: 1024px) {
  flex-direction: row;
  gap: 3.2rem;
  width: 100%;

  div:nth-last-child(2){
    flex: 1;
  }
  
}
`

export const Save = styled.div`
 @media(min-width: 1024px){
    width: 20rem;
    align-self: end;
  }

`