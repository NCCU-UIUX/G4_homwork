import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-artisan-900 text-artisan-100 py-12">
      <div className="artisan-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="mb-5">
              <div className="font-serif text-2xl font-medium text-white">UX<span className="text-accent-terracotta">Design</span></div>
              <p className="mt-2 text-artisan-300 text-sm">使用者體驗設計 作業展示網站</p>
            </div>
            <p className="text-artisan-300 text-sm mb-6">
              這個網站展示了使用者體驗設計課程中的各項作業成果，包括訪談記錄、使用者旅程地圖、原型設計等。
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/NCCU-UIUX" target="_blank" rel="noopener noreferrer" className="text-artisan-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-5">課程資源</h4>
            <ul className="space-y-3">
              <li><a href="#homeworks" className="text-artisan-300 hover:text-white text-sm transition-colors">所有作業</a></li>
              <li><a href="https://docs.google.com/document/d/1genyyEITWd0_jrnLkpz_9qlEijjGo5yF/edit" target="_blank" rel="noopener noreferrer" className="text-artisan-300 hover:text-white text-sm transition-colors">登山受眾訪談紀錄</a></li>
              <li><a href="https://miro.com/app/welcome/?requested_url=/app/board/uXjVIDk0EyY=/" target="_blank" rel="noopener noreferrer" className="text-artisan-300 hover:text-white text-sm transition-colors">用戶旅程與痛點分析</a></li>
              <li><a href="https://github.com/NCCU-UIUX" target="_blank" rel="noopener noreferrer" className="text-artisan-300 hover:text-white text-sm transition-colors">課程 GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-artisan-800 flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-artisan-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} 使用者體驗設計課程作業展示網站，保留所有權利。
          </p>
        </div>
      </div>
    </footer>
  );
} 