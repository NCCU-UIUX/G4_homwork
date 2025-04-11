import React from 'react';

const categories = [
  {
    id: 'ceramic',
    name: '陶瓷',
    description: '獨特的手工陶瓷作品，從日常用品到藝術品。',
    imageUrl: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    count: 48
  },
  {
    id: 'textile',
    name: '紡織',
    description: '手工織布、刺繡和印染的布藝作品。',
    imageUrl: 'https://images.unsplash.com/photo-1588185395873-e91981f3ccf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    count: 32
  },
  {
    id: 'wood',
    name: '木工',
    description: '精緻的木工製品，從家具到小巧的日用品。',
    imageUrl: 'https://images.unsplash.com/photo-1533228705496-072ca298b122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    count: 56
  },
  {
    id: 'basket',
    name: '編織',
    description: '傳統技藝編織的籃子、帽子和其他實用品。',
    imageUrl: 'https://images.unsplash.com/photo-1559196617-0fe529f2143e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    count: 25
  },
  {
    id: 'leather',
    name: '皮革',
    description: '精心手工製作的皮革商品，注重細節和品質。',
    imageUrl: 'https://images.unsplash.com/photo-1531553430733-935f366768d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    count: 27
  },
  {
    id: 'metal',
    name: '金工',
    description: '精美的金屬工藝品和首飾，工藝與藝術的結合。',
    imageUrl: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    count: 18
  }
];

export default function Categories() {
  return (
    <section id="categories" className="py-20 bg-accent-cream">
      <div className="artisan-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="artisan-title text-3xl sm:text-4xl mb-6">探索工藝類別</h2>
          <p className="artisan-subtitle">
            尋找各種精湛的手工藝品類別，每一類別都展現了獨特的工藝技術和傳統。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <div 
              key={category.id} 
              className="relative rounded-xl overflow-hidden shadow-artisan group hover:shadow-artisan-lg transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
              <img 
                src={category.imageUrl} 
                alt={category.name} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="font-serif text-xl text-white mb-2">{category.name}</h3>
                <p className="text-white/80 text-sm mb-3 line-clamp-2">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-white/90 text-sm">{category.count} 件商品</span>
                  <button className="bg-white/20 hover:bg-white/30 text-white text-sm py-1 px-3 rounded-full backdrop-blur-sm transition-colors">
                    瀏覽
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 