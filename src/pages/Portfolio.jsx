import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Col, Row, Modal, Badge, Container, Image, ListGroup, Stack, Button } from 'react-bootstrap';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { SectionHeading } from '../components/SectionHeading';

function TagSection({ filter, setFilter }) {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/tags`)
      .then((r) => r.json())
      .then((v) => setTags(v.data));
  }, []);

  return (
    <Row>
      <Col className="text-center mb-2">
        <ul
          className="list-inline mb-4"
          id="portfolio-flters"
          onClick={(e) => setFilter(e.target.dataset.filter ?? filter)}
        >
          <FilterButton filter="*" label="Всё" active={filter === '*'} />
          {tags.map((f) => (
            // eslint-disable-next-line no-underscore-dangle
            <FilterButton key={f._id} filter={f._id} label={f.label} active={filter === f._id} />
          ))}
        </ul>
      </Col>
    </Row>
  );
}

function PortfolioItem({ title, cover, images, description, tags }) {
  const [show, setShow] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };
  return (
    <Col lg={4} md={6} className="mb-4 portfolio-item">
      <div className="position-relative overflow-hidden mb-2">
        <img className="img-fluid rounded w-100" src={cover.url} alt="" />
        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
          <a onClick={() => setShow(true)}>
            <i className="fa fa-plus text-white" style={{ fontSize: '60px' }} />
          </a>
        </div>
        <Modal show={show} onHide={() => setShow(false)} centered size="xl">
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col xs={12} md={6} className="mb-5">
                  <Slider {...settings}>
                    {images.map((i) => (
                      <div key={i.id} className="position-relative mb-2">
                        <Image fluid rounded width="100%" src={i.image.url} alt="" style={{ width: '100px' }} />
                      </div>
                    ))}
                  </Slider>
                </Col>
                <Col xs={12} md={6}>
                  <DocumentRenderer document={description.document} />
                </Col>
                <Row>
                  <Col xs={12}>
                    {tags.map((t) => (
                      <Badge pill text="light" key={t.id} className="p-2 mx-1">
                        {t.name}
                      </Badge>
                    ))}
                  </Col>
                </Row>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    </Col>
  );
}

function FilterButton({ active, label, filter }) {
  const classList = ['btn', 'btn-sm', 'btn-outline-primary', 'm-1'];
  if (active) {
    classList.push('active');
  }
  return (
    <li className={classList.join(' ')} data-filter={filter}>
      {label}
    </li>
  );
}

export function Portfolio({ hidden }) {
  if (hidden) return <div />;
  const [filter, setFilter] = useState('*');
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/projects`)
      .then((r) => r.json())
      .then((v) => setProjects(v.data));
  }, []);

  return (
    <Container fluid className="pt-5 pb-3" id="portfolio">
      <Container>
        <SectionHeading bgText="Галерея" title="Портфолио" />
        <TagSection filter={filter} setFilter={setFilter} />
        <Row className="row portfolio-container">
          {projects.map((p) => (
            <PortfolioItem key={p.id} {...p} />
          ))}
        </Row>
      </Container>
    </Container>
  );
}
