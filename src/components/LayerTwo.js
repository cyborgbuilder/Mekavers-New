import React from 'react'
import VideoPage from './VideoPage'
import styled from 'styled-components'
import Blank from './Blank'
import Detail from './Detail'
import Community from './Community'
import Opensea from './Opensea'
import Roadmaps from './Roadmaps'
import Slider from './Slider'
import Footer from './Footer'

function LayerTwo() {
  return (
     <Container>
    <Blank />
    <VideoPage />
    <Detail />
    <Opensea />
    <Roadmaps />
    <Slider />
    <Community />
    <Footer />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  z-index: 1000;

`
export default LayerTwo