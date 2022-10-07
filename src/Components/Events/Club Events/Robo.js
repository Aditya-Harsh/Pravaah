import React from 'react'
import styled  from 'styled-components';
function Robo() {
  return (
      <RoboStyled>
          <hr />
          <br />
          <span className='Big'><b>Robo Soccer</b></span><br />
          <h3 align='left' className='content'><br /><br />
          It’s time to show your engineering skill to play by engineering a football match of Robots.
          </h3>
          <br /><br />
    </RoboStyled>
  )
}

const RoboStyled = styled.div`
background: linear-gradient(130deg,#000428,#004e92 50%,#000428);

.content{
    
    margin-left: 5%;
    margin-right: 5%;
    
}
`;

export default Robo