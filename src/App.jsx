import './App.css'
import Navbar from './components/Navbar';
import AboutMe from './sections/AboutMe';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Certification from './sections/Certification';
import ContactForm from './sections/contact/ContactForm';
import Hero from './sections/Hero';
import Projects from './sections/project/Project';
import TechStack from './sections/TechStack';
import Footer from './components/Footer';
import { Element } from 'react-scroll';
import { useEffect } from 'react';

function App() {

  useEffect(() => {

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  }, []);

  const containerClass = "mx-5 p-5 shadow-sm border border-gray-800 backdrop-blur-lg bg-gray-700/10 rounded-2xl";
  const hardTextGradient = "bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-purple-500";
  const mediumTextGradient = "bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400";
  const softTextGradient = "bg-clip-text text-transparent bg-linear-to-r from-blue-300 to-purple-300";

  return (
    <div className="relative z-0 flex flex-col min-h-screen bg-linear-to-r from-slate-900 via-gray-900 to-zinc-900
">
      <Navbar />
      <main className="flex flex-col grow">
        <Element name="hero"><Hero hardTextGradient={hardTextGradient} mediumTextGradient={mediumTextGradient} /></Element>
        <Element name="aboutme"><AboutMe containerClass={containerClass} mediumTextGradient={mediumTextGradient} softTextGradient={softTextGradient} /></Element>
        <Element name="project"><Projects containerClass={containerClass}  mediumTextGradient={mediumTextGradient} softTextGradient={softTextGradient} /></Element>
        <Element name="techstack"><TechStack containerClass={containerClass} /></Element>
        <Element name="experience"><Experience containerClass={containerClass} mediumTextGradient={mediumTextGradient} /></Element>
        <Element name="certification"><Certification containerClass={containerClass} mediumTextGradient={mediumTextGradient} /></Element>
        <Element name="education"><Education id="education" containerClass={containerClass} /></Element>
        <Element name="contact"><ContactForm containerClass={containerClass} hardTextGradient={hardTextGradient} /></Element>
      </main>
      <Footer />
    </div>
  )
}

export default App
