import React from 'react'
import styled from 'styled-components';
import EventGradientCards from '../GradientCards/EventGradientCards';
import Talentrove from '../Images/Event Logos/TC logo.png'
import Nexus from '../Images/Event Logos/SuperHacks.jpg'
import IDEA from '../Images/Event Logos/IDEA.jpg'
import KKRT from '../Images/Event Logos/BOB.png'
import ESMT from '../Images/Event Logos/ESMT.png'
import STN from '../Images/Event Logos/StarNight.png'
import JYW from '../Images/Event Logos/JYW.png'
import RSC from '../Images/Event Logos/RSC.jpg'
import ABS from '../Images/Event Logos/ABS.png'
import REQ from '../Images/Event Logos/Requiza.png'
import TT from '../Images/Event Logos/TT.png'
import MPD from '../Images/Event Logos/MPD.jpg'
import EPD from '../Images/Event Logos/EPD.jpg'
import CRU from '../Images/Event Logos/CREATIVEU.jpg'
import TVN from '../Images/Event Logos/Technovation.jpg'
import DNC from '../Images/Event Logos/Dance.png'

function Event() {
    return (
      <EventStyled>
        <hr/>
        <br /><br /><span className='Big'><b>Events</b></span><br />
        <br /><br />
        <div className="gradient-cards-con">
        <EventGradientCards image={Nexus} name={'Nexus - What the Hack!'} price={'₹30 '} days={' Day 1 + Day 2'} link={'/SuperHacks'} />
        <EventGradientCards image={RSC} name={'Robo Soccer'} price={'₹30 '} days={' Day 1'} link={'/Robo'} />
        <EventGradientCards image={Talentrove} name={'Gaming Odyssey'} price={'₹30  '} days={' Day 1'} link={'/GamingOdyssey'} />
        <EventGradientCards image={STN} name={'DJ Night'} price={'₹30 '} days={' Day 1'} link={'/StarNight'} />
        <EventGradientCards image={KKRT} name={'Degrees Of Sound'} price={'₹30 '} days={' Day 1'} link={'/TheMelodyBooms'} />
        <EventGradientCards image={IDEA} name={'AICTE Idea Lab Challenge'} price={'₹30 '} days={' Day 1'} link={'/AICTE'} />
        <EventGradientCards image={JYW} name={'Junkyard War'} price={'₹30 '} days={' Day 1'} link={'/Junkyard'} />
        <EventGradientCards image={ABS} name={'The Idea Pitch'} price={'₹30  '} days={' Day 1'} link={'/Pitch'} />
        <EventGradientCards image={ESMT} name={'E-Summit'} price={'₹30  '} days={' Day 1'} link={'/Esummit'} />
        <EventGradientCards image={REQ} name={'Circuitron'} price={'₹30  '} days={' Day 1'} link={'/Circuitron'} />
        <EventGradientCards image={EPD} name={'Digital Product Design (Electronics)'} price={'₹30  '} days={' Day 1'} link={'/DPDE'} />
        <EventGradientCards image={MPD} name={'Digital Product Design (Mechanical)'} price={'₹30  '} days={' Day 1'} link={'/DPDM'} />
        <EventGradientCards image={TT} name={'Achievers Talk'} price={'₹30 '} days={' Day 1'} link={'/TechTalk'} />
        <EventGradientCards image={TVN} name={'Coding Fued'} price={'₹30 '} days={' Day 1'} link={'/ARVR'} />
          <EventGradientCards image={CRU} name={'VR Gaming'} price={'₹30 '} days={' Day 1'} link={'/ARGaming'} />
          <EventGradientCards image={DNC} name={'Dance Competition'} price={'₹30 '} days={' Day 1'} link={'/ARGaming'} />
         <br /><br />
        </div>
        <br /><br />
    </EventStyled>
  )
}

const EventStyled = styled.div`
background: linear-gradient(130deg,#000428,#004e92 50%,#000428);

  .Sub{
    font-size:200%;
  }
  .gradient-cards-con{
    margin-left:10%;
    margin-right:10%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;   
}
`;

export default Event;