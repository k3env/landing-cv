import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Slider from 'react-slick';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { useQuery } from 'urql';
import Badge from 'react-bootstrap/Badge';
import { SectionHeading } from '../components/SectionHeading';

function TagSection({ filter, setFilter }) {
  const r = `
  query {
    tags {
      id
      name
    }
  }`;

  const [res] = useQuery({ query: r });
  const { data, fetching, error } = res;
  if (error) return <div>{error.message}</div>;
  if (fetching) return <div />;

  const { tags } = data;

  return (
    <div className="row">
      <div className="col-12 text-center mb-2">
        <ul
          className="list-inline mb-4"
          id="portfolio-flters"
          onClick={(e) => setFilter(e.target.dataset.filter ?? filter)}
        >
          <FilterButton filter="*" label="Всё" active={filter === '*'} />
          {tags.map((f) => (
            <FilterButton key={f.id} filter={f.id} label={f.name} active={filter === f.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function PortfolioItem({ images, title, description, tags }) {
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
    <div className="col-lg-4 col-md-6 mb-4 portfolio-item">
      <div className="position-relative overflow-hidden mb-2">
        <img className="img-fluid rounded w-100" src={images[0].image.url} alt="" />
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
                        <img className="img-fluid rounded w-100" src={i.image.url} alt="" style={{ width: '100px' }} />
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
    </div>
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
  const r = `
  query($where: ProjectWhereInput!) {
    projects(where: $where) {
      id
      title
      images {
        id
        image {
          url
        }
      }
      tags {
        id
        name
      }
      description {
        document
      }
    }
  }`;

  const [filter, setFilter] = useState('*');
  const [res] = useQuery({
    query: r,
    variables: filter === '*' ? { where: {} } : { where: { tags: { some: { id: { equals: filter } } } } },
  });
  const { data, fetching, error } = res;

  if (error) return <div />;
  if (fetching) return <div />;

  return (
    <div className="container-fluid pt-5 pb-3" id="portfolio">
      <div className="container">
        <SectionHeading bgText="Галерея" title="Портфолио" />
        <TagSection filter={filter} setFilter={setFilter} />
        <div className="row portfolio-container">
          {data.projects.map((p) => (
            <PortfolioItem key={p.id} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
