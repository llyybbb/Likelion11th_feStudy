import React, { useState } from 'react'
import GlobalStyle from '../GlobalStyle'
import styled from 'styled-components'
import { CgChevronDoubleLeft, CgChevronDoubleRight } from 'react-icons/cg'
import imgData from '../images/imageData'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const renderSlider = imgData.map((image) => (
  <div
    className="imgBox"
    key={image.lable}
    style={{ backgroundColor: 'white' }}
  >
    <img src={image.value} alt={image.lable} />
  </div>
))

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState()

  function HandleChange(index) {
    setCurrentIndex(index)
  }

  return (
    <>
      <GlobalStyle />
      <Content>
        <CgChevronDoubleLeft style={{ fontSize: '50px', color: 'white' }} />

        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          selectedItem={imgData[currentIndex]}
          onChange={HandleChange}
          width={'100vw'}
          stopOnHover={true}
        >
          {renderSlider}
        </Carousel>

        <CgChevronDoubleRight style={{ fontSize: '50px', color: 'white' }} />
      </Content>
    </>
  )
}
const Content = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;

  align-items: center;
  justify-content: center;

  background-color: black;
  overflow: hidden;

  .imgBox {
    box-sizing: content-box;
    display: flex;
    position: relative;
    right: 59%;
    width: 400px;
    height: 700px;

    background-color: azure;
    overflow: hidden;
    justify-content: center;
  }
`
