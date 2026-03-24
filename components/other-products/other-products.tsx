'use client';
import { Card, Flex, List } from 'antd';
import Title from 'antd/es/typography/Title';

const LIST_ITEMS = [
  {
    title: 'Тяпка трапецевидная 200, 2,5 мм (2,0 мм по запросу)',
    description: 'Материал: ВТ-20, Размер: 150х200, Цена: 1450₽',
  },
  {
    title: 'Тяпка трапецевидная 170, 2,5 мм (2,0 мм по запросу)',
    description: 'Материал: ВТ-20, Размер: 140х170, Цена: 1250₽',
  },
  {
    title: 'Тяпка полукруглая 2,5 мм (2,0 мм по запросу)',
    description: 'Материал: ВТ-20, Размер: 150х165, Цена: 1200₽',
  },
  {
    title: 'Тяпка треугольная 2,5 мм (2,0 мм по запросу)',
    description: 'Материал: ВТ-20, Размер: 150х170, Цена: 1300₽',
  },
  {
    title: 'Тяпка "Секира" 2,5 мм',
    description: 'Материал: ВТ-20, Размер: 150х250, Цена: 1500₽',
  },
  {
    title: 'Тяпка косая большая, 3 мм',
    description: 'Материал: ВТ-20, Размер: 60х150, Цена: 950₽',
  },
  {
    title: 'Тяпка косая малая, 3 мм',
    description: 'Материал: ВТ-20, Размер: 40х110, Цена: 650₽',
  },
  {
    title: 'Тяпка косая мини, 2 мм',
    description: 'Материал: ВТ-20, Цена: 400₽',
  },
  {
    title: 'Тяпка острая, 2 мм',
    description: 'Материал: ВТ-20, Размер: 90х170, Цена: 900₽',
  },
  {
    title: 'Мотыжка двусторонняя, 2 мм',
    description: 'Материал: ВТ-20, Размер: 70х200, Цена: 650₽',
  },
  {
    title: 'Плоскорез 2,5 мм',
    description: 'Материал: ВТ-20, Цена: 900₽',
  },
  {
    title: 'Корнеудалитель',
    description: 'Материал: ВТ-20, Размер: 50х210, Цена: 650₽',
  },
];

const OtherProducts = () => {
  return (
    <>
      <Flex justify="center">
        <Title level={5}>
          В нашем ассортименте присутствуют следующие позиции.
          <br /> По всем вопросам, просьба обращаться на почту
        </Title>
      </Flex>
      <List
        itemLayout="vertical"
        grid={{ gutter: 16, column: 1, lg: 2, xl: 2, xxl: 3, xxxl: 3 }}
        dataSource={LIST_ITEMS}
        renderItem={(item) => (
          <Card>
            <List.Item>
              <List.Item.Meta title={item.title} description={item.description} />
            </List.Item>
          </Card>
        )}
      />
    </>
  );
};

export { OtherProducts };
