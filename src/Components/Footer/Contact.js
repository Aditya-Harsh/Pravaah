import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../../Layout/Layout'
import map from '../Images/map.png'
import logo from '../Images/Contactlogo.png'
import clogo from '../Images/clogo.png'

function Contact() {
    return (
        <ContactSectionStyled>
            <SectionStyled>
                <div className="contact-info">
                    
                    <h3 className="contact-title">
                        Contact Us
                    </h3>
                    <p z-index='2'><a href="https://www.abes.ac.in/" target="_blank" rel="noreferrer">ABES Engineering College</a></p>
                    <p>19th KM Stone, NH-09, Ghaziabad, Uttar Pradesh 201009</p>
                    <p>techfest22@abes.ac.in</p>
                </div>
                <div className="r-image">
                    <img src={logo} alt="" />
                </div>
                <div className="bg-image">
                    <img src={map} alt="" />
                </div>
                <div className="l-image">
                    <img src={clogo} alt="" />
                </div>
            </SectionStyled>
        </ContactSectionStyled>
    )
}

const ContactSectionStyled = styled.div`
    background-color: #020C31;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 0;
    position: relative;
    z-index: 1;
    p{
        opacity: 0.5;
    }
    .bg-image{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        img{
            width: 80%;
            opacity: 0.08;
        }
    }
    .r-image{
        position: absolute;
        left: 14%;
        top: 48%;
        transform: translate(-50%, -50%);
        
        img{
            width: 60%;
            opacity: 1;
        }
    }
    .l-image{
        position: absolute;
        left: 80%;
        top: 45%;
        transform: translate(-50%, -50%);
        img{
            width: 120%;
            opacity: 1;
        }
    }
    .contact-title{
        position: relative;
        padding-bottom: 1rem;
        margin-bottom: 2rem;
        font-weight: 500;
        font-size: 1.5rem;
        &::before{
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 4rem;
            height: 2px;
            background-color: #eb3fa9;
        }
    }
`;

export default Contact;
