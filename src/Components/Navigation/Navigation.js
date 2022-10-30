import React from 'react'
import styled from 'styled-components';
import logo from '../Images/logo.png'
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <NavigationStyle>
          <div className='logo'>
              
              <NavLink to="/"><img src={logo} alt='Cannot load logo' /></NavLink>
          </div>
          
          <ul className="nav-items">
              <li><NavLink to="/"><b>Home</b></NavLink></li>
              <li><NavLink to="/Registration"><b>Registration</b></NavLink></li>
              <li><NavLink to="/Events"><b>Events</b></NavLink></li>
              <li><NavLink to="/Sponsor"><b>Sponsors</b></NavLink></li>
              <li><NavLink to="/OrganizingTeam"><b>Organizing Team</b></NavLink></li>
              <li><NavLink to="/About"><b>About Us</b></NavLink></li>
              <li><div className="primary-btn"><NavLink to="/Contact"><b>Get Connected</b></NavLink></div></li>
          </ul>
          
    </NavigationStyle>
  )
}

const NavigationStyle = styled.nav`
    min-height: 10vh;
    display: flex;
    
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(130deg,#000428,#004e92 50%,#000428);
    .nav-items{
        display: flex;
        align-items: center;
        li{
            margin: 0 1rem;
        }
        .primary-btn{
            margin-left: 1rem;
            background-color:rgba(57, 95, 246, 0.6);
            padding: .6rem 1.3rem;
            border-radius: 70px;
            cursor: pointer;
            transition: all .4s ease-in-out;
            &:hover{
                background: linear-gradient(130deg,#eb3fa9,#395ff6 50%,#eb3fa9);
            }
        }
    }
    .logo{
        img{
            margin-left: 5vh;
            margin-top: 1vh;
            width: 12vh;
        }
    }
`;

export default Navigation;