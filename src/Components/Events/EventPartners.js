import React from 'react'
import styled from 'styled-components';
import Talentrove from '../Images/Partner Logos/TVE.png'
import AICTE from '../Images/Partner Logos/idea_lab.png'
import KKRT from '../Images/Partner Logos/kalakrit.png'
import ECELL from '../Images/Partner Logos/Ecell.png'
import JYW from '../Images/Partner Logos/environ.jpg'
import CGB from '../Images/Partner Logos/Enigma.png'
import ABS from '../Images/Partner Logos/ABSLogo.png'
import REQ from '../Images/Partner Logos/Requiza.png'
import CRU from '../Images/Partner Logos/CREATIVEU.png'
import TVN from '../Images/Partner Logos/Technovation.jpg'
function EventPartners() {
  return (
    <PartnersStyled>
      <hr></hr>
      <br /><br /><span className='Big'><b>Event Partners</b></span><br /><br /><br />
      <div className='image'>
        <img src={Talentrove} alt="Talnetrove Club"></img>
        <img src={TVN} alt="Technovation Club"></img>
        <img src={ECELL} alt="E-Cell"></img>
        <img src={KKRT} alt="Kalakrit"></img>
        <img src={REQ} alt="Requiza"></img>
        <img src={CRU} alt="CreativeU"></img>
        <img src={JYW} alt="Environ"></img>
        <img src={AICTE} alt="AICTE"></img>
      </div>
      <br />
    </PartnersStyled>
  )
}

const PartnersStyled = styled.div`
background: linear-gradient(130deg,#000428,#004e92 50%,#000428);


.image{
  
  margin-left:10%;
  
display: grid;
grid-template-columns: repeat(auto-fill, minmax(23%, 1fr));
grid-gap: 2rem; 
}
img{
  width:40%;
  border-radius: 10px;
}
`;

export default EventPartners;