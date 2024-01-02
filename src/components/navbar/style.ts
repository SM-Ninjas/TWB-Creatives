import styled from "styled-components";
import { NavLink } from "react-router-dom";
import colors from "../../theme/defaultTheme/colors";

export const StyledNavLink = styled(NavLink)`
  position: relative;
  
  &.active {
    font-weight: 550;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 70%;
      width: 60%; // Adjust this value to control the length of the underline
      height: 4px; // Adjust this value to control the thickness of the underline
      background-color: ${colors.primary.p2}; 
      transform: translateX(-50%);
    }
  }

  &:hover {
    text-decoration: none; // Remove default underline on hover
  }
`;