import { Flex } from 'antd';
import Link from 'antd/es/typography/Link';
import Text from 'antd/es/typography/Text';
import { Styled } from './styled';
import Image from 'next/image';

type InformationComponentProps = {
  label: string;
  hasLink?: boolean;
  hrefLink?: string;
  text: string;
  hasText?: boolean;
  icon: string;
};

const InformationComponent = ({
  hasLink,
  hrefLink,
  text,
  label,
  hasText,
  icon,
}: InformationComponentProps) => {
  return (
    <Flex vertical gap={8}>
      <Flex gap={8}>
        <Image src={icon} alt="icon" width={22} height={22} />
        <Styled.ColorText>{label}</Styled.ColorText>
      </Flex>
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
