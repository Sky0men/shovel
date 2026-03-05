import { Card, Col, Flex, Row } from 'antd';
import { Styled } from './styled';
import Text from 'antd/es/typography/Text';
import Image from 'next/image';

const DescriptionCompany = () => {
  const collapseItems = [
    {
      key: '1',
      label: 'Легкость пера',
      children: (
        <Text>
          Вес полотна нашей лопаты составляет всего 500 грамм! Это в 3-4 раза легче обычной стальной
          лопаты. Вы сможете работать часами, не чувствуя усталости в руках.
        </Text>
      ),
    },
    {
      key: '2',
      label: 'Сила титана',
      children: (
        <Text>
          Не обманывайтесь легкостью! Плотность титана в 4-5 раз выше стали. Там, где обычный
          инструмент гнется и ломается о твердую почву, титан остается несокрушимым.
        </Text>
      ),
    },
    {
      key: '3',
      label: 'Эффект анти-налипания',
      children: (
        <Text>
          Титан обладает низкой адгезией. Влажный чернозем или глина не налипают на совок, а легко
          соскальзывают, ускоряя работу в разы.
        </Text>
      ),
    },
    {
      key: '4',
      label: 'Идеальная заточка',
      children: (
        <Text>
          Каждая лопата имеет заводскую острую кромку. Она без усилий входит в землю, как нож в
          масло. Долговечность заточки поражает: от нескольких недель активного копания до года
          сезонных работ без дополнительной обработки.
        </Text>
      ),
    },
  ];
  return (
    <Card>
      <Styled.Heading level={3}>О компании</Styled.Heading>

      <Row gutter={[32, 24]}>
        <Col xs={24} sm={24} lg={12}>
          <Text>
            <Text strong>ТИТАНИНСТРУМЕНТ</Text>— является производителем профессионального садового
            инвентаря из титана и нержавеющей стали. Мы меняем представление о работе на земле,
            превращая ее в легкое и приятное занятие.
          </Text>

          <Image src="/brand-logo.png" alt="титанинструмент" width={246} height={246} />
        </Col>

        <Col xs={24} sm={24} lg={12}>
          <Styled.Heading level={5}>
            Мы производим только надёжный инвентарь. Наш ассортимент:
          </Styled.Heading>
          <Flex gap={2} align="start">
            <Image src="/check.svg" alt="галочка" width={22} height={22} />
            <Text>
              Различные виды лопат: универсальные сварные и штампованные, совковые, траншейные — для
              любых задач на вашем участке.
            </Text>
          </Flex>
          <Flex gap={2} align="start">
            <Image src="/check.svg" alt="галочка" width={22} height={22} />
            <Text>
              Тяпки (плоскорезы) — невероятно легкие, но прочные, для быстрой и чистой прополки.
            </Text>
          </Flex>
          <Flex gap={2} align="start">
            <Image src="/check.svg" alt="галочка" width={22} height={22} />
            <Text>
              Совки из нержавеющей стали и титана — для точных работ на клумбах и в теплицах.
            </Text>
          </Flex>
          <br />
          <Text>
            Наша гордость — <Text strong>титановые лопаты</Text>. Почувствуйте разницу с первого
            взгляда:
          </Text>
          <Styled.CleanCollapse items={collapseItems} ghost accordion />
        </Col>
      </Row>
    </Card>
  );
};

export { DescriptionCompany };
