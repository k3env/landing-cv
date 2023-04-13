import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { SectionHeading } from '../components/SectionHeading';

export function ContactForm({ hidden }) {
  if (hidden) return <div />;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: 'onChange' });
  const onSubmit = (data) =>
    fetch('http://localhost:3300/feedback', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
  return (
    <Container fluid className="py-5" id="contact">
      <Container>
        <SectionHeading bgText="Связаться" title="Связаться со мной" />
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="contact-form text-center">
              <div id="success" />
              <Form name="sentMessage" onSubmit={handleSubmit(onSubmit)}>
                <Row className="pb-4">
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Control
                        className="p-2 px-4"
                        type="text"
                        placeholder="Имя"
                        {...register('name', { required: true })}
                      />
                      {errors.name && <p className="help-block text-danger">Введите Ваше имя</p>}
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Control
                        className="p-2 px-4"
                        type="email"
                        placeholder="Email"
                        {...register('email', { required: true })}
                      />
                      {errors.email && <p className="help-block text-danger">Введите Ваш контактный е-маил</p>}
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="pb-3">
                  <Col>
                    <Form.Group>
                      <Form.Control
                        as="textarea"
                        className="p-2 px-4"
                        rows="5"
                        placeholder="Сообщение"
                        {...register('message', { required: true })}
                      />
                      {errors.message && <p className="help-block text-danger">Введите Ваше сообщение</p>}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="outline-primary" type="submit">
                      Отправить
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
