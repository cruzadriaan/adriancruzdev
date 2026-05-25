import './App.css'
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import ContactMe from './components/ContactMe';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Footer from './components/Footer';

function App() {

  return (
    <div className="flex flex-col min-h-screen pt-3 bg-linear-to-r from-slate-900 via-gray-900 to-zinc-900
">
      <Navbar />
      <main className="flex flex-col grow">
        <Hero />
        <AboutMe />
        <Projects />
        <Education />
      </main>
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
