import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function HomeBot() {
  return (
    <Container>
        <Fade top><img src='./images/bot.png' /></Fade>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed; 
    top: 0;
    
    

    img{
       width: 40%;
       height: 100%;
       z-index: 1;


       @media only screen and (max-width: 1200px) {
         width: 90%
         
         ;
       }
    }

 

`

export default HomeBot