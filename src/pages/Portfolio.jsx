import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Col, Row, Modal, Badge, Container, Image, Button } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import { SectionHeading } from '../components/SectionHeading';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
            <FilterButton key={f._id} filter={f._id} label={f.label} active={filter === f._id} />
          ))}
        </ul>
      </Col>
    </Row>
  );
}

function FilterButton({ active, label, filter }) {
  return (
    <Button as="li" size="sm" variant="outline-primary" active={active} className="m-1" data-filter={filter}>
      {label}
    </Button>
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
        <Image fluid rounded width="100%" src={cover.url} alt="" />
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
                    <div key={cover._id} className="position-relative mb-2">
                      <Image fluid rounded width="100%" src={cover.url} alt="" />
                    </div>
                    {images.map((i) => (
                      <div key={i._id} className="position-relative mb-2">
                        <Image fluid rounded width="100%" src={i.url} alt="" />
                      </div>
                    ))}
                  </Slider>
                </Col>
                <Col xs={12} md={6}>
                  <div>{ReactHtmlParser(description)}</div>
                </Col>
                <Row>
                  <Col xs={12}>
                    {tags.map((t) => (
                      <Badge pill text="light" key={t._id} className="p-2 mx-1">
                        {t.label}
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

export function Portfolio({ hidden }) {
  if (hidden) return <div />;
  const [filter, setFilter] = useState('*');
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/projects?aggregated`)
      .then((r) => r.json())
      .then((v) => setProjects(v.data));
  }, []);

  const filterProjects = filter === '*' ? projects : projects.filter((p) => p.tags.find((v) => v._id === filter));

  return (
    <Container fluid className="pt-5 pb-3" id="portfolio">
      <Container>
        <SectionHeading bgText="Галерея" title="Портфолио" />
        {projects.length === 0 ? (
          <Row>
            <Col className="d-flex align-items-center justify-content-center">
              <h3>Пока ничего нет</h3>
            </Col>
          </Row>
        ) : (
          <>
            <TagSection filter={filter} setFilter={setFilter} />
            <Row className="portfolio-container">
              {filterProjects.length === 0 ? (
                <Col className="d-flex align-items-center justify-content-center">
                  <h3>Ничего не нашлось</h3>
                </Col>
              ) : (
                filterProjects.map((p) => <PortfolioItem key={p._id} {...p} />)
              )}
            </Row>
          </>
        )}
      </Container>
    </Container>
  );
}
