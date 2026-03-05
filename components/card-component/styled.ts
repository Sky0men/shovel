import Text from 'antd/es/typography/Text';
import styled from 'styled-components';

const WrapperParagraph = styled(Text)`
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 228px;
  aspect-ratio: 1 / 1; /* квадрат */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 16px;
  background: #fff;
`;

export const Styled = {
  WrapperParagraph,
  ImageWrapper,
};
