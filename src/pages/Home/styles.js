import styled from 'styled-components'

export const Container = styled.div`

  position: relative;

  @keyframes appear{

  0%{
    opacity: 0;
  }
}

`

export const Content = styled.div`

  display: flex;
  flex-direction: column;
  animation: appear 1s forwards linear;
  height: 100%;

  padding-bottom: 2.4rem;
  padding-left: 2.4rem;

  @media(min-width: 1024px) {
    padding-left: 0;
    gap: 4.8rem;
    
  }

  

`