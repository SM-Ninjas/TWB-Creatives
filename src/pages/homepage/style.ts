import styled from "styled-components"

export const StyledCard = styled('div')`
display: flex;
flex-direction: column; /* Change to flex-row for horizontal layout */
align-items: center;
justify-content: center;
width: 261px;
height: 281px;
gap: 10px; /* Adjusted gap for better responsiveness */
font-size: 16px;
padding: 20px; /* Adjusted padding for better spacing */
border-radius: 8px;
background: var(--Background, #F8F8F8);
box-shadow: -4px -4px 20px 0px rgba(0, 0, 0, 0.05);
`;

export const StyledDiv = styled('div')`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap:17px;
 font-size:16px;
 padding:2px;
 width: 261px;
 height: 281px;
 border-radius:8px;
 background: var(--Background, #F8F8F8);
//  box-shadow: -4px -4px 20px 0px rgba(0, 0, 0, 0.05);
 
`

