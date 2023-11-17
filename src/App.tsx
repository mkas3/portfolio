import './app.scss';
import { Header } from './components/header/Header.tsx';
import { Hero } from './components/hero/Hero.tsx';
import { About } from './components/about/About.tsx';
import { useState } from 'react';
import { MotionValue } from 'framer-motion';
import { Works } from './components/works/Works.tsx';
import { Contacts } from './components/contacts/Contacts.tsx';

const App = () => {
  const [scroll, setScroll] = useState<MotionValue<number>>();
  return (
    <>
      <Header scroll={scroll} />
      <Hero onScroll={setScroll} />
      <About />
      <Works />
      <Contacts />
    </>
  );
};

export default App;
