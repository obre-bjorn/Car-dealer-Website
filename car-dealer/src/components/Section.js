import React from 'react';
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'



function Section({title, description,backgroundImg,leftBtnText, rightBtnText}) {

   
  return <Wrap bgImage = {backgroundImg}>
    
    <Fade bottom>
        <ItemText>
            <h1> {title} </h1>
            <p> {description} </p>
        </ItemText>
    </Fade>

    <Fade bottom>
        
      <Buttons>
        <ButtonGroup>
            <LeftButton>
                {leftBtnText}
            </LeftButton>
            {rightBtnText && 
                <RightButton>
                    {rightBtnText}
                </RightButton>
            }
            </ButtonGroup>
            <DownArrow src = 'images/down-arrow.png'/>
        </Buttons>
    </Fade>
  </Wrap>;
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    color: white;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    z-index: 3;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
   display: flex;
   margin-bottom: 30px;
   @media (max-width: 768px){
       flex-direction: column;
   }


`

const LeftButton = styled.div`
    height:40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(23,26,32,0.8);
    color: white;
    margin: 15px;
    border-radius: 30px;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;

`

const DownArrow = styled.img`
    height:40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;


`

const Buttons = styled.div`

`