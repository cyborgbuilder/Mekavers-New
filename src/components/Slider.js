import React, { useRef, useState } from 'react'
import styled from 'styled-components'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
function Slider() {
  return (
    <Container>
        <Wrap>
            <ContainBox>
                <h2>WHO ARE WE?</h2>
                <h1>THE TEAM</h1>
            </ContainBox>

            <SliderBox>
            <Swiper
        pagination={{
          type: "progressbar",
        }}
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src='https://lh5.googleusercontent.com/_xkoSBNNS_ucispELRSiICxumi6pYrDBDG4laMKCOmrCGpEP8lMNJu_bH4CZRawTLQ7uq8Qx3IhcIudZOa1-g_t2YL-cBc4bFlpu96HuL8KNX8DOtdz5dmc8VtlE_2LGsa5mSUAN=s0' />
            <h2>Team Member 1</h2>
            <p>Director</p>
            </SwiperSlide>
        <SwiperSlide>
        <img src='https://miro.medium.com/max/1400/1*6J1qik6UcJNwm-545p039A.jpeg' />
        <h2>Team Member 2</h2>
        <p>Developer</p>    
            </SwiperSlide>
        <SwiperSlide>
        <img src='https://watcher.guru/news/wp-content/uploads/2021/10/mekaverse-nft.jpg' />
        <h2>Team Member 3</h2>
        <p>Artist</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://cdn.bewaremag.com/wp-content/uploads/2021/10/meka-pastel.jpeg' />
        <h2>Team Member 4</h2>
        <p>Artist</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://mintspace-media.fra1.digitaloceanspaces.com/wp-content/uploads/2021/11/20200419/FCOL3zQVEAImhid.png' />
        <h2>Team Member 5</h2>
        <p>Artist</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://external-preview.redd.it/mED6UGLsthQCe6WBPXG6Kcw8zx-F7tbdLfpTLzd7Cm8.png?width=640&crop=smart&format=pjpg&auto=webp&s=bb1e96da634c6373a6a945283196070f622d7e46' />
        <h2>Team Member 6</h2>
        <p>Artist</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://watcher.guru/news/wp-content/uploads/2021/10/mekaverse.jpeg.webp' />
        <h2>Team Member 7</h2>
        <p>Developer</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://ph-files.imgix.net/754b4b27-f518-48b5-b733-200dcf819f9c.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&fit=max' />
        <h2>Team Member 8</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://lh5.googleusercontent.com/_xkoSBNNS_ucispELRSiICxumi6pYrDBDG4laMKCOmrCGpEP8lMNJu_bH4CZRawTLQ7uq8Qx3IhcIudZOa1-g_t2YL-cBc4bFlpu96HuL8KNX8DOtdz5dmc8VtlE_2LGsa5mSUAN=s0' />
        <h2>Team Member 8</h2>
        </SwiperSlide>
      </Swiper>
            </SliderBox>
        </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background: black;



`

const Wrap = styled.div`
    width: 90%;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 1200px) {
        flex-direction: column;
      }



`

const ContainBox = styled.div`
    width: 40%;
    color: white;

    @media only screen and (max-width: 1200px) {
        text-align: center;
        width: 100%;
      }

    h1{
        font-size: 90px;

        @media only screen and (max-width: 1200px) {
          font-size: 60px;
        }
    }
    h2{
        color: blue;

        @media only screen and (max-width: 1200px) {
          font-size: 16px;
        }
    }

`

const SliderBox = styled.div`
    width: 60%;
    height: 70vh;
    border-radius: 15px;

    @media only screen and (max-width: 1200px) {
        width: 100%;
      }

`
export default Slider