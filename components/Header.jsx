import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo text-2xl font-bold">Your Name</div>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <a href="#home" className="hover:text-gray-600">首頁</a>
          <a href="#gallery" className="hover:text-gray-600">畫廊</a>
          <a href="#about" className="hover:text-gray-600">關於</a>
          <a href="#contact" className="hover:text-gray-600">聯絡</a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="lg:hidden bg-white py-4 px-4 shadow-md">
          <ul className="flex flex-col space-y-4">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>首頁</a></li>
            <li><a href="#gallery" onClick={() => setMenuOpen(false)}>畫廊</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>關於</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>聯絡</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}