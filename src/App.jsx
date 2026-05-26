import './App.css'
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Certification from './pages/Certification';
import ContactMe from './pages/ContactMe';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import TechStack from './pages/TechStack';
import Footer from './components/Footer';

function App() {

  const containerClass = "mx-5 p-5 border bg-gray-800/40 border-gray-600 rounded-2xl";

  return (
    <div className="flex flex-col min-h-screen pt-3 bg-linear-to-r from-slate-900 via-gray-900 to-zinc-900
">
      <Navbar />
      <main className="flex flex-col grow">
        <Hero />
        <AboutMe containerClass={containerClass} />
        <Projects containerClass={containerClass} />
        <TechStack containerClass={containerClass} />
        <Experience containerClass={containerClass} />
        <Certification containerClass={containerClass} />
        <Education containerClass={containerClass} />
        <ContactMe containerClass={containerClass}/>
      </main>
      <Footer />
    </div>
  )
}

export default App
