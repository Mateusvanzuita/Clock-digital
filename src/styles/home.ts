import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai"
import { BsSmartwatch, BsStopwatch } from "react-icons/bs"


export const ConteudoStyle = styled.div`
align-items: center;
padding: 25px;
border-radius: 3px;
margin: 60px 50px;
box-shadow: ${(props) => props.theme.boxShadow};
width: 50%;
height: 50%;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const ClockTitle = styled.h2`
margin-right: 30px;
`

export const TypeClock = styled.p`
color: #1E90FF;
font-size: 1em;
margin-left: 10px;


&:hover {
  color: ${(props) => props.theme.textColor};
}
`

export const HoverIconStopwatch = styled(BsStopwatch)`
 font-size: 20px;
  color: #C0C0C0;
  transition: all 0.3s; 

  &:hover {
    color: ${(props) => props.theme.textColor};
    transform: scale(1.2);
    cursor: pointer; 
  }
`

export const HoverIcon = styled(BsSmartwatch) `
 font-size: 20px;
  color: #C0C0C0;
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.theme.textColor};
    transform: scale(1.2); 
    cursor: pointer;  
  }
`

export const HoverableIcon = styled(AiOutlineClockCircle)`
  font-size: 20px;
  color: #C0C0C0;
  transition: all 0.3s; 

  &:hover {
    color: ${(props) => props.theme.textColor};
    transform: scale(1.2); 
    cursor: pointer; 
  }
`;

export const TypeAnalogico = styled.div`
display: flex;
cursor: pointer;

&:hover {
  color: black;
}
`

export const ControlButtons = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
height: 60px;
`