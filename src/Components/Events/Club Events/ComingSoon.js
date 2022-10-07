import React from 'react'
import styled from 'styled-components';
import vid from './ComingSoon.mp4'
function ComingSoon() {
  return (
      <ComingStyled>
          <video src={vid} muted playsInline autoPlay loop/>
    </ComingStyled>
  )
}

const ComingStyled = styled.div`
background: linear-gradient(130deg,#000428,#004e92 50%,#000428);
video{
  width:100%;
}
`;

export default ComingSoon;