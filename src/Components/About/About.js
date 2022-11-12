import React from 'react'
import styled from 'styled-components';

function About() {
    return (
      <AboutStyled>
        <hr></hr>
        <br /><br /><span className='Big'><b>About Us</b></span><br/><br/>
        <p align='justify'>
          Tech प्रवाह is the annual technical event of ABES engineering College, Ghaziabad.
          This fest is organized to provide the upcoming engineering enthusiast with a better
          understanding of what technology is and how it has impacted over the years.
          The fest will be a platform that would provide them with all the understanding
          through fun activities and encouraging workshops.
          Tech प्रवाह is here to give you an opportunity to peek into the flowing thoughts
          and ideas being bought into the technical field.
        <br/>
          <br />
          
        </p>
        Join us on upcoming days to explore them with us.
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
  @media screen and (max-width: 1000px) {
    .Big {
        font-size: 30px;
    }
    p {
        font-size: 18px;
    }
  }
`;

export default About;