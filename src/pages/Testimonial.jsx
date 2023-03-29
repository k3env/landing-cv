import { Col, Container, Image, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import { SectionHeading } from '../components/SectionHeading';

function CustomerReview({ review, image, name, profession }) {
  return (
    <div className="text-center">
      <i className="fa fa-3x fa-quote-left text-primary mb-4" />
      <h4 className="font-weight-light mb-4">{review}</h4>
      <Image
        fluid
        roundedCircle
        className="mx-auto mb-3"
        src={image}
        style={{ width: '80px', height: '80px' }}
        alt=""
      />
      <h5 className="font-weight-bold m-0">{name}</h5>
      <span>{profession}</span>
    </div>
  );
}

export function Testimonial({ hidden }) {
  if (hidden) return <div />;
  const customers = [
    {
      id: '1',
      name: 'Client Name',
      profession: 'Profession',
      company: null,
      review: `Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                  elitr dolore et eos labore, stet justo sed est sed. Diam sed
                  sed dolor stet accusam amet eirmod eos, labore diam clita`,
      image: 'img/testimonial-1.jpg',
    },
    {
      id: '2',
      name: 'Client Name',
      profession: 'Profession',
      company: null,
      review: `Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                  elitr dolore et eos labore, stet justo sed est sed. Diam sed
                  sed dolor stet accusam amet eirmod eos, labore diam clita`,
      image: 'img/testimonial-2.jpg',
    },
    {
      id: '3',
      name: 'Client Name',
      profession: 'Profession',
      company: null,
      review: `Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                  elitr dolore et eos labore, stet justo sed est sed. Diam sed
                  sed dolor stet accusam amet eirmod eos, labore diam clita`,
      image: 'img/testimonial-3.jpg',
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container fluid className="py-5" id="testimonial">
      <Container>
        <SectionHeading bgText="Отзывы" title="Рекомендации клиентов" />
        <Row className="justify-content-center">
          <Col lg={8}>
            <Slider {...settings}>
              {customers.map((c) => (
                <CustomerReview key={c.id} {...c} />
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
