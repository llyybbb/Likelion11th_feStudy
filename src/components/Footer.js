import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../GlobalStyle'
import MyPhoto from '../images/myPHoto.png'

export default function Footer() {
  return (
    <>
      <GlobalStyle />
      <Content>
        <div className="MyPhoto">
          <img src={MyPhoto} style={{ width: '400px', height: '400px' }}></img>
        </div>
        <div className="myInfo">
          <div className="name">YEHBIN LEE</div>
          <div className="phone">010-0000-0000</div>
          <div className="sns">instagram x_________xb</div>
          <div className="email">email yb9766@naver.com</div>
        </div>
      </Content>
    </>
  )
}

const Content = styled.div`
  .MyPhoto {
    width: 450px;
    height: 450px;
    background-size: cover;
    background-color: black;
    border-radius: 70%;

    align-items: center;
    justify-content: center;
  }

  .myInfo {
    font-size: 30px;
  }
`
