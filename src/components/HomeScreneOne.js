import React from 'react'
import styled from 'styled-components'
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";




function HomeScreneOne() {
  return (
    <Container>
        <TextSection>
        <h1>MEKABOTS</h1>
        </TextSection>
        {/* <SocialIcons>
        <FaDiscord style={{color: 'white', margin: '5px 0'}}/>
          <FaTwitter style={{color: 'white', margin: '5px 0'}} />
          <FaPinterest style={{color: 'white', margin: '5px 0'}}/>
          <FaTelegram style={{color: 'white', margin: '5px 0'}}/>
          <FaFacebook style={{color: 'white', margin: '5px 0'}}/>
        </SocialIcons> */}

        {/* <SnoopBot>
          <BotContent>
          <p>Claim Your Mekabots Now</p>
          </BotContent>
          <BotImage>
          <img src='./images/bot_image.jpg' />
          </BotImage>
          
        </SnoopBot> */}
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
    overflow: hidden;

    


`
const TextSection = styled.div`

h1{
  font-size: 250px;
  color: white;

  @media only screen and (max-width: 1200px) {
    font-size: 70px;
    text-decoration: underline;
  }

}

@media only screen and (max-width: 1200px) {
  z-index: 1;
}
`
const SocialIcons = styled.div`
    position: fixed;
    top: 30%;
    right: 1%;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    font-size: 45px;

    @media only screen and (max-width: 1200px) {
      font-size: 30px;
    }
`


const SnoopBot = styled.div`
    width: 300px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 50px;
    right: 50px;

 

`

const BotContent = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
p{
  color: white;
  font-size: 14px;
  background: rgba(234, 240, 246, 0.3);
  padding: 14px;
  border-radius: 15px;
}

`

const BotImage = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 50%;


  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

`
export default HomeScreneOne