import { Flex } from 'antd';
import { Styled } from './styled';

const HeadingBuilder = () => {
  return (
    <Flex wrap="nowrap" vertical gap={20}>
      <Flex vertical wrap="nowrap">
        <Styled.Heading level={2}>МЕТПРОМСНАБ</Styled.Heading>
        <Styled.ColorText>
          Надежный поставщик металлопродукции для промышленности и строительства. Работаем с 2005
          года. Гарантия качества и своевременной доставки.
        </Styled.ColorText>
      </Flex>
    </Flex>
  );
};

export { HeadingBuilder };
