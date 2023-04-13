import { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import { useOnScreen } from '../hooks/useOnScreen';

export function Header({ onIntersect }) {
  const { ref, onScreen } = useOnScreen({
    threshold: 0.1,
    root: null,
  });
  const placeholder = (
    <Container fluid className="bg-primary d-flex align-items-center mb-5 py-5" style={{ minHeight: '100vh' }} />
  );

  useEffect(() => {
    onIntersect(onScreen);
  }, [onScreen]);
  const [profile, load] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/profile?aggregated=true`)
      .then((response) => response.json())
      .then((a) => load(a.data));
  }, []);
  if (profile === null) {
    return placeholder;
  }

  const ttLabels = ['Web Developer', 'Front End Developer', 'Back End Developer', 'DevOps Engineer'];
  return (
    <Container
      fluid
      className="bg-primary d-flex align-items-center mb-5 py-5"
      id="home"
      style={{ minHeight: '100vh' }}
      ref={ref}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="px-5 pl-lg-0 pb-5 pb-lg-0">
            <Image fluid roundedCircle width="100%" className="shadow-sm" src={profile.profilePhoto.url} alt="" />
          </Col>
          <Col lg={7} className="text-center text-lg-start">
            <h3 className="text-white font-weight-normal mb-3">I&apos;m</h3>
            <h1
              className="heading-name display-3 text-uppercase text-primary mb-2"
              style={{ WebkitTextStroke: '1.5px #ffffff' }}
            >
              {profile.name}
            </h1>
            <h1 className="typed-text-output d-inline font-weight-lighter text-white">
              <ReactTypingEffect text={ttLabels} eraseSpeed={50} eraseDelay={1000} typingDelay={500} speed={100} />
            </h1>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
              <Button as="a" variant="outline-light" href="/" className="mr-lg-5">
                Резюме <i className="fa-solid fa-download" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
