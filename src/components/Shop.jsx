import { useState } from 'react';
import ProductCard from './ProductCard';

// 產品資料
const products = [
  {
    id: 1,
    name: '手工編織竹籃',
    description: '精心編織的竹籃，實用且美觀，適合收納或裝飾。',
    price: 68.00,
    imageUrl: 'https://images.unsplash.com/photo-1603031612568-87ad8ae67252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: '編織工藝',
    artisan: '陳竹工作室',
    isNew: true
  },
  {
    id: 2,
    name: '手繪陶瓷杯組',
    description: '獨特的手繪陶瓷杯，每件作品皆獨一無二。',
    price: 42.50,
    imageUrl: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: '陶瓷藝術',
    artisan: '林陶坊',
    isNew: false
  },
  {
    id: 3,
    name: '天然染色亞麻圍巾',
    description: '使用植物染料手工染色的亞麻圍巾，觸感柔軟。',
    price: 78.00,
    imageUrl: 'https://images.unsplash.com/photo-1550376026-33cbee34f755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    category: '紡織品',
    artisan: '自然色工坊',
    isNew: true
  },
  {
    id: 4,
    name: '手工皮革筆記本',
    description: '採用優質皮革手工製作，每頁均為無酸紙。',
    price: 55.00,
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    category: '皮革製品',
    artisan: '老張皮坊',
    isNew: false
  },
  {
    id: 5,
    name: '手工木質餐盤',
    description: '使用天然木材手工雕刻，處理過的表面堅固耐用。',
    price: 89.90,
    imageUrl: 'https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80',
    category: '木工藝',
    artisan: '吳木匠',
    isNew: true
  },
  {
    id: 6,
    name: '金工手鍊',
    description: '手工打造的金屬手鍊，簡約而不失質感。',
    price: 120.00,
    imageUrl: 'https://images.unsplash.com/photo-1599459182681-c938b7208581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1998&q=80',
    category: '金工飾品',
    artisan: '金工坊',
    isNew: false
  }
];

// 分類選項
const categories = [
  { id: 'all', name: '全部' },
  { id: 'ceramic', name: '陶瓷' },
  { id: 'textile', name: '紡織' },
  { id: 'wood', name: '木工' },
  { id: 'leather', name: '皮革' },
  { id: 'metal', name: '金工' },
  { id: 'basket', name: '編織' }
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  return (
    <section id="shop" className="py-20 bg-white">
      <div className="artisan-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="artisan-title text-3xl sm:text-4xl mb-6">探索手工精品</h2>
          <p className="artisan-subtitle">
            每一件產品都經過工匠們的精心製作，融合傳統技藝與現代設計，為您帶來獨特的生活體驗。
          </p>
        </div>
        
        <div className="mb-10 overflow-x-auto">
          <div className="flex space-x-4 pb-2 min-w-max">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category.id 
                    ? 'bg-accent-terracotta text-white' 
                    : 'bg-artisan-100 text-artisan-700 hover:bg-artisan-200'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="artisan-btn-outline">
            瀏覽更多產品
          </button>
        </div>
      </div>
    </section>
  );
} 