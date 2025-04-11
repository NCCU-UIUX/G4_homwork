import React from 'react';

const artisans = [
  {
    id: 1,
    name: '陳竹工作室',
    specialty: '編織工藝',
    location: '台東',
    experience: '15+ 年經驗',
    imageUrl: 'https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    bio: '陳師傅專注於台灣傳統竹編技藝，將竹子轉化為實用與藝術兼具的作品。'
  },
  {
    id: 2,
    name: '林陶坊',
    specialty: '陶瓷藝術',
    location: '苗栗',
    experience: '20+ 年經驗',
    imageUrl: 'https://images.unsplash.com/photo-1590422749897-47036da0b0ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    bio: '林師傅傳承了三代的陶藝技術，作品融合傳統與現代美學，每件都獨具匠心。'
  },
  {
    id: 3,
    name: '自然色工坊',
    specialty: '紡織品',
    location: '花蓮',
    experience: '10+ 年經驗',
    imageUrl: 'https://images.unsplash.com/photo-1621600411688-4be93c2c1208?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    bio: '堅持使用天然染料和在地素材，創造具有獨特風格和文化底蘊的紡織品。'
  },
  {
    id: 4,
    name: '風格木工',
    specialty: '木工藝',
    location: '宜蘭',
    experience: '12+ 年經驗',
    imageUrl: 'https://images.unsplash.com/photo-1566895291281-ea63efd4a1b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    bio: '專注於永續理念的精細木工，每件作品都體現了對自然和工藝的尊重。'
  }
];

export default function Artisans() {
  return (
    <section id="artisans" className="py-20 bg-white">
      <div className="artisan-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="artisan-title text-3xl sm:text-4xl mb-6">匠人精神</h2>
          <p className="artisan-subtitle">
            認識我們的工匠團隊，他們用雙手和心靈創造每一件獨特的作品，傳承古老技藝，並融入現代創新。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {artisans.map(artisan => (
            <div key={artisan.id} className="flex flex-col sm:flex-row bg-white rounded-xl shadow-artisan overflow-hidden">
              <div className="sm:w-1/3">
                <img
                  src={artisan.imageUrl}
                  alt={artisan.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="sm:w-2/3 p-6">
                <span className="artisan-tag mb-2">{artisan.specialty}</span>
                <h3 className="font-serif text-xl font-medium text-artisan-900 mb-2">{artisan.name}</h3>
                <div className="flex items-center text-sm text-artisan-600 mb-4">
                  <span className="mr-3">{artisan.location}</span>
                  <span className="w-1 h-1 rounded-full bg-artisan-300 mr-3"></span>
                  <span>{artisan.experience}</span>
                </div>
                <p className="text-artisan-700 mb-4">{artisan.bio}</p>
                <button className="text-accent-terracotta text-sm font-medium hover:underline focus:outline-none">
                  查看作品集 →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-accent-sage/20 rounded-2xl p-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-2/3">
              <h3 className="font-serif text-2xl text-artisan-900 mb-4">成為Artisan平台的工匠</h3>
              <p className="text-artisan-700 mb-6">
                如果您是擁有獨特技藝的工匠，並希望將您的作品分享給更廣泛的愛好者，我們誠摯邀請您加入Artisan大家庭。
              </p>
              <button className="artisan-btn-secondary">
                申請加入
              </button>
            </div>
            <div className="lg:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1606913419164-5518fa7f5bf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="工匠製作過程" 
                className="rounded-xl shadow-artisan"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 