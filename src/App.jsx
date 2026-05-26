import './App.css'
import Navbar from './components/Navbar';
import AboutMe from './sections/AboutMe';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Certification from './sections/Certification';
import ContactMe from './sections/contact/ContactMe';
import Hero from './sections/Hero';
import Projects from './sections/project/Project';
import TechStack from './sections/TechStack';
import Footer from './components/Footer';

function App() {

  const containerClass = "mx-5 p-5 shadow-sm border border-gray-800 backdrop-blur-lg bg-gray-700/10 rounded-2xl";
  const textGradientClass = "bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-purple-500";

  return (
    <div className="flex flex-col min-h-screen pt-3 bg-linear-to-r from-slate-900 via-gray-900 to-zinc-900
">
      <Navbar />
      <main className="flex flex-col grow">
        <Hero  textGradientClass={textGradientClass} />
        <AboutMe containerClass={containerClass} textGradientClass={textGradientClass} />
        <Projects containerClass={containerClass} textGradientClass={textGradientClass} />
        <TechStack containerClass={containerClass}  />
        <Experience containerClass={containerClass} textGradientClass={textGradientClass} />
        <Certification containerClass={containerClass} textGradientClass={textGradientClass} />
        <Education containerClass={containerClass} textGradientClass={textGradientClass} />
        <ContactMe containerClass={containerClass} textGradientClass={textGradientClass}/>
      </main>
      <Footer />
    </div>
  )
}

export default App
