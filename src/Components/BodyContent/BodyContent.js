import React from 'react'
import styled from 'styled-components'
import About from '../About/About';
import Event from '../Events/Events';
import Sponsor from '../Sponsor/Sponsors'
import OrganizingTeam from '../Organizing Team/OrganizingTeam';
import EventPartners from '../Events/EventPartners';

function BodyContent() {
  return (
    <BodyContentStyled>
      <About />
      <Event />
      <OrganizingTeam/>
      <EventPartners/>  
      <Sponsor />
    </BodyContentStyled>
  )
}

const BodyContentStyled = styled.div`
    
`;

export default BodyContent;