import styled from 'styled-components'

export const Container = styled.div`

  position: absolute;
  top: 0;
  height: 100%;
  background-color: ${({theme}) => theme.COLORS.DARK_400};
  width:32rem;
  z-index: 3;
  animation: show 0.3s linear;

  ${props => !props.$enable ? "display: none": ""}
`

export const Content = styled.div`
  margin-top: 3.6rem;
  padding: 0 2.8rem;

  div:first-child{
    margin-bottom: 3.6rem;
  }

  >button{
   font-weight: 300;
    font-size: 2.4rem;
    line-height: 3.3rem;
    width: 100%;
    display: flex;
    padding: 1rem;
    border: none;
    background: transparent;
    color: ${({theme})=> theme.COLORS.LIGHT_300};
    border-bottom: 2px solid ${({theme})=> theme.COLORS.DARK_1000};

  }


`