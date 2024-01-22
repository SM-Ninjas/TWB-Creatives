import { Input } from "antd";
import styled from "styled-components";

export const StyledInput = styled(Input)`
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
`
