import React from 'react'
import styled from 'styled-components';

function FlashCard({ name, image, role, email, contact}) {
  return (
      <FlashStyled>
        <div className="maincontainer">
              <div className="thecard">
                  <div className="thefront">
                      <h1>{ role}</h1>

                  </div>
                  <div className="theback">
                      <img className="pic" alt="" src={image}></img>
                      <br />
                      <span className="name">{name}</span>
                      <span className="details">
                      Email:{email}<br />
                        Contact: {contact}
                          </span>
                  </div>
              </div>
          </div>
        </FlashStyled>
  )
}

const FlashStyled = styled.div`
.maincontainer{
    position: relative;
    margin-top: 10px;
    width: 250px;
    height: 250px;
    background: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  
  }
  
  .thecard{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transform-style: preserve-3d;
    transition: all 0.8s ease;
  }
  
  .thecard:hover{
    transform: rotateY(180deg);
  }
  
   .thefront{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    backface-visibility: hidden;
    overflow: hidden;
    background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    color: #000;
    
  }
  
  .theback{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    backface-visibility: hidden;
    overflow: hidden;
    background: #03091F;
    color: #333;
    text-align: center;
    transform: rotateY(180deg);
  }
  
  .thefront h1{
    font-family: 'zilla slab', sans-serif;
    padding: 45% 8% 0% 10%;
    
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    color:white;
  }
  .pic{
    margin-top:5%;
    min-width:50%;
    max-width:50%;
    border-radius:5px;
  }
  .name{
    font-size: 100%;
    background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    background-clip: text;
    text-align: center;
    display: inline-block;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
.details{
    font-size: 80%;
    text-align: left;
    background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    background-clip: text;
    display: inline-block;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
`;

export default FlashCard;