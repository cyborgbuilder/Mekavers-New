import React from 'react'
import styled from 'styled-components'
function HomeScreneTwo() {
  return (
    <Container>
        <TextSection>
        <h1>WELCOME!<br></br> MEKAVERSE <br></br>UNIVERSE</h1>
        </TextSection>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #bc1010;
    display: flex;
    align-items: center;
    justify-content: center;


    


`

const TextSection = styled.div`
z-index: 1;
h1{
  font-size: 130px;
  color: white;
  text-decoration: underline;
  text-align: center;

  @media only screen and (max-width: 1200px) {
    font-size: 66px;
  }
}

`
export default HomeScreneTwo