import styled from "styled-components";

export const StyledTeam = styled("div")`
  // border:2px solid red;
  height: 406px;
`;


export const StyledParagraph = styled.p`
  color: rgba(248, 248, 248);
  opacity: 0.75;
  text-align: center;
  font-family: Shippori Mincho B1;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;


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