import { DocumentRenderer } from '@keystone-6/document-renderer';
import { useQuery } from 'urql';
import { SectionHeading } from '../components/SectionHeading';

export function About({ hidden }) {
  if (hidden) return <div />;
  // const profile = undefined;

  const r = `
  query {
    profile {
      name,
      bioPhoto {
        url
      },
      bioHeader,
      bioProfile {
        document
      },
      degree,
      birth,
      experience,
      phone,
      email,
      address,
      freelancer
    }
  }`;

  const placeholder = <div className="container-fluid py-5" style={{ height: '550px' }} />;

  const [res] = useQuery({ query: r });
  const { data, fetching, error } = res;
  if (fetching) return placeholder;
  if (error) return placeholder;
  const { profile } = data;

  return (
    <div className="container-fluid py-5" id="about">
      <div className="container">
        <SectionHeading bgText="Обо мне" title="Обо мне" />
        <div className="row align-items-center">
          <div className="col-lg-5 pb-4 pb-lg-0">
            <img className="img-fluid rounded w-100" src={profile.bioPhoto.url} alt="" />
          </div>
          <div className="col-lg-7">
            <h3 className="mb-4">{profile.bioHeader ?? ''}</h3>
            {/* <ReactMarkdown remarkPlugins={[gfm]}>{data.profile.bioProfile.document}</ReactMarkdown> */}
            <DocumentRenderer document={profile.bioProfile.document ?? {}} />
            <div className="row mb-3">
              <div className="col-sm-6 py-2">
                <h6>
                  Имя: <span className="text-secondary">{profile.name ?? ''}</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  День рождения:{' '}
                  <span className="text-secondary">
                    {new Intl.DateTimeFormat('ru-RU').format(new Date(profile.birth ?? Date.now()))}
                  </span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Уровень: <span className="text-secondary">{profile.degree ?? ''}</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Опыт: <span className="text-secondary">{profile.experience ?? ''}</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Телефон: <span className="text-secondary">{profile.phone ?? ''}</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Email: <span className="text-secondary">{profile.email ?? ''}</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Адрес: <span className="text-secondary">{profile.address ?? ''}</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Фриланс: <span className="text-secondary">{profile.freelancer ? 'Беру заказы' : 'Недоступен'}</span>
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
