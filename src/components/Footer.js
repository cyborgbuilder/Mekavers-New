import React from 'react'
import styled from 'styled-components'
import ScrollUpButton from "react-scroll-up-button";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { BsArrowBarUp } from "react-icons/bs";

function Footer() {
  return (
    <Container>

    <UpButton>
        <p>Copyright @ 2022 YooGoo. All Rights Reserved</p>    
   </UpButton>


   <SocialIcons>
    <FaDiscord style={{color: 'white', margin: '7px '}}/>
   <FaTwitter style={{color: 'white', margin: '7px '}} />
   <FaPinterest style={{color: 'white', margin: '7px '}}/>
   <FaTelegram style={{color: 'white', margin: '7px'}}/>
   <FaFacebook style={{color: 'white', margin: '7px '}}/>

   <ScrollUpButton><BsArrowBarUp style={{color: 'white', margin: '0 20px '}} /></ScrollUpButton>

   
 </SocialIcons>
  
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    height: 180px;
    background: black;
    position: relative;
    display: flex;
    justify-content: center;

`

const SocialIcons = styled.div`
    position: absolute;
    bottom: 0;
    right: 20px;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    font-size: 45px;

    @media only screen and (max-width: 1200px) {
      font-size: 40px;
      display: none;
    }
`

const UpButton = styled.div`
position: absolute;
bottom: 20px;
left: 20px;
font-size: 15px;
color: white;

`


export default Footer