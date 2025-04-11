import { useState } from 'react'
import Header from './components/header'
import Hero from './components/Hero'
import About from './components/About'
import Shop from './components/Shop'
import Artisans from './components/Artisans'
import Footer from './components/Footer'
import Categories from './components/Categories'

function App() {
  return (
    <div className="min-h-screen bg-artisan-50">
      <Header />
      <main>
        <Hero />
        <Shop />
        <Categories />
        <About />
        <Artisans />
      </main>
      <Footer />
    </div>
  )
}

export default App
