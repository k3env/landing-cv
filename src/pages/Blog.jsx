import { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { SectionHeading } from '../components/SectionHeading';

function PostPreview({ pubdate, preview, title, link }) {
  const date = new Date(pubdate);
  const pDay = new Intl.DateTimeFormat('ru-RU', { day: '2-digit' }).format(date);
  const pMon = new Intl.DateTimeFormat('ru-RU', { month: 'short' }).format(date);
  return (
    <Col lg={4} className="mb-5">
      <div className="position-relative mb-4">
        <Image fluid rounded width="100%" src={preview} alt="" />
        <div className="blog-date">
          <h4 className="text-white font-weight-bold mb-n1">{pDay}</h4>
          <small className="text-white text-uppercase">{pMon}</small>
        </div>
      </div>
      <h5 className="font-weight-medium mb-4">{title}</h5>
      <Button as="a" size="sm" variant="outline-primary" className="py-2" href={link}>
        Читать
      </Button>
    </Col>
  );
}

export function Blog({ hidden }) {
  if (hidden) return <div />;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://blog.k3env.site/ghost/api/content/posts/?key=64ad4584f3d8b19543b58b1af8')
      .then((r) => r.json())
      .then((p) =>
        setPosts(
          p.posts
            .map((gp) => ({
              id: gp.id,
              title: gp.title,
              pubdate: gp.published_at,
              preview: gp.feature_image,
              link: gp.url,
            }))
            .sort((a, b) => a.pubdate - b.pubdate)
            .slice(0, 3),
        ),
      );
  }, []);
  return (
    <Container fluid className="pt-5" id="blog">
      <Container>
        <SectionHeading bgText="Блог" title="Последние посты" />
        <Row>
          {posts.length > 0 ? (
            posts.map((p) => <PostPreview key={p.id} {...p} />)
          ) : (
            <Col className="d-flex align-items-center justify-content-center">
              <h3>Ничего нет</h3>
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
}
