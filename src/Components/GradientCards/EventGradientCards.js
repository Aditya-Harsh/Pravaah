import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


function EventGradientCards({ image, name, price, days, link }) {
  return (
      <EventGStyled>
            <div className="g-card">
                <div className="inner-content">
                    <div className="image">
                        <img src={image} alt="" />
                        <div className="name">
                            <p className='nameContent'>{name}</p>
                        </div>
                    </div>
                    <div className="card-content">
                        <p>Registration Fees : <span className="price">{price}</span></p>
                        <p>Dates : &nbsp; <span className="price">{days} </span> </p>
                        <div className="button">
                          <NavLink to={link}><b>Details</b></NavLink>
                        </div>
                    </div>
                </div>
            </div>
          
    </EventGStyled>
  )
}

const EventGStyled = styled.div`
border-radius: 20px;
font-size: 1rem;
transition: all 1s ease-in-out;
background: linear-gradient(130deg,#eb3fa9,#395ff6 50%,#eb3fa9);
animation: colors 3s infinite ease-in-out;
@keyframes colors {
    0%{
        background: linear-gradient(130deg,#eb3fa9,#395ff6 50%,#eb3fa9);
    }
    50%{
        background: linear-gradient(90deg, #7F41DB 0%, #022894 100%);
    }
    70%{
        background: linear-gradient(130deg,#022894  0%, #7F41DB 100%);
    }
    100%{
        background: linear-gradient(130deg,#eb3fa9,#395ff6 50%,#eb3fa9);
    }
}
.g-card{
    margin: .2rem;
    .inner-content{
        background-color: #091026;
        padding: .8rem;
        border-radius: 20px;
    }
    .image{
        width: 100%;
        position: relative;
        img:first-child{
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
        .name{
            position: absolute;
            left: 50%;
            right:50%;
            bottom: -5%;
            background-color: #03091f;
            display: flex;
            transform: translateX(-50%);
            width: 90%;
            display:inline-block;
            padding: .1rem .2rem;
            border-radius: 70px;
            border: 1px solid rgba(255,255,255, 0.8);
            .nameContent{
                margin-left:auto;
                margin-right:auto;
            }
            
        }
    }


    .card-content{
        padding-top: 3rem;
        
        .price{
            color: #6BBE92;
        }

        .button{
            width: 100%;
            a{
                margin: .6rem 0;
                display: inline-block;
                width: 100%;
                text-align: center;
            }
            text-transform: uppercase;
            background: linear-gradient(130deg, #395FF6 , #EB3FA9);
            padding: 0rem 0rem;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            &:last-child{
                margin-left: 0rem;
            }
            &:hover{
                transition: all .4s ease-in-out;
                background: linear-gradient(120deg,  #EB3FA9, #395FF6);
            }
        }
    }
    
}



`;

export default EventGradientCards;