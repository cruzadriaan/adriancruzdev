import './App.css'
import Navbar from './components/Navbar';
import ContactMe from './components/ContactMe';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Footer from './components/Footer';

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 pt-3">
      <Navbar />
      <main className="flex flex-col grow">
              <Hero />
              <Projects />
      </main>
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
