import { Card, Col, Row } from 'antd';
import { InformationComponent } from '../information-component/information-component';

const INFORMATION = [
  {
    label: 'Телефон',
    hrefLink: 'tel:+79991234567',
    text: '+7 (999) 123-45-67',
    hasLink: true,
    hasText: false,
  },
  {
    label: 'Email',
    hrefLink: 'mailto:info@example.com',
    text: 'info@example.com',
    hasLink: true,
    hasText: false,
  },
  {
    label: 'Адрес',
    text: 'г. Москва, ул. Промышленная, 15',
    hasLink: false,
    hasText: true,
  },
  {
    label: 'Режим работы',
    text: 'Пн-Пт: 9:00 - 18:00',
    hasLink: false,
    hasText: true,
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
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export { InformationAboutCompany };
