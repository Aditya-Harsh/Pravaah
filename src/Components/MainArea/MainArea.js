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
          <InnerLayout>
          
              <MainContent/>
          </InnerLayout>
          
      </MainStyle>
      
  )
}

const MainStyle = styled.div`
    height: 100vh;
    
    position: relative;
    overflow: hidden;
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.7;
    }
`;

export default MainArea;