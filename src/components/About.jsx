import React from 'react';

export default function About() {
  const features = [
    {
      title: '匠心獨運',
      description: '每件產品均由專業工匠精心打造，注重細節與工藝。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      )
    },
    {
      title: '永續發展',
      description: '我們優先使用可持續材料，致力於環保與負責任的生產方式。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0"></path>
          <path d="M12 2v20"></path>
          <path d="m4.93 4.93 14.14 14.14"></path>
          <path d="M19.07 4.93 4.93 19.07"></path>
        </svg>
      )
    },
    {
      title: '文化傳承',
      description: '支持並傳承傳統工藝技術，促進文化多樣性與傳統價值。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18"></path>
          <path d="M3 12h18"></path>
          <path d="M3 18h18"></path>
        </svg>
      )
    },
    {
      title: '品質保證',
      description: '嚴格的品質控制流程，確保每件產品都達到最高標準。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 12 2 2 4-4"></path>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-20 bg-accent-cream">
      <div className="artisan-container">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="artisan-title text-3xl sm:text-4xl mb-6">關於Artisan</h2>
            <p className="artisan-subtitle mb-8">
              Artisan成立於2018年，致力於連接傳統工藝與現代消費者，為每位客戶提供獨特且有意義的手工藝品。
            </p>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1635340942297-1dd67792f12a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="工匠製作陶瓷" 
                className="rounded-2xl shadow-artisan w-full h-[400px] object-cover"
              />
              <div className="absolute -right-5 -bottom-5 bg-white shadow-artisan rounded-lg p-4 max-w-xs">
                <p className="font-serif text-lg italic text-artisan-900">
                  "我們相信每件手工藝品都訴說著一個故事，承載著工匠的熱情與文化的傳承。"
                </p>
                <p className="mt-2 text-sm text-artisan-600">— 王小明，創辦人</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h3 className="font-serif text-2xl text-artisan-900 mb-4">我們的理念</h3>
            <p className="text-artisan-600 mb-8">
              在這個快速變化的世界中，我們希望保存和發揚傳統工藝，同時為工匠創造可持續的生計。我們精心挑選每一位合作的工匠，確保他們的作品不僅展現卓越的工藝，更能與現代生活方式和審美相融合。
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-artisan-sm">
                  <div className="text-accent-terracotta mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-serif text-xl text-artisan-900 mb-2">{feature.title}</h4>
                  <p className="text-artisan-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <button className="artisan-btn-secondary">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
