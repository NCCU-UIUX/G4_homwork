import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="artisan-card">
      <div className="relative">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-80 object-cover"
        />
        <div className="absolute top-4 left-4">
          {product.isNew && (
            <span className="artisan-tag bg-accent-terracotta/10 text-accent-terracotta">新品</span>
          )}
        </div>
        <div className="absolute top-4 right-4">
          <button className="p-2 rounded-full bg-white/80 hover:bg-white text-artisan-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <span className="artisan-tag mb-2">{product.category}</span>
            <h3 className="font-serif text-xl font-medium text-artisan-900 mb-2">{product.name}</h3>
            <p className="text-artisan-600 text-sm">{product.description}</p>
          </div>
          <span className="font-mono text-lg font-medium text-accent-terracotta">${product.price.toFixed(2)}</span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center text-sm">
            <span className="text-artisan-500 mr-1">由</span>
            <span className="font-medium text-artisan-800">{product.artisan}</span>
          </div>
          <button className="artisan-btn-outline !py-2 !px-4 text-sm">
            加入購物車
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 