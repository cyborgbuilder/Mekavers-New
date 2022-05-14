import React from 'react'
import styled from 'styled-components'
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Community() {
  return (
    <Container>
        <h1>Join Our Community Now</h1>
        <p>YooGoo Just Want to Have Fun</p>
        <ButtonSection>
            <button><FaDiscord style={{fontSize: '25px', margin: '0 10px'}}/>Discord</button>
            <button><FaTwitter style={{fontSize: '25px', margin: '0 10px'}}/>Twitter</button>
            <button><FaTelegram style={{fontSize: '25px', margin: '0 10px'}}/>Telegram</button>
        </ButtonSection>
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    min-height: 90vh;
    background: linear-gradient(180deg, #0000004A 0%, #000000 100%), url('/community.webp');
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media only screen and (max-width: 1200px) {
        text-align: center;
      }

    h1{
        color: white;
        font-size: 70px;
        margin: 10px 0;

        @media only screen and (max-width: 1200px) {
            font-size: 50px;
          }
    }

    p{
        color: white;
        font-size: 25px;
        margin: 10px 0;

        @media only screen and (max-width: 1200px) {
            font-size: 19px;
          }
    }



`

const ButtonSection = styled.div`
    display: flex;
    margin-top: 50px;

    @media only screen and (max-width: 1200px) {
        flex-direction: column;
      }

    button{
        margin: 0 20px;
        border: none;
        outline: none;
        padding: 15px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        background-color: #ffc93c;
        color: white;

        @media only screen and (max-width: 1200px) {
            margin: 10px 0;
          }
    }

`
export default Community