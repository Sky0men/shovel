import { Button, Card, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import Image from 'next/image';
import Text from 'antd/es/typography/Text';
import { Styled } from './styled';

type CardComponentProps = {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
};

const CardComponent = ({ imageSrc, title, description, price }: CardComponentProps) => {
  return (
    <Card>
      <Flex vertical gap={18}>
        {/* Секция с текстом сверху */}
        <Flex justify="center" align="center">
          <Image
            src={imageSrc}
            alt={title}
            width={324}
            height={324}
            style={{ width: '100%', height: '428px', objectFit: 'cover' }}
          />
        </Flex>
        <Flex vertical gap={12} align="start">
          <Title level={5}>{title}</Title>
          <Text>{description}</Text>
        </Flex>

        {/* Изображение */}

        {/* Цена и кнопка */}
        <Flex justify="space-between" align="center">
          <Styled.WrapperParagraph strong>{`${price} ₽`}</Styled.WrapperParagraph>
          <Button size="large" type="primary">
            Заказать
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export { CardComponent };
