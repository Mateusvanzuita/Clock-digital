import styled from "styled-components";

export const BodyLayout = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
background-color: ${(props) => props.theme.backgroundColor};
color: ${(props) => props.theme.textColor};
`
