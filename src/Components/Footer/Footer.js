import React from 'react'
import styled from 'styled-components';
import Contact from './Contact';
function Footer() {
  return (
      <FooterStyled>
          <Contact/>
          <footer>
          
          <p>Made with ❤ by <a href="https://github.com/Aditya-Harsh" target="_blank" rel="noreferrer">Aditya_Harsh</a></p>
        </footer>
    </FooterStyled>
  )
}

const FooterStyled = styled.div`
footer{
    position:bottom;

    font-family: Hahmlet;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #020A27;
    padding: 2rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    p{
        text-align: center;
        opacity: 0.7;
    }
}
`;

export default Footer;