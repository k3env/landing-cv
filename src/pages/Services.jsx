import { SectionHeading } from '../components/SectionHeading';

export function Services({ hidden }) {
  if (hidden) return <div />;
  return (
    <div className="container-fluid pt-5" id="service">
      <div className="container">
        <SectionHeading bgText="Услуги" title="Услуги" />
        <div className="row pb-3">
          <div className="col-lg-4 col-md-6 text-center mb-5">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <i className="fa fa-2x fa-laptop service-icon bg-primary text-white mr-3" />
              <h4 className="font-weight-bold m-0">Web Design</h4>
            </div>
            <p>
              Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore
              eirmod erat clita
            </p>
            <a className="border-bottom border-primary text-decoration-none" href="">
              Read More
            </a>
          </div>
          <div className="col-lg-4 col-md-6 text-center mb-5">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <i className="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3" />
              <h4 className="font-weight-bold m-0">Web Development</h4>
            </div>
            <p>
              Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore
              eirmod erat clita
            </p>
            <a className="border-bottom border-primary text-decoration-none" href="">
              Read More
            </a>
          </div>
          <div className="col-lg-4 col-md-6 text-center mb-5">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <i className="fab fa-2x fa-android service-icon bg-primary text-white mr-3" />
              <h4 className="font-weight-bold m-0">Apps Design</h4>
            </div>
            <p>
              Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore
              eirmod erat clita
            </p>
            <a className="border-bottom border-primary text-decoration-none" href="">
              Read More
            </a>
          </div>
          <div className="col-lg-4 col-md-6 text-center mb-5">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <i className="fab fa-2x fa-apple service-icon bg-primary text-white mr-3" />
              <h4 className="font-weight-bold m-0">Apps Development</h4>
            </div>
            <p>
              Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore
              eirmod erat clita
            </p>
            <a className="border-bottom border-primary text-decoration-none" href="">
              Read More
            </a>
          </div>
          <div className="col-lg-4 col-md-6 text-center mb-5">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <i className="fa fa-2x fa-search service-icon bg-primary text-white mr-3" />
              <h4 className="font-weight-bold m-0">SEO</h4>
            </div>
            <p>
              Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore
              eirmod erat clita
            </p>
            <a className="border-bottom border-primary text-decoration-none" href="">
              Read More
            </a>
          </div>
          <div className="col-lg-4 col-md-6 text-center mb-5">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <i className="fa fa-2x fa-edit service-icon bg-primary text-white mr-3" />
              <h4 className="font-weight-bold m-0">Content Creating</h4>
            </div>
            <p>
              Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore
              eirmod erat clita
            </p>
            <a className="border-bottom border-primary text-decoration-none" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
