import React from 'react'
import video from '../Videos/mainVideo.mp4'
import circles from '../Images/circles.svg'
import styled from 'styled-components'
import MainContent from '../MainContent/MainContent'
import { InnerLayout } from '../../Layout/Layout'

function MainArea() {
  return (
      <MainStyle>
          <video src={video} muted playsInline autoPlay loop></video>
          {<img src={circles} className="overlay" alt='Cannot load this item'/>}
          <InnerLayout>
          
              <MainContent/>
          </InnerLayout>
          
      </MainStyle>
      
  )
}

const MainStyle = styled.div`
    width: 100%;
    height: 95vh;
    position: relative;
    overflow: hidden;
    .overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        right: -400px;
        top: -300px;
        
    }
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.7;
        top: -300px;
    }
`;

export default MainArea;