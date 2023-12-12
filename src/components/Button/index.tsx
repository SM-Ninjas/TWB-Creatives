import styled from 'styled-components';

// theme variable has access to entire objects of theme that was passed into theme provider
const StyledButton = styled.button`
  padding: 10px 16px;
  border: 2px solid ${({ theme }) => theme.colors.primary.p25}; 
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary.p50};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.p25};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray.g2};
    border-color: ${({ theme }) => theme.colors.gray.g3};
    color: ${({ theme }) => theme.colors.gray.g5};
    cursor: not-allowed;
  }
`;

export default StyledButton;
