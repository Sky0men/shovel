import { Col, Row, Space } from 'antd';
import { Styled } from './styled';

const FooterContent = () => {
  return (
    <Row
      gutter={[48, 24]}
      justify="center"
      style={{ textAlign: 'center' }} // центрирует текст на маленьких экранах
    >
      {/* Блок компании */}
      <Col xs={24} sm={24} lg={8}>
        <Space direction="vertical" size={8} style={{ width: '100%' }}>
          <Styled.Heading>МЕТПРОМСНАБ</Styled.Heading>
          <Styled.ColorText>
            Надежный партнер в сфере поставки металлопродукции с 2005 года.
          </Styled.ColorText>
        </Space>
      </Col>

      {/* Контакты */}
      <Col xs={24} sm={24} lg={8}>
        <Space direction="vertical" size={8} style={{ width: '100%' }}>
          <Styled.Heading>Контакты</Styled.Heading>
          <Styled.ColorText>Телефон: +7 (495) 123-45-67</Styled.ColorText>
          <Styled.ColorText>Email: info@metalpro.com</Styled.ColorText>
          <Styled.ColorText>Адрес: г. Москва, ул. Промышленная, 15</Styled.ColorText>
        </Space>
      </Col>

      {/* Режим работы */}
      <Col xs={24} sm={24} lg={8}>
        <Space direction="vertical" size={8} style={{ width: '100%' }}>
          <Styled.Heading>Режим работы</Styled.Heading>
          <Styled.ColorText>Пн-Пт: 9:00 - 18:00</Styled.ColorText>
          <Styled.ColorText>Сб-Вс: Выходной</Styled.ColorText>
        </Space>
      </Col>
    </Row>
  );
};

export { FooterContent };
