import { useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { useQuery } from 'urql';
import { useOnScreen } from '../hooks/useOnScreen';

export function Header({ onIntersect }) {
  const { ref, onScreen } = useOnScreen({
    threshold: 0.1,
    root: null,
  });
  const r = `
  query {
    profile {
      name,
      profilePhoto {
        url
      },
      labels
    }
  }`;
  const placeholder = (
    <div className="container-fluid bg-primary d-flex align-items-center mb-5 py-5" style={{ minHeight: '100vh' }} />
  );
  const [res] = useQuery({ query: r });
  const { data, fetching, error } = res;

  useEffect(() => {
    onIntersect(onScreen);
  }, [onScreen]);
  if (fetching) {
    return placeholder;
  }
  if (error) return placeholder;
  const { profile } = data;

  const ttLabels = profile.labels.split('\n'); // ['Web Developer', 'Front End Developer', 'Back End Developer', 'DevOps Engineer'];
  return (
    <div
      className="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
      id="home"
      style={{ minHeight: '100vh' }}
      ref={ref}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
            <img
              className="img-fluid w-100 rounded-circle shadow-sm"
              src={profile.profilePhoto.url ?? 'https://placehold.co/400'}
              alt=""
            />
          </div>
          <div className="col-lg-7 text-center text-lg-left">
            <h3 className="text-white font-weight-normal mb-3">I&apos;m</h3>
            <h1 className="display-3 text-uppercase text-primary mb-2" style={{ WebkitTextStroke: '2px #ffffff' }}>
              {profile.name ?? 'Please be patient'}
            </h1>
            <h1 className="typed-text-output d-inline font-weight-lighter text-white">
              <ReactTypingEffect text={ttLabels} eraseSpeed={50} eraseDelay={1000} typingDelay={500} speed={100} />
            </h1>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
              <a href="/" className="btn btn-outline-light mr-lg-5">
                Резюме <i className="fa-solid fa-download" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
