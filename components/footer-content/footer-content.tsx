import { Col, Row, Space } from 'antd';
import { Styled } from './styled';

const FooterContent = () => {
  return (
    <Row gutter={[48, 24]} justify="center" style={{ textAlign: 'center' }}>
      {/* Блок компании */}
      <Col xs={24} sm={24} lg={8}>
        <Space orientation="vertical" size={8} style={{ width: '100%' }}>
          <Styled.Heading>ТИТАНИНСТРУМЕНТ</Styled.Heading>
          <Styled.ColorText>
            Надежный партнер в сфере поставки металлопродукции с 2005 года.
          </Styled.ColorText>
        </Space>
      </Col>

      {/* Контакты */}
      <Col xs={24} sm={24} lg={8}>
        <Space orientation="vertical" size={8} style={{ width: '100%' }}>
          <Styled.Heading>Контакты</Styled.Heading>
          <Styled.ColorText>Телефон: +7 (920) 143-53-62</Styled.ColorText>
          <Styled.ColorText>Email: titaninstrument.rybinsk@mail.ru</Styled.ColorText>
          <Styled.ColorText>Адрес: Россия, Ярославская область, г. Рыбинск</Styled.ColorText>
        </Space>
      </Col>

      {/* Режим работы */}
      <Col xs={24} sm={24} lg={8}>
        <Space direction="vertical" size={8} style={{ width: '100%' }}>
          <Styled.Heading>Режим работы</Styled.Heading>
          <Styled.ColorText>Ежедневно: 9:00 - 19:00</Styled.ColorText>
        </Space>
      </Col>
    </Row>
  );
};

export { FooterContent };
