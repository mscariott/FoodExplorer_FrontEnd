import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  :root{

    font-size: 62.5%;
    outline: none;
    --width-desktop: 1024px;



    @keyframes show {
      0%{
        opacity: 0;
      }
    }

    @keyframes appear{
      0%{
        opacity: 0;
      }
    }

    @keyframes move {
      0%{
        transform: translateX(-5%);
      }
    }

    @keyframes scale {
    100%{
      transform: scale(110%)
    }
    
  }

  @keyframes up {
    0%{
      transform: translateY(20%);
    }   
  }

  @keyframes down {
    0%{
      transform: translateY(-20%);
    }   
  }

  @keyframes left {
    0%{
      transform: translateX(20%);
      opacity: 0;
    }   
  }

  @keyframes right {
    0%{
      transform: translateX(-20%);
      opacity: 0;
    }   
  }
    
  }
 

  body{
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  a{
    text-decoration: none;
  }

  a, button, select{
    cursor: pointer;
    transition: filter 0.2s;
  }

  input, textarea, select{
    outline: none;
  }

  a:hover, button:hover{
    animation: brightness .5s forwards;
  }

  @keyframes brightness {

    100%{
      filter: brightness(0.8);
    }
    
  }


`