import React from 'react'
import styled from 'styled-components';
import Buttons from '../Buttons/Buttons';
import { NavLink } from 'react-router-dom';

function MainContent() {
    return (
    
      <MainContentStyle>
        <div className="content">
          <div className="left">
          <h1 align='left'><span className='GradientText'>Welcome to Future</span> </h1>
            <h2 align='left'>
            The Technical fest - 'Tech प्रवाह' is being organised with the sole purpose to showcase the flow of technology, ideas and innovation in current youth. This fest would not only help the students to compete but also would help them to learn new things and innovate new ideas through various activities for further development .
            </h2>
            <h1 align='left'>
              <span className='GradientText'>Get Ready For Tech प्रवाह 2022 !!!!
              </span> </h1>
            <h2 align='left'>
              
              Day 1: <span className='GradientText'>18th November, 2022</span>
                <br />Day 2: <span className='GradientText'>19th November, 2022</span>
                    </h2>
            <div className="btns-con">
              
            <NavLink to="/Events"><Buttons name={'Discover Events'} /></NavLink>
                        <NavLink to="/Registration"><Buttons name={'Register Now!!!'} /></NavLink>
                    </div>
          </div>  
          
        </div>
    </MainContentStyle>
  )
}

const MainContentStyle = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 80%;
    height: 100%;
    transform: translateX(-50%);
    .content{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 100%;
      width: 100%;
      left: -10%;
      .left{
          position: absolute;
          left: -10%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          h1{
              padding: 1.8rem 0;
          }
          .btns-con{
              margin-top: 0.75rem;
          }
      }

      
  }
  h2{
    font-family:Nanum;
    line-height: 150%;
  }
`;

export default MainContent;