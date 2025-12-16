import React from 'react'
import Hero from '../sections/Hero'
import Tools from '../components/Tools';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Layout = () => {
  return (
    <div>
        <Hero />
        <Tools />
        <Projects />
        <Contact />
    </div>
  );
}

export default Layout