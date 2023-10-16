import styled from "styled-components";

export const HeaderStyle = styled.header`
padding: 30px;
position: relative;
align-items: center;
justify-content: space-between;
display: flex;
width: 100%;
`

export const HeaderMenu = styled.div`
display: flex;
margin-left: 100px
`

export const HeaderMenuConfig = styled.div`
display: flex;
margin-right: 100px
`

export const HeaderLink = styled.p`
margin-left: 15px;
padding: 15px;
margin-right: 15px;
font-size: 1.5em;
font-weight: 700;
cursor: pointer;

&:hover {
  color: #1E90FF;
}
`