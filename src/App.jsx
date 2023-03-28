import './App.css';
import { useState } from 'react';
import { NavBar } from './pages/NavBar';
import { Header } from './pages/Header';
import { About } from './pages/About';
import { Qualification } from './pages/Qualification';
import { Skills } from './pages/Skills';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Testimonial } from './pages/Testimonial';
import { Blog } from './pages/Blog';
import { ContactForm } from './pages/ContactForm';
import { Footer } from './pages/Footer';

function App() {
  const [showNav, setVisibility] = useState(false);
  const links = [
    {
      title: 'Главная',
      link: '#home',
      hidden: false,
      component: <Header onIntersect={(v) => setVisibility(!v)} key="sect-home" />,
    },
    { title: 'Обо мне', link: '#about', hidden: false, component: <About key="sect-testimonial" /> },
    {
      title: 'Опыт',
      link: '#qualification',
      hidden: true,
      component: <Qualification key="sect-qualification" />,
    },
    { title: 'Навыки', link: '#skill', hidden: false, component: <Skills key="sect-skill" /> },
    {
      title: 'Услуги',
      link: '#service',
      hidden: true,
      component: <Services key="sect-service" />,
    },
    {
      title: 'Портфолио',
      link: '#portfolio',
      hidden: false,
      component: <Portfolio key="sect-portfolio" />,
    },
    {
      title: 'Отзывы',
      link: '#testimonial',
      hidden: true,
      component: <Testimonial key="sect-testimonial" />,
    },
    { title: 'Блог', link: '#blog', hidden: false, component: <Blog key="sect-blog" /> },
    {
      title: 'Связаться',
      link: '#contact',
      hidden: false,
      component: <ContactForm key="sect-contact" />,
    },
  ];
  // TODO: maybe Strapi for backend?
  // TODO: add component for recent github activity
  // TODO: Blog: change api url from demo to prod blog
  // TODO: Contact form: remove or add API?
  // TODO: "Hire me" buttons - add api
  // TODO: Analytics?
  // REFACTOR: remove unused imports, packages and assets
  // REFACTOR: minify `index.css`

  const navBarLinks = links.filter((l) => l.hidden !== true).map((l) => ({ title: l.title, link: l.link }));

  return (
    <div className="App" id="app">
      {/* <Provider value={client}> */}
      <NavBar hidden={!showNav} links={navBarLinks} />
      {links.filter((l) => l.hidden !== true).map((l) => l.component)}
      <Footer />
      {/* </Provider> */}
    </div>
  );
}

export default App;
