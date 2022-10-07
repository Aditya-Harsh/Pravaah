import React from 'react'
import styled from 'styled-components';

function SponsorGeneral({ image, name}) {
  return (
      <GeneralStyled>
                      <div className="g-card">
                <div className="inner-content">
                    <div className="image">
                        <img src={image} alt="" />
                        <div className="name">
                            <p className='nameContent'>{name}</p>
                        </div>
                    </div>
                </div>
            </div>
    </GeneralStyled>
  )
}


const GeneralStyled = styled.div`
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
            bottom: -3%;
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
}

`;

export default SponsorGeneral;