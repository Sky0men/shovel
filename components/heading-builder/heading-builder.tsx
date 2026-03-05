import { Flex } from 'antd';
import { Styled } from './styled';

const HeadingBuilder = () => {
  return (
    <Flex wrap="nowrap" vertical gap={20}>
      <Flex vertical wrap="nowrap">
        <Styled.Heading level={3}>ТИТАНИНСТРУМЕНТ</Styled.Heading>
        <Styled.ColorText>
          Надежный поставщик садового инструмента из титана и нержавеющей стали. Работаем с 2005
          года. Гарантия качества и своевременной доставки.
        </Styled.ColorText>
      </Flex>
    </Flex>
  );
};

export { HeadingBuilder };
