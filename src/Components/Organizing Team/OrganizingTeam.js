import React from 'react'
import styled from 'styled-components';
import AdityaG from '../Images/Organising Team/Aditya Gupta.jpg'
import AyushT from '../Images/Organising Team/Ayush Ranjan Tripathi.jpg'
import AyushK from '../Images/Organising Team/Ayush Kumar.jpeg'
import ACM from '../Images/Organising Team/Achintya Mishra.jpg'
import AKS from '../Images/Organising Team/Aditya Kumar Singh.jpg'
import PM from '../Images/Organising Team/Pawan Mishra.jpg'
import ARS from '../Images/Organising Team/Arpit Raj Shukla.jpg'
import FlashCard from './FlashCard';
import { Container, Row, Col } from 'react-bootstrap';
import './OrganizingTeam.css'
function OrganizingTeam() {
    return (
      <OrgStyled>
        <br /><br /><div className='Big'><b>Organizing Team</b></div>
        <br /><br /><div className='Small '><b>Executive Team</b></div><br /><br /><hr></hr><br /><br /><br /><br /><br />
        
        <div></div>
        <Container>
        <Row>
          <Col lg = {12} md = {12} sm ={12} xs ={12}><FlashCard image={ ARS} role={'Lead Coordinator'} name={'Arpit Raj Shukla'} email={'arpit.19b311081@abes.ac.in'} contact={'8318862977'} />
</Col>
          <Col lg = {4} md = {6} sm ={12} xs ={12}><FlashCard image={ AyushT} role={'Co-Lead Coordinator'} name={'Ayush Ranjan Tripathi'} email={'ayush.19b111038@abes.ac.in'} contact={'+917755893754'} /></Col>
          <Col lg = {4} md = {6} sm ={12} xs ={12}><FlashCard image={ AdityaG} role={'Co-Lead Coordinator'} name={'Aditya Gupta'} email={'engineeraditya@pm.me'} contact={'+919169318989'} /></Col>
          <Col lg = {4} md = {6} sm ={12} xs ={12}><FlashCard image={ PM} role={'Co-Lead Coordinator'} name={'Pawan Kumar Mishra'} email={'pawan.19b111064@abes.ac.in'} contact={'+919911659812'} /></Col>      
          <Col lg = {4} md = {6} sm ={12} xs ={12}><FlashCard image={ AKS} role={'Treasurer'} name={'Aditya Kumar Singh'} email={'aditya.19b131152@abes.ac.in'} contact={'+919660677927'} /></Col>
          <Col lg = {4} md = {6} sm ={12} xs ={12}><FlashCard image={ ACM} role={'Assistant Treasurer'} name={'Achintya Mishra'} email={'achintya.19b311171@abes.ac.in'} contact={'+918077570629'} /></Col>
          <Col lg = {4} md = {6} sm ={12} xs ={12}><FlashCard image={ AyushK} role={'Technical Lead'} name={'Ayush Kumar'} email={'ayush.19b311071@abes.ac.in'} contact={'+919984219294'} /></Col>        
        </Row>
          <br/><br/><br/> 
          </Container> 
        
      </OrgStyled>
  )
}

const OrgStyled = styled.div`
background: linear-gradient(130deg,#000428,#004e92 50%,#000428);
.cards{
  display: flex;
  justify-content: center;
  grid-gap: 2rem;
}
`;

export default OrganizingTeam;