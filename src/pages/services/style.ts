import styled from "styled-components";

interface StyledBtnProps {
  active: boolean;
}

export const StyledBtn = styled.button<StyledBtnProps>`
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#22092C" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#22092C")};
`;


export const StyledCard = styled.div`
border-radius: 8px;
background: var(--Background, #F8F8F8);
box-shadow: -4px -4px 20px 0px rgba(0, 0, 0, 0.05);
display:flex;
flex-direction :column;
text-align:center;
padding :12px;
`;