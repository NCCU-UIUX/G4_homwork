import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} G4 Project. 版權所有。</p>
      </footer>
    </div>
  )
}

export default App
