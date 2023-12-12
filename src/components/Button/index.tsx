// theme variable has access to entire objects of theme that was passed into theme provider
import styled from 'styled-components';
import { Button as AntButton } from 'antd';

import colors from '../../theme/defaultTheme/colors';


const Button = styled(AntButton)`
  padding: 8px 16px;
  height: 36px;
  border-radius: 4px;
  background-color: ${colors.primary.p25} ;
  display : block;
`;

export default Button;
