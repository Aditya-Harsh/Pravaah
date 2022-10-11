import React from 'react'
import styled from 'styled-components';
import ig from '../Images/instagram.png'
import yt from '../Images/youtube.png'

function Contact() {
    return (
      <ContactStyled>
        <hr></hr>
        <br /><br /><span className='Big'><b>Connect Us</b></span><br /><br />
        <div className="icons">        
          <ul>
          <br/>
          <a  href='https://instagram.com/pravaah_abesec' target="_blank" rel="noreferrer"><img className='ig' src={ig} alt=""></img></a>
            <a href='https://youtube.com/channel/UCtzwj36l1KQIYMGiwdGRgWA' target="_blank" rel="noreferrer"><img className='ig' src={yt} alt=""></img></a>
          </ul>
          </div>
        <br />
        <b><span className='Small'>For any queries, Mail us at:</span><span className='title'> techfest22@abes.ac.in</span></b>
        <br /><br />
        </ContactStyled>
  )
}

const ContactStyled = styled.div`
background: linear-gradient(130deg,#000428,#004e92 50%,#000428);
.title{
  font-size: 200%;

}

img{

  width:6%;
  margin-right: 2%;
  margin-left: 2%;
  padding:10px;
  border-radius:10px;
  border: 2px solid rgba(255,255,255,.4);
  border-right: 2px solid rgba(255,255,255,.2);
  border-bottom: 2px solid rgba(255,255,255,.2);
  box-shadow: 0 5px 45px rgba(0,0,0,0.1)
  backdrop-filter: blur(2px)
  transition: .5s;
}

.ig:hover{
  transform: translateY(-20px)
}

`;

export default Contact;