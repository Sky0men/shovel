'use client';
import { Button, Card, Flex, Form, Input, Modal, Select, Image as Img, notification } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import Image from 'next/image';
import Text from 'antd/es/typography/Text';
import { Styled } from './styled';
import { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';

type CardComponentProps = {
  imageSrc: string;
  title: string;
  material: string;
  size: string;
  price: string;
};

const SELECTBOX_VALUES = [
  {
    label: 'Лопата штыковая сварная большая 1,5 мм',
    value: 'Лопата штыковая сварная большая 1,5 мм',
  },
  {
    label: 'Лопата штыковая сварная большая 2 мм',
    value: 'Лопата штыковая сварная большая 2 мм',
  },
  {
    label: 'Лопата штыковая сварная большая 2,5 мм (по запросу)',
    value: 'Лопата штыковая сварная большая 2,5 мм (по запросу)',
  },
  {
    label: 'Лопата штыковая сварная средняя 2 мм (по запросу)',
    value: 'Лопата штыковая сварная средняя 2 мм (по запросу)',
  },
  {
    label: 'Лопата штыковая штыковая сварная средняя 1,5 мм',
    value: 'Лопата штыковая штыковая сварная средняя 1,5 мм',
  },
  {
    label: 'Лопата штыковая сварная средняя 1,2 мм (по запросу)',
    value: 'Лопата штыковая сварная средняя 1,2 мм (по запросу)',
  },
  {
    label: 'Лопата штыковая сварная малая 1,5 мм',
    value: 'Лопата штыковая сварная малая 1,5 мм',
  },
  {
    label: 'Лопата штыковая сварная малая 1,2 мм (по запросу)',
    value: 'Лопата штыковая сварная малая 1,2 мм (по запросу)',
  },
  {
    label: 'Лопата штыковая штампованная 2 мм',
    value: 'Лопата штыковая штампованная 2 мм',
  },
  {
    label: 'Лопата штыковая штампованная 1,5 мм',
    value: 'Лопата штыковая штампованная 1,5 мм',
  },
  {
    label: 'Лопата траншейная  сварная 2 мм',
    value: 'Лопата траншейная  сварная 2 мм',
  },
  {
    label: 'Лопата траншейная  сварная 2,5 мм (по запросу)',
    value: 'Лопата траншейная  сварная 2,5 мм (по запросу)',
  },
];

const CardComponent = ({ imageSrc, title, material, size, price }: CardComponentProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setLoading(false); // сбрасываем лоадер при закрытии
  };

  const formatPhone = (value: string = '') => {
    const digits = value.replace(/\D/g, '');

    if (!digits) return '';

    const d = digits.startsWith('8') ? '7' + digits.slice(1) : digits;

    const trimmed = d.slice(0, 11);

    let result = '+7';

    if (trimmed.length > 1) {
      result += ` (${trimmed.slice(1, 4)}`;
    }
    if (trimmed.length >= 4) {
      result += `) ${trimmed.slice(4, 7)}`;
    }
    if (trimmed.length >= 7) {
      result += `-${trimmed.slice(7, 9)}`;
    }
    if (trimmed.length >= 9) {
      result += `-${trimmed.slice(9, 11)}`;
    }

    return result;
  };

  const [form] = Form.useForm();

  return (
    <>
      <Card>
        <Flex vertical gap={18}>
          <Flex justify="center" align="center">
            <Styled.ImageWrapper>
              <Img
                src={imageSrc}
                alt={title}
                preview={false}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Styled.ImageWrapper>
          </Flex>
          <Flex vertical gap={12} align="start">
            <Title level={4}>{title}</Title>
            <Text>{material}</Text>
            <Text>{size}</Text>
          </Flex>
          <Flex justify="space-between" align="center">
            <Styled.WrapperParagraph strong>{`${price} ₽`}</Styled.WrapperParagraph>
            <Button
              icon={<Image src="/shopping-basket.svg" alt="basket" width={22} height={22} />}
              size="large"
              type="primary"
              onClick={handleClick}
            >
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
          form={form}
          layout="vertical"
          onFinish={async (values) => {
            setLoading(true); // включаем лоадер
            try {
              const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
              });

              if (res.ok) {
                form.resetFields();
                notification.success({
                  message: <span style={{ color: '#fff' }}>Заявка отправлена</span>,
                  description: (
                    <span style={{ color: '#fff' }}>
                      Спасибо! Мы свяжемся с вами в ближайшее время.
                    </span>
                  ),
                  placement: 'topRight',
                  duration: 10,
                  style: { background: '#57f271' },
                  closeIcon: <CloseOutlined style={{ color: '#fff' }} />,
                  className: 'custom-notification',
                });
                handleCloseModal();
              } else {
                notification.error({
                  message: <span color="#fff">Ошибка отправки</span>,
                  description: <span color="#fff">Попробуйте ещё раз позже.</span>,
                  placement: 'topRight',
                  duration: 10,
                  style: { background: '#fc8181' },
                  closeIcon: <CloseOutlined style={{ color: '#fff' }} />,
                  className: 'custom-notification',
                });
                setLoading(false); // выключаем лоадер
              }
            } catch (err) {
              console.error(err);
              notification.error({
                message: <span color="#fff">Ошибка отправки</span>,
                description: <span color="#fff">Попробуйте ещё раз позже.</span>,
                placement: 'topRight',
                duration: 10,
                style: { background: '#fc8181' },
                closeIcon: <CloseOutlined style={{ color: '#fff' }} />,
              });
              setLoading(false); // выключаем лоадер
            }
          }}
          onFinishFailed={() => {
            // Показываем короткое уведомление
            notification.error({
              message: <span style={{ color: '#fff' }}>Не все обязательные поля заполнены</span>,
              placement: 'topRight',
              duration: 10,
              style: { background: '#fc8181' },
              closeIcon: <CloseOutlined style={{ color: '#fff' }} />,
            });
          }}
        >
          <Form.Item
            name="lastName"
            label="Фамилия"
            rules={[{ required: true, message: 'Введите фамилию' }]}
          >
            <Input placeholder="Иванов" />
          </Form.Item>

          <Form.Item
            name="firstName"
            label="Имя"
            rules={[{ required: true, message: 'Введите имя' }]}
          >
            <Input placeholder="Иван" />
          </Form.Item>

          <Form.Item
            name="company"
            label="Название компании, при покупке через ЮР. лицо"
            rules={[{ message: 'Введите название компании' }]}
          >
            <Input placeholder="ТИТАНИНСТРУМЕНТ" />
          </Form.Item>

          <Form.Item
            name="inn"
            label="ИНН"
            normalize={(value) => value?.replace(/\D/g, '').slice(0, 12)}
            rules={[
              { required: true, message: 'Введите ИНН' },
              {
                validator: (_, value) => {
                  if (!value) return Promise.resolve();

                  if (value.length === 10 || value.length === 12) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('ИНН должен содержать 10 или 12 цифр'));
                },
              },
            ]}
          >
            <Input maxLength={12} inputMode="numeric" placeholder="0123456789" />
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
            normalize={(value) => formatPhone(value)}
            rules={[
              { required: true, message: 'Введите телефон' },
              {
                validator: (_, value) => {
                  if (!value || value.replace(/\D/g, '').length === 11) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Введите телефон полностью'));
                },
              },
            ]}
          >
            <Input placeholder="+7 (___) ___-__-__" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Введите email' },
              { type: 'email', message: 'Некорректный email' },
            ]}
          >
            <Input placeholder="titaninstrument@mail.ru" />
          </Form.Item>

          <Form.Item
            name="comment"
            label="Комментарий"
            rules={[{ max: 500, message: 'Максимум 500 символов' }]}
          >
            <TextArea rows={4} showCount maxLength={500} />
          </Form.Item>

          <Button type="primary" htmlType="submit" block loading={loading}>
            Оставить заявку
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export { CardComponent };
