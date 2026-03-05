'use client';
import { useState, useMemo } from 'react';
import { Col, Row, Input, Alert } from 'antd';
import Title from 'antd/es/typography/Title';
import { CardComponent } from '../card-component/card-component';
import { PRODUCTS } from './constants';

const OurProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // функция для нормализации строки: удаляем все, кроме букв и цифр, приводим к нижнему регистру
  const normalize = (str: string) => str.toLowerCase().replace(/[^a-zа-я0-9]/gi, '');

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return PRODUCTS;
    const normalizedSearch = normalize(searchTerm);
    return PRODUCTS.filter((product) => normalize(product.title).includes(normalizedSearch));
  }, [searchTerm]);

  return (
    <div style={{ textAlign: 'center', padding: '50px 0' }}>
      <Title level={4}>Наши продукты</Title>
      <Alert
        title={
          <span style={{ fontWeight: 700 }}>
            Заказ по ценам, указанным на сайте, доступен только для оптового заказа от 100 000 ₽
          </span>
        }
        type="info"
        showIcon
      />

      <Input
        placeholder="Поиск по продуктам..."
        value={searchTerm}
        allowClear
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ margin: '20px auto' }}
        size="large"
      />

      <Row gutter={[24, 24]} justify="center">
        {filteredProducts.map((product) => (
          <Col key={product.title} xs={24} sm={12} lg={8} xl={6}>
            <CardComponent
              imageSrc={product.imageSrc}
              title={product.title}
              material={product.matirial}
              size={product.size}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export { OurProducts };
