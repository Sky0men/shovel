import { Card, Col, Row } from 'antd';
import { InformationComponent } from '../information-component/information-component';

const INFORMATION = [
  {
    label: 'Телефон',
    hrefLink: 'tel:+79201435362',
    text: '+7 (920) 143-53-62',
    hasLink: true,
    hasText: false,
    icon: '/phone.svg',
  },
  {
    label: 'Email',
    hrefLink: 'mailto:info@example.com',
    text: 'info@example.com',
    hasLink: true,
    hasText: false,
    icon: '/mail.svg',
  },
  {
    label: 'Адрес',
    text: 'Россия, Ярославская область, г. Рыбинск',
    hasLink: false,
    hasText: true,
    icon: '/location.svg',
  },
  {
    label: 'Режим работы',
    text: 'Ежедневно: 9:00 - 19:00',
    hasLink: false,
    hasText: true,
    icon: '/acute.svg',
  },
];

const InformationAboutCompany = () => {
  return (
    <Card>
      <Row gutter={[16, 16]}>
        {INFORMATION.map((informationCard) => (
          <Col
            key={informationCard.label}
            xs={24} // mobile
            sm={12} // tablet
            lg={6} // desktop
          >
            <InformationComponent
              label={informationCard.label}
              text={informationCard.text}
              hasLink={informationCard.hasLink}
              hasText={informationCard.hasText}
              hrefLink={informationCard.hrefLink}
              icon={informationCard.icon}
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export { InformationAboutCompany };
