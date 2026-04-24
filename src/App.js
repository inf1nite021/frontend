import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';

function App() {
  const [page, setPage] = useState('home');
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') !== 'light');
  const [lang, setLang] = useState('de');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const goHome = () => { setPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  if (page === 'impressum') return <><Navbar darkMode={darkMode} toggleDark={() => setDarkMode(d => !d)} lang={lang} setLang={setLang} /><Impressum goHome={goHome} /></>;
  if (page === 'datenschutz') return <><Navbar darkMode={darkMode} toggleDark={() => setDarkMode(d => !d)} lang={lang} setLang={setLang} /><Datenschutz goHome={goHome} /></>;

  return (
    <>
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(d => !d)} lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <Contact lang={lang} />
      <Footer setPage={setPage} lang={lang} />
    </>
  );
}

export default App;