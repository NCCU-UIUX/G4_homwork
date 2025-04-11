import Header from "./components/Header.jsx"; 
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Shop from './components/Shop.jsx'
import Artisans from './components/Artisans.jsx'
import Footer from './components/Footer.jsx'
import Categories from './components/Categories.jsx'

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
