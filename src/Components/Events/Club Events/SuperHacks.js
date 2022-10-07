import React from 'react'
import styled from 'styled-components';

function SuperHacks() {
    return (
        <NexusStyled>
            <br /><br /><span className='Big'><b>Nexus - What the Hack!</b></span><br /><br />
            <h3 align='left' className='content'>
            As a part of the upcoming Tech Fest - Tech प्रवाह, the Elixir Community is conducting a 24-hour
            hackathon, Nexus. The sole purpose of organizing this hackathon is to provide participants a chance for hands-on learning,
                forming strong networks, and mentoring from those currently working in the field.<br/>
                <br/>Team Size: 2 - 4 Members<br/>
                Prize pool: Up to ₹ 1 lakh 🤩🤩<br />
                Venue: Aryabhatta block, ABES Engineering College<br />
                Registration Fees: ₹<br />
                <br />
                <a color='blue' href="https://elixir2020.web.app/" target={'blank'}>Click here for More details</a>
                <br /><br />
                For any queries regarding the event, contact:<br />
                1. Yash Grover, 📧 yash.20b0101062@abes.ac.in<br />
                2. Bhumika Arora, 📧 bhumika.20b0101197@abes.ac.in<br />
                3. Dewank Rastogi, 📧 dewank.20b1531011@abes.ac.in<br />
            </h3>
                    <br /><br />
        </NexusStyled>
  )
}

const NexusStyled = styled.div`
background: linear-gradient(130deg,#000428,#004e92 50%,#000428);

.content{
    
    margin-left: 5%;
    margin-right: 5%;
    
}
`;

export default SuperHacks;