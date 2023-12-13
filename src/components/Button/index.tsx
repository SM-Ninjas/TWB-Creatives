import styled from 'styled-components';
import { Button as AntButton } from 'antd';

const CustomButton = styled(AntButton)`
  &&.ant-btn {
    padding: 13px 27px;
    height: 44px;
    display: flex;
    border: 1.2px solid ${({theme})=>theme.colors.utils.u1};
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 4px;

    > svg {
      width: 20px;
      height: 20px;
    }

    > span {
      font-weight: 600;
    }

    /* Primary button */
    &.ant-btn-primary {
      > span,
      > svg {
        color: ${({ theme }) => theme.colors.utils.u1};
      }
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.white};
      box-shadow: 0px 1px 2px 0px #1018280d;s


      :disabled {
        border-color: ${({ theme }) => theme.colors.primary.g2};
        background: ${({ theme }) => theme.colors.primary};
      }

      &.ant-btn-dangerous {
        :not(:disabled):hover {
          background: ${({ theme }) => theme.colors.error};
        }
      }
    }

    /* Default button */
    &.ant-btn-default {
      border-color: ${({ theme }) => theme.colors.gray.g3};
      > span,
      > svg {
        color: ${({ theme }) => theme.colors.gray.g8};
      }
      :not(:disabled):hover {
        border-color: ${({ theme }) => theme.colors.utils.u1};
        background: ${({ theme }) => theme.colors.gray.g50};
      }
      :disabled {
        > span,
        > svg {
          color: ${({ theme }) => theme.colors.gray.g3};
        }
        border-color: ${({ theme }) => theme.colors.gray.g2};
        background: ${({ theme }) => theme.colors.white};
      }

      &.ant-btn-dangerous {
        border-color: ${({ theme }) => theme.colors.error.e3};
        > span,
        > svg {
          color: ${({ theme }) => theme.colors.error.e8};
        }
        :not(:disabled):hover {
          border-color: ${({ theme }) => theme.colors.error.e3};
          background: ${({ theme }) => theme.colors.error.e50};
        }
      }
    }

    /* Text button */
    &.ant-btn-text {
      :not(:disabled):hover {
        background: ${({ theme }) => theme.colors.gray.g50};
      }
    }
  }
`;

export default CustomButton;
