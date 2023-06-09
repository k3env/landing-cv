import { Button, Container } from 'react-bootstrap';

function SocialBtn({ social, user }) {
  let link = '';
  let icon = '';
  let iconCls;
  switch (social) {
    case 'tg':
      link = `https://t.me/${user}`;
      icon = 'fa-telegram';
      iconCls = 'fa-brands fa-telegram';
      break;
    case 'github':
      link = `https://github.com/${user}`;
      icon = 'fa-github';
      iconCls = 'fa-brands fa-github';
      break;
    default:
      link = '#';
      icon = 'fa-globe-in';
      break;
  }
  return (
    <Button as="a" variant="light" className="btn-social m-2" href={link}>
      <i className={iconCls ?? `fa-solid ${icon}`} />
    </Button>
  );
}
export function Footer() {
  return (
    <Container fluid className="bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
      <Container className="text-center py-5">
        <div className="d-flex justify-content-center mb-4">
          <SocialBtn social="tg" user="k3env" />
          <SocialBtn social="github" user="k3env" />
        </div>
        <p className="m-0">
          &copy;
          <a className="text-white font-weight-bold" href="/">
            K3env
          </a>
          . All Rights Reserved. Template by{' '}
          <a className="text-white font-weight-bold" href="https://htmlcodex.com">
            HTML Codex
          </a>
        </p>
      </Container>
    </Container>
  );
}
