import React from 'react'
import styled from 'styled-components'
function Detail() {
  return (
    <Container>
       <Wrap>
       <Left>
            <h2>What's Mekaverse....</h2>
        </Left>
        <Right>
            <h1>In the distant future, drivers fight in a world divided into 4 Factions. Originals Meka, Mirage, F9, and Gadians are the Titans who rule this planet.</h1>
            <br></br>
            <br></br>
            <h1><span>Which Faction are you going to join?</span></h1>
        </Right>
       </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    background: black;
    display: flex;
    justify-content: center;

`

const Wrap = styled.div`
    width: 70%;
    display: flex;
    padding: 50px 0;

    @media only screen and (max-width: 1200px) {
        width: 100%;
        text-align: left;
        flex-direction: column;
        padding: 0;
        padding: 30px;
        padding-bottom: 50px;
      }

`

const Left = styled.div`
    width: 40%;
    padding-top: 20px;

    @media only screen and (max-width: 1200px) {
        width: 100%;
        margin-bottom: 40px;
      }

    h2{
        color: #9faac0;

        @media only screen and (max-width: 1200px) {
          font-size: 20px;
        }
    }


`

const Right = styled.div`
    width: 60%;

    @media only screen and (max-width: 1200px) {
        width: 100%;
      }

    h1{
        color: white;
        font-size: 58px;

        @media only screen and (max-width: 1200px) {
            font-size: 32px;
          }
    }

    span{
        color: #9faac0;
        
    }

`

export default Detail