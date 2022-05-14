import React from 'react'
import styled from 'styled-components'

function Opensea() {
  return (
    <Container>
      <Left></Left>
      <Right>
        <h1><span>THE<br></br> MEKAVERSE <br></br></span> COLLECTION</h1>
        <button>View On Opensea</button>
      </Right>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 90vh;
    background: linear-gradient(180deg, #0000004A 0%, #000000 200%), url('/back.jpg');;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;


`
const Left = styled.div`
    width: 50%;
    height: 100%;

    @media only screen and (max-width: 1200px) {
      display: none;
    }


`

const Right = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 1200px) {
      width: 100%;
      align-items: center;
      text-align: center;
    }
    
    span{
      color: rgba(234, 240, 246, 0.5);
      text-decoration: none;
    }

    h1{
      color: white;
      text-decoration: none;
      font-size: 90px;

      @media only screen and (max-width: 1200px) {
        font-size: 58px;
      }
    }

    button{
      border: none;
      outline: none;
      width: 150px;
      padding: 10px;
      margin: 30px 0;
      background: rgba(234, 240, 246, 0.1);
      color: white;

      &:hover{
        color: black;
        cursor: pointer;
        background: white;
      }
    }

`
export default Opensea