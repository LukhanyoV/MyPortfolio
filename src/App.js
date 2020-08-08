import React, {Fragment} from 'react';

import MyNavbar from './components/layout/MyNavbar';
import MyHero from './components/layout/MyHero';
import Footer from './components/layout/Footer';

import About from './components/pages/About';
import Profiles from './components/pages/Profiles';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Testimonial from './components/pages/Testimonial';
import './App.css';

function App() {
  return (
    <Fragment>
      <MyNavbar />
      <MyHero />
      <About />
      <Skills />
      <Projects />
      <Profiles />
      <Testimonial />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
