import { Flex } from 'antd';
import Link from 'antd/es/typography/Link';
import Text from 'antd/es/typography/Text';
import { Styled } from './styled';

type InformationComponentProps = {
  label: string;
  hasLink?: boolean;
  hrefLink?: string;
  text: string;
  hasText?: boolean;
};

const InformationComponent = ({
  hasLink,
  hrefLink,
  text,
  label,
  hasText,
}: InformationComponentProps) => {
  return (
    <Flex vertical gap={8}>
      <Styled.ColorText>{label}</Styled.ColorText>
      {hasLink && (
        <Link strong href={hrefLink}>
          {text}
        </Link>
      )}
      {hasText && <Text strong>{text}</Text>}
    </Flex>
  );
};

export { InformationComponent };
