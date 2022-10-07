import React from 'react'
import styled from 'styled-components';
import Buttons from '../Buttons/Buttons';

export default function Registration() {

  return (
    <RegStyled>
      <hr />
      <br /><br /><span className='Big'><b>Registration Links</b></span><br /><br /><br /><br />
      <span className="options">
      <div className="primary-btn"><a href="https://rzp.io/l/X3068n15mR" target="blank"><Buttons name="For ABES Engineering College Students"></Buttons></a></div>
      <div className="primary-btn"><a href="https://rzp.io/l/X3068n15mR" target="blank"><Buttons name="For Other College Students"></Buttons></a></div>
      </span>
      <br /><br /><br />
      <h1 className='points'>Points to be noted: </h1><br/>
      <ol align="left">
        <li>1. Registration fees for ABES Engineering College Students is ₹800 per student.</li>
        <li>2. Registration fees for other college students is ₹1000 per student.</li>
        <li>3. It is mandatory to bring your collge ID card in fest.</li>
        <li>4. Entry to fest will be allowed only after successful verification of participant.</li>
        <li>5. The fest pass will give you free entry to 3 events. If you want to participate
          in more events, then the fees for that event will be collected at the registration
          counter of that event.</li>
        
      </ol>
      <br /><br />
      </RegStyled>
  )
}

const RegStyled = styled.div`
  background: linear-gradient(130deg,#000428,#004e92 50%,#000428);
  li {
    font-size: 100%;
    margin-left:7.2%;
    list-style-type: circle;
    display: flex;
 }
  .points{
    align:left;
    font-size: 200%;
    margin-right:60%;
    
  }
  .options{
    display: flex;
    justify-content: center;
    grid-gap: 2rem;
  }
`;