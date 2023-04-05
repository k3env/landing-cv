import './App.css';
import { useState } from 'react';
import {
  NavBar,
  Header,
  About,
  Qualification,
  Skills,
  Services,
  Portfolio,
  Testimonial,
  Blog,
  ContactForm,
  Footer,
} from './pages';

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
      hidden: true,
      component: <ContactForm key="sect-contact" />,
    },
  ];

  const navBarLinks = links.filter((l) => l.hidden !== true).map((l) => ({ title: l.title, link: l.link }));

  return (
    <div className="App" id="app">
      <NavBar hidden={!showNav} links={navBarLinks} />
      {links.filter((l) => l.hidden !== true).map((l) => l.component)}
      <Footer />
    </div>
  );
}

export default App;
