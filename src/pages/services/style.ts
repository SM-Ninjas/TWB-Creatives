import { Input } from "antd";
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
  background: var(--Background, #f8f8f8);
  box-shadow: -4px -4px 20px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 12px;
`;

export const StyledInput = styled(Input)`
  width: 347px;
  height: 60px;
  display: block;
  margin: 15px 0px;
  width: 100%;
  border-radius: 4px;

  &::placeholder {
    color: #344054; /* Adjust the color to your preference */
    opacity: 1; /* Set the opacity as needed */
  }
`;

export const StyledTextArea = styled(Input.TextArea)`
  width: 100%;
  border-radius: 4px;
  resize: none;

  &::placeholder {
    color: #344054; /* Adjust the color to your preference */
    opacity: 1; /* Set the opacity as needed */
  }
`;
