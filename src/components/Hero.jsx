import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-accent-cream relative overflow-hidden">
      <div className="artisan-container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div className="max-w-xl">
              <p className="text-accent-terracotta font-medium mb-4 tracking-wider">精選手工藝品</p>
              <h1 className="artisan-title text-4xl md:text-5xl lg:text-6xl mb-6">
                發現精湛工藝與<br />
                <span className="text-accent-terracotta">永恆設計</span>
              </h1>
              <p className="artisan-subtitle text-lg mb-8 max-w-lg">
                探索我們精選的手工藝品，每一件作品都承載著工匠們的悉心工藝和創意靈感，為您的生活空間注入獨特魅力。
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="artisan-btn">
                  開始購物
                </button>
                <button className="artisan-btn-outline">
                  了解工匠
                </button>
              </div>
              
              <div className="mt-12 flex items-center space-x-8">
                <div className="text-center">
                  <p className="font-serif text-2xl font-medium text-artisan-900">100+</p>
                  <p className="text-artisan-600 text-sm">精選工匠</p>
                </div>
                <div className="h-10 w-px bg-artisan-200"></div>
                <div className="text-center">
                  <p className="font-serif text-2xl font-medium text-artisan-900">500+</p>
                  <p className="text-artisan-600 text-sm">獨特作品</p>
                </div>
                <div className="h-10 w-px bg-artisan-200"></div>
                <div className="text-center">
                  <p className="font-serif text-2xl font-medium text-artisan-900">50+</p>
                  <p className="text-artisan-600 text-sm">工藝類別</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-artisan">
              <img 
                src="https://images.unsplash.com/photo-1594125312266-59836383cd26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                alt="手工陶瓷作品" 
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="artisan-tag bg-white/80 text-accent-terracotta">精選作品</span>
                <h3 className="text-white font-serif text-2xl mt-2">手工陶瓷花瓶系列</h3>
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-white/90 text-sm">李明哲工作室</p>
                  <span className="font-mono text-white/90">$120.00 起</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 -right-20 -bottom-20 w-64 h-64 rounded-full bg-accent-terracotta/10"></div>
            <div className="absolute -z-10 -left-10 -top-10 w-40 h-40 rounded-full bg-accent-olive/10"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute -z-10 right-0 bottom-0 w-1/3 h-1/3 bg-accent-sage/20 -skew-x-12"></div>
    </section>
  );
}
