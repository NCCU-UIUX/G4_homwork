import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md shadow-artisan-sm z-10">
      <div className="artisan-container py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-16">
            <div className="logo font-serif text-2xl font-medium text-artisan-900">UX<span className="text-accent-terracotta">Design</span></div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#homeworks" className="text-artisan-700 hover:text-accent-terracotta transition-colors">作業展示</a>
              <a href="https://github.com/NCCU-UIUX" target="_blank" rel="noopener noreferrer" className="text-artisan-700 hover:text-accent-terracotta transition-colors">課程 GitHub</a>
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
            <li><a href="#homeworks" onClick={() => setMenuOpen(false)} className="block text-artisan-700 hover:text-accent-terracotta transition-colors">作業展示</a></li>
            <li><a href="https://github.com/NCCU-UIUX" onClick={() => setMenuOpen(false)} target="_blank" rel="noopener noreferrer" className="block text-artisan-700 hover:text-accent-terracotta transition-colors">課程 GitHub</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}