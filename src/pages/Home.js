import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../GlobalStyle'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const enter = () => {
    navigate('/Gallery')
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <div className="content">
          <div className="gallery">
            <div className="behind-text-fill">Welcome to my gallery</div>
            <div className="enterBtn" onClick={enter}>
              Click to enter...
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  box-sizing: border-box;

  .content {
    display: flex;
    height: 100vh;
    width: 100vw;
    position: relative;
  }

  .gallery {
    display: flex;
    height: 100%;
    position: relative;
    align-items: center;
    background-color: black;
    flex-basis: 75%;
  }

  .behind-text-fill {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 12em;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    font-weight: 500;

    letter-spacing: 50px;

    color: lightblue;
  }

  .footer {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-basis: 25%;
  }

  .enterBtn {
    width: 200px;
    height: 40px;

    font-size: 20px;
    color: antiquewhite;

    position: absolute;
    bottom: 100px;
    right: 200px;
  }
`
