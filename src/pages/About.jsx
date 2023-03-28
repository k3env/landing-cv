// import { DocumentRenderer } from '@keystone-6/document-renderer';
import { useEffect, useState } from 'react';
// import { useQuery } from 'urql';
import ReactHtmlParser from 'react-html-parser';
import { SectionHeading } from '../components/SectionHeading';

export function About({ hidden }) {
  if (hidden) return <div />;

  const placeholder = <div className="container-fluid py-5" style={{ height: '550px' }} />;
  const [about, setAbout] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/profile')
      .then((response) => response.json())
      .then((a) => setAbout(a.data));
  }, []);
  if (about === null) {
    return placeholder;
  }

  return (
    <div className="container-fluid py-5" id="about">
      <div className="container">
        <SectionHeading bgText="Обо мне" title="Обо мне" />
        <div className="row align-items-center">
          <div className="col-lg-5 pb-4 pb-lg-0">
            <img
              className="img-fluid rounded w-100"
              src={`http://localhost:3000/public/${about.about_photo}.jpg`}
              alt=""
            />
          </div>
          <div className="col-lg-7">
            <h3 className="mb-4">{about.about_header ?? ''}</h3>
            {/* <ReactMarkdown remarkPlugins={[gfm]}>{data.profile.bioProfile.document}</ReactMarkdown> */}
            {/* <DocumentRenderer document={profile.bioProfile.document ?? {}} /> */}
            <div>{ReactHtmlParser(about.about_summary)}</div>
            <div className="row mb-3">
              <div className="col-sm-6 py-2">
                <h6>
                  Имя: <span className="text-secondary">{about.name ?? ''}</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  День рождения:{' '}
                  <span className="text-secondary">
                    {new Intl.DateTimeFormat('ru-RU').format(new Date(about.birth ?? Date.now()))}
                  </span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Уровень: <span className="text-secondary">{about.degree ?? ''}</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Опыт: <span className="text-secondary">{about.experience ?? ''}</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Телефон: <span className="text-secondary">{about.phone ?? ''}</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Email: <span className="text-secondary">{about.email ?? ''}</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Адрес: <span className="text-secondary">{about.address ?? ''}</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Фриланс: <span className="text-secondary">{about.freelancer ? 'Беру заказы' : 'Недоступен'}</span>
                </h6>
              </div>
            </div>
            <button type="button" className="btn btn-outline-primary mr-4">
              Нанять меня
            </button>
            <button type="button" className="btn btn-outline-primary">
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
