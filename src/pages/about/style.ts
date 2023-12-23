import styled from "styled-components";

interface StyledProps {
    background: string; // Define the background prop
  }
  

export const StyledTeam = styled('div')`
width: 261px;
height: 406px;

`

export const StyledHeading = styled.h1`
font-size:2rem;
font-width:700;
color: #FFF;
font-family: Shippori Mincho B1;
font-style: normal;
font-weight: 700;
line-height: normal;
text-align: center; 
`
export const StyledParagraph = styled.p<StyledProps>`
color: rgba(248, 248, 248);
opacity:0.75;
text-align: center;
font-family: Shippori Mincho B1;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
color: ${(props) => props.background || "#fff"};
`
