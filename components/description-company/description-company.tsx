import { Card, Col, Flex, Row } from 'antd';
import { Styled } from './styled';
import Text from 'antd/es/typography/Text';
import Image from 'next/image';

const DescriptionCompany = () => {
  return (
    <Card>
      <Styled.Heading level={3}>О компании</Styled.Heading>

      <Row gutter={[32, 24]}>
        <Col xs={24} sm={24} lg={12}>
          <Text>
            <Text strong>МЕТПРОМСНАБ</Text> — ведущий поставщик металлопродукции на российском
            рынке. Мы предлагаем широкий ассортимент черных и цветных металлов высочайшего качества.
            <br />
            <br />
            Наши клиенты — крупные строительные компании, производственные предприятия и частные
            застройщики по всей России.
          </Text>
        </Col>

        <Col xs={24} sm={24} lg={12}>
          <Styled.Heading level={5}>Наши преимущества:</Styled.Heading>
          <Flex gap={2}>
            <Image src="/check.svg" alt="галочка" width={22} height={22} />
            <Text>Прямые поставки от производителей</Text>
          </Flex>
          <Flex gap={2}>
            <Image src="/check.svg" alt="галочка" width={22} height={22} />
            <Text>Конкурентные цены без посредников</Text>
          </Flex>
          <Flex gap={2}>
            <Image src="/check.svg" alt="галочка" width={22} height={22} />
            <Text>Доставка по всей России</Text>
          </Flex>
          <Flex gap={2}>
            <Image src="/check.svg" alt="галочка" width={22} height={22} />
            <Text>Полный пакет сертификатов качества</Text>
          </Flex>
        </Col>
      </Row>
    </Card>
  );
};

export { DescriptionCompany };
