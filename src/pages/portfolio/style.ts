import styled from "styled-components";

interface StyledProjectProps {
    background: string; // Define the background prop
  }
  

export const StyledProject =  styled.div<StyledProjectProps>`
height: 290px;
border-radius: 14px;
background-color: ${(props) => props.background};
`

