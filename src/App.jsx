import './App.css'
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Footer from './components/Footer';

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 pt-3">
      <Navbar />
      <main className="flex grow">
              <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App
