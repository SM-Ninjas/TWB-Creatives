import styled from "styled-components";

interface StyledProjectProps {
    background: string; // Define the background prop
  }
  

export const StyledProject =  styled.div<StyledProjectProps>`
width: 878px;
height: 290px;
border:2px solid blue;
border-radius: 14px;
background-color: ${(props) => props.background || "#fff"};
display:flex;
align-items:center;
`

