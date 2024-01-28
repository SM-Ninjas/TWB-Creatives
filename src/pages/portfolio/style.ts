import styled from "styled-components";
import { Link } from "react-router-dom";


interface StyledProjectProps {
    background: string; // Define the background prop
  }
  

export const StyledLink =  styled(Link)<StyledProjectProps>`
height: 290px;
border-radius: 14px;
background-color: ${(props) => props.background};
`

