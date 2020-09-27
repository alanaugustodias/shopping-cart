import styled from 'styled-components';
import { Heart } from '@styled-icons/boxicons-solid/Heart';
import Style from '../../style';

const Footer = styled.footer`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 20px;
  padding: 20px;
  background-color: ${Style.GlobalColors.mediumGrey};
  text-align: center;
  font-size: 14px;
`;

const HeartIcon = styled(Heart)`
  width: 24px;
  height: 24px;
  color: red;
`;

export default {
    Footer,
    HeartIcon
};
