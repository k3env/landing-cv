import { SectionHeading } from '../components/SectionHeading';

export function ContactForm({ hidden }) {
  if (hidden) return <div />;
  return (
    <div className="container-fluid py-5" id="contact">
      <div className="container">
        <SectionHeading bgText="Связаться" title="Связаться со мной" />
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form text-center">
              <div id="success" />
              <form name="sentMessage" id="contactForm" noValidate="novalidate">
                <div className="form-row">
                  <div className="control-group col-sm-6">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="name"
                      placeholder="Имя"
                      required="required"
                      data-validation-required-message="Введите Ваше имя"
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group col-sm-6">
                    <input
                      type="email"
                      className="form-control p-4"
                      id="email"
                      placeholder="Email"
                      required="required"
                      data-validation-required-message="Введите Ваш контактный email"
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control p-4"
                    id="subject"
                    placeholder="Тема"
                    required="required"
                    data-validation-required-message="Введите тему"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control py-3 px-4"
                    rows="5"
                    id="message"
                    placeholder="Сообщение"
                    required="required"
                    data-validation-required-message="Введите Ваше сообщение"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div>
                  <button className="btn btn-outline-primary" type="button" id="sendMessageButton">
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
