import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import { SectionHeading } from '../components/SectionHeading';

export function About({ hidden }) {
  if (hidden) return <div />;

  const placeholder = <Container fluid className="py-5" style={{ height: '550px' }} />;
  const [about, setAbout] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/profile?aggregated=true')
      .then((response) => response.json())
      .then((a) => setAbout(a.data));
  }, []);
  if (about === null) {
    return placeholder;
  }

  function getDate() {
    return new Intl.DateTimeFormat('ru-RU').format(new Date(about.birth ?? Date.now()));
  }

  return (
    <Container fluid className="py-5" id="about">
      <Container>
        <SectionHeading bgText="Обо мне" title="Обо мне" />
        <Row className="align-items-center">
          <Col lg={5} className="pb-4 pb-lg-0">
            <img className="img-fluid rounded w-100" src={about.about_photo.url} alt="" />
          </Col>
          <Col lg={7}>
            <h3 className="mb-4">{about.about_header ?? ''}</h3>
            <div>{ReactHtmlParser(about.about_summary)}</div>
            <Row className="mb-3">
              <Col sm={6} className="py-2">
                <h6>
                  Имя: <span className="text-secondary">{about.name ?? ''}</span>
                </h6>
              </Col>
              <Col sm={6} className="py-2">
                <h6>
                  День рождения: <span className="text-secondary">{getDate()}</span>
                </h6>
              </Col>
              <Col sm={6} className="py-2">
                <h6>
                  Уровень: <span className="text-secondary">{about.degree ?? ''}</span>
                </h6>
              </Col>
              <Col sm={6} className="py-2">
                <h6>
                  Опыт: <span className="text-secondary">{about.experience ?? ''}</span>
                </h6>
              </Col>
              <Col sm={6} className="py-2">
                <h6>
                  Телефон: <span className="text-secondary">{about.phone ?? ''}</span>
                </h6>
              </Col>
              <Col sm={6} className="py-2">
                <h6>
                  Email: <span className="text-secondary">{about.email ?? ''}</span>
                </h6>
              </Col>
              <Col sm={6} className="py-2">
                <h6>
                  Адрес: <span className="text-secondary">{about.address ?? ''}</span>
                </h6>
              </Col>
              <Col sm={6} className="py-2">
                <h6>
                  Фриланс: <span className="text-secondary">{about.freelancer ? 'Беру заказы' : 'Недоступен'}</span>
                </h6>
              </Col>
            </Row>
            <Button variant="outline-primary" type="button" className="mr-4">
              Нанять меня
            </Button>
            <Button variant="outline-primary" type="button">
              Узнать больше
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
