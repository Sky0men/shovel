import { Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import { CardComponent } from '../card-component/card-component';

const PRODUCTS = [
  {
    imageSrc: '/1.jpg',
    title: 'Лопата №1',
    description: 'Лучшая лопата',
    price: '1000',
  },
  {
    imageSrc: '/2.jpg',
    title: 'Лопата №2',
    description: 'Лучшая лопата',
    price: '1000',
  },
  {
    imageSrc: '/3.jpg',
    title: 'Лопата №3',
    description: 'Лучшая лопата',
    price: '1000',
  },
  {
    imageSrc: '/4.jpg',
    title: 'Лопата №4',
    description: 'Лучшая лопата',
    price: '1000',
  },
  {
    imageSrc: '/5.jpg',
    title: 'Лопата №5',
    description: 'Лучшая лопата',
    price: '1000',
  },
];

const OurProducts = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px 0' }}>
      <Title level={4}>Наши продукты</Title>

      <Row gutter={[24, 24]} justify="center">
        {PRODUCTS.map((product) => (
          <Col
            key={product.title}
            xs={24} // mobile → 1 колонка
            sm={12} // tablet → 2 колонки
            lg={8} // desktop → 3 колонки
          >
            <CardComponent
              imageSrc={product.imageSrc}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export { OurProducts };
