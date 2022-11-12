import React from 'react'
import styled from 'styled-components';

function Sponsor() {
  return (
    <SponsorStyled>
      <hr/><br/><br/>
      <span className='Small'>For queries regarding sponsorship, contact: Pawan Mishra (9911659812)</span>
      
      <br/><br/></SponsorStyled>
      
  )
}

const SponsorStyled = styled.div`
background: linear-gradient(130deg,#000428,#004e92 50%,#000428);

  .Sub{
    font-size:200%;
  }
  .Plt{
    font-size: 200%;
    background: linear-gradient(120deg, #C3C3C3, #C3C3C3);
    background-clip: text;
    display: inline-block;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  .Gld{
    font-size: 200%;
    background: linear-gradient(120deg, #DBA514, #E0AA3E);
    background-clip: text;
    display: inline-block;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  .gradient-cards-con{
    margin-left:10%;
    margin-right:10%;
    display: flex;
    margin-left: 35%;
    margin-right: 35%;
    width: 30%;
    grid-gap: 2rem;
    
    
}

  .gradient-cards-con-plat{
    margin-left:10%;
    margin-right:10%;
    display: flex;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 2rem;
    
    
}

.gradient-cards-con-gold{
  margin-left:10%;
  margin-right:10%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  
  
}

.gradient-cards-con-sil{
  margin-left:10%;
  margin-right:10%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  grid-gap: 2rem;
  
  
}
@media screen and (max-width: 1200px) {
  .Small{
      font-size: 23px !important;
  }


`;
export default Sponsor;