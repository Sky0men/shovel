'use client';
import { Button, Card, Flex, Form, Input, Modal, Select } from 'antd';
import Title from 'antd/es/typography/Title';
import Image from 'next/image';
import Text from 'antd/es/typography/Text';
import { Styled } from './styled';
import { useState } from 'react';
import form from 'antd/es/form';

type CardComponentProps = {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
};

const SELECTBOX_VALUES = [
  {
    label: 'Лопата сварочная',
    value: 'Лопата сварочная',
  },
  {
    label: 'Лопата траншевая',
    value: 'Лопата траншевая',
  },
  {
    label: 'Лопата газонная',
    value: 'Лопата газонная',
  },
  {
    label: 'Лопата цветочная',
    value: 'Лопата цветочная',
  },
  {
    label: 'Лопата №5',
    value: 'Лопата №5',
  },
  {
    label: 'Лопата №6',
    value: 'Лопата №6',
  },
];

const CardComponent = ({ imageSrc, title, description, price }: CardComponentProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleClick = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      <Card>
        <Flex vertical gap={18}>
          {/* Секция с текстом сверху */}
          <Flex justify="center" align="center">
            <Image
              src={imageSrc}
              alt={title}
              width={324}
              height={324}
              style={{ width: '100%', height: '324px', objectFit: 'cover' }}
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
            <Button size="large" type="primary" onClick={handleClick}>
              Заказать
            </Button>
          </Flex>
        </Flex>
      </Card>

      <Modal
        title="Оставьте заявку на нашу почту"
        open={isOpenModal}
        onCancel={handleCloseModal}
        footer={null}
      >
        <Form
          layout="vertical"
          onFinish={async (values) => {
            const res = await fetch('http://31.58.171.108/api/send-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values),
            });

            if (res.ok) {
              alert('Заявка отправлена!');
              handleCloseModal();
            } else {
              alert('Ошибка отправки');
            }
          }}
        >
          <Form.Item
            name="lastName"
            label="Фамилия"
            rules={[{ required: true, message: 'Введите фамилию' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="firstName"
            label="Имя"
            rules={[{ required: true, message: 'Введите имя' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="company"
            label="Название компании"
            rules={[{ required: true, message: 'Введите название компании' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="inn" label="ИНН" rules={[{ required: true, message: 'Введите ИНН' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="products"
            label="Название товара"
            initialValue={[title]}
            rules={[{ required: true, message: 'Выберите товар' }]}
          >
            <Select options={SELECTBOX_VALUES} mode="multiple" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Мобильный телефон"
            rules={[{ required: true, message: 'Введите телефон' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Введите email' },
              { type: 'email', message: 'Некорректный email' },
            ]}
          >
            <Input />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Оставить заявку
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export { CardComponent };
