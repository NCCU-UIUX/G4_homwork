import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md shadow-artisan-sm z-10">
      <div className="artisan-container py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-16">
            <div className="logo font-serif text-2xl font-medium text-artisan-900">Artisan<span className="text-accent-terracotta">.</span></div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#home" className="text-artisan-700 hover:text-accent-terracotta transition-colors">首頁</a>
              <a href="#shop" className="text-artisan-700 hover:text-accent-terracotta transition-colors">商店</a>
              <a href="#categories" className="text-artisan-700 hover:text-accent-terracotta transition-colors">分類</a>
              <a href="#artisans" className="text-artisan-700 hover:text-accent-terracotta transition-colors">工匠</a>
              <a href="#about" className="text-artisan-700 hover:text-accent-terracotta transition-colors">關於</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Search Button */}
            <button className="p-2 text-artisan-700 hover:text-accent-terracotta transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            
            {/* Shopping Cart */}
            <button className="p-2 text-artisan-700 hover:text-accent-terracotta transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>
            
            {/* User Profile */}
            <button className="hidden sm:block p-2 text-artisan-700 hover:text-accent-terracotta transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 text-artisan-700 hover:text-accent-terracotta transition-colors"
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
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="lg:hidden bg-white py-6 px-4 shadow-artisan border-t border-artisan-100">
          <ul className="flex flex-col space-y-4">
            <li><a href="#home" onClick={() => setMenuOpen(false)} className="block text-artisan-700 hover:text-accent-terracotta transition-colors">首頁</a></li>
            <li><a href="#shop" onClick={() => setMenuOpen(false)} className="block text-artisan-700 hover:text-accent-terracotta transition-colors">商店</a></li>
            <li><a href="#categories" onClick={() => setMenuOpen(false)} className="block text-artisan-700 hover:text-accent-terracotta transition-colors">分類</a></li>
            <li><a href="#artisans" onClick={() => setMenuOpen(false)} className="block text-artisan-700 hover:text-accent-terracotta transition-colors">工匠</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)} className="block text-artisan-700 hover:text-accent-terracotta transition-colors">關於</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}