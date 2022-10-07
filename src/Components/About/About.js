import React from 'react'
import styled from 'styled-components';

function About() {
    return (
      <AboutStyled>
        <hr></hr>
        <br /><br /><span className='Big'><b>About Us</b></span><br/><br/>
        <p align='left'>The annual Tech Fest -Tech प्रवाह is not just a fest,
          it's an expression of euphoria. It serves the purpose of providing
          a global platform for students to learn,innovate and broaden
          their mindsets,and nobody could disagree that the best approach
          of learning is through fun filled activities and events.<br /><br />
          We invite you to an opportunity to think Big Thoughts,
          to Create the life you Want with Technology.<br />
          Join us to celebrate this Wonderful time Of the year and Explore your Future With us..
        <br/>
          <br />
          
        </p>
        We’ll make you laugh, we’ll make you cry, and we’ll
        give you memories that last a lifetime.
        <br/><br/><br/>
      </AboutStyled>
  )
}

const AboutStyled = styled.div`
background: linear-gradient(130deg,#000428,#004e92 50%,#000428);
  p{
    margin-left: 10%;
    margin-right: 10%;
  }
`;

export default About;