import React from 'react'
import styled from 'styled-components';

export default function Registration() {

  return (
    <RegStyled>
      <hr />
      <br /><br /><span className='Big'><b>Registration Links</b></span><br /><br /><br /><br />
      <div align="center">
      <span className="primary-btn options" ><a href="https://rzp.io/l/q2ByJgW" target="blank">ABESEC Students</a></span>
      <span className="primary-btn options"><a href="https://rzp.io/l/kTchK8fhs" target="blank">Others</a></span>
      </div>
      <br /><br /><br />
      <h1 className='points'>Points to be noted: </h1><br/>
      <ol align="left" type="1">
        <li>1. Registration fees for ABES Engineering College Students is ₹500 per student.</li>
        <li>2. Registration fees for others is ₹600 per student.</li>
        <li>3. It is mandatory to bring your collge ID card in fest.</li>
        <li>4. Entry to fest will be allowed only after successful verification of participant.</li>
        <li>5. The fest pass will give you free event coupons worth ₹200. If you want to participate
          in more events, then the coupon for that can be collected at the registration
          counter.</li>
        
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
    text-align: left;
 }
  .points{
    align:left;
    font-size: 200%;
    margin-right:60%;  
  }
  ol{
    padding-left: 0%;
  }
  .options{
    margin-left: 0%;
    margin-right: 5%;
    justify-content: center;
    grid-gap: 2rem;
  }
  @media screen and (max-width: 1000px) {
    .btns{
        margin-top: 10%;
        display: block;
    }
    .options{
      width: 70%;
      display: block;
      margin-right: 0%;
      justify-content: center;
      grid-gap: 2rem;
      margin-top: 5%;
    }
    li {
      font-size: 70%;
      margin-left: 5%;
      padding-left: 0%;
      margin-right:2%;
   }
   .points{
      align:left;
      font-size: 100%; 
      margin-right: 0%;
    }
  }
`;