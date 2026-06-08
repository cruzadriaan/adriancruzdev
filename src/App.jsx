import './App.css'
import Navbar from './components/Navbar';
import AboutMe from './sections/AboutMe';
import ContactDetails from './sections/contact/ContactDetails';
import Hero from './sections/Hero';
import Projects from './sections/project/Project';
import TechStack from './sections/TechStack';
import ResumeGrid from './groupings/ResumeGrid';
import FloatingIcons from './components/FloatingButtons';
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
    <div className="font-poppins relative z-0 flex flex-col min-h-screen bg-linear-to-r from-slate-900 via-gray-900 to-zinc-900
">
      <Navbar />
      <FloatingIcons />
      <main className="flex flex-col grow">
        <Element name="hero"><Hero containerClass={containerClass} hardTextGradient={hardTextGradient} mediumTextGradient={mediumTextGradient} /></Element>
        <Element name="aboutme"><AboutMe containerClass={containerClass} mediumTextGradient={mediumTextGradient} softTextGradient={softTextGradient} /></Element>
        <Element name="project"><Projects containerClass={containerClass}  mediumTextGradient={mediumTextGradient} softTextGradient={softTextGradient} /></Element>
        <Element name="techstack"><TechStack containerClass={containerClass} /></Element>
        <ResumeGrid containerClass={containerClass} mediumTextGradient={mediumTextGradient} />
        <Element name="contact"><ContactDetails containerClass={containerClass} hardTextGradient={hardTextGradient} /></Element>
      </main>
      <Footer />
    </div>
  )
}

export default App
