import Text from 'antd/es/typography/Text';
import styled from 'styled-components';

const Heading = styled(Text)`
  && {
    color: #fff !important;
    font-weight: bold;
  }
`;

const ColorText = styled(Text)`
  && {
    color: #b0aeae !important;
  }
`;

export const Styled = {
  Heading,
  ColorText,
};
