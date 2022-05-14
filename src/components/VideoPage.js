import React from 'react'
import styled from 'styled-components'
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";



function VideoPage() {
  return (
    <Container>
      <img src='./images/frames2.png' />

      <SocialIcons>
<FaDiscord style={{color: 'white', margin: '5px 0'}}/>
   <FaTwitter style={{color: 'white', margin: '5px 0'}} />
   <FaPinterest style={{color: 'white', margin: '5px 0'}}/>
   <FaTelegram style={{color: 'white', margin: '5px 0'}}/>
   <FaFacebook style={{color: 'white', margin: '5px 0'}}/>
 </SocialIcons>

 <SnoopBot>
          <BotContent>
          <a href=''><p>Claim Your Mekabots Now</p></a>
          </BotContent>
        
          <BotImage>
          <a href=''><img src='./images/bot_image.jpg' /></a>
          </BotImage>

        </SnoopBot>



    </Container>


  )
}

const Container = styled.div`
    width: 100%;
    height: 90vh;
    background: black;
    z-index: 1000;
    display: flex;
    justify-content: center;

    img{
      width: 50%;

      @media only screen and (max-width: 1200px) {
        width: 90%;
      }
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
    width: 320px;
    height: 100px;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 35px;
    right: 40px;

    @media only screen and (max-width: 1200px) {
      display: none;
    }

    a:hover{
      cursor: pointer;
      
    }
    a{
      text-decoration: none;
    }

 

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


export default VideoPage