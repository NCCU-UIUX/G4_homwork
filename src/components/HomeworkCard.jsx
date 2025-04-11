import React from 'react';

const HomeworkCard = ({ homework }) => {
  return (
    <div className="artisan-card overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative">
        <a href={homework.link} target="_blank" rel="noopener noreferrer">
          <img 
            src={homework.imageUrl} 
            alt={`作業 ${homework.number}預覽`} 
            className="w-full h-60 object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="artisan-tag bg-accent-olive/80 text-white font-bold">
              HW{homework.number}
            </span>
          </div>
        </a>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-serif text-xl font-medium text-artisan-900 mb-2">{homework.title}</h3>
            <p className="text-artisan-600 text-sm">{homework.description}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center text-sm">
            {homework.status === 'completed' ? (
              <span className="text-accent-olive font-medium">已完成</span>
            ) : (
              <span className="text-accent-terracotta font-medium">待完成</span>
            )}
          </div>
          <a 
            href={homework.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="artisan-btn-outline !py-2 !px-4 text-sm"
          >
            查看作業
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeworkCard; 