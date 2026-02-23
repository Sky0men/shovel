import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import styled from 'styled-components';

const Heading = styled(Title)`
  && {
    color: #fff !important;
    font-weight: bold;
  }
`;

const ColorText = styled(Text)`
  && {
    color: #fff !important;
  }
`;

export const Styled = {
  Heading,
  ColorText,
};
