import { useState } from 'react';
import HomeworkCard from './HomeworkCard';

// 作業資料
const homeworks = [
  {
    id: 1,
    number: 1,
    title: 'CI report',
    description: '針對三位使用者研究訪談，了解他們的需求、行為和痛點。',
    link: 'https://docs.google.com/document/d/1v7YsPch3bgEbBd5LktYDhUAtXqHN3iacRB8Fa2dXZ20/edit?usp=sharing',
    status: 'completed'
  },
  {
    id: 2,
    number: 2,
    title: 'Affinity Diagram',
    description: '繪製 Affinity Diagram，分析核心需求。',
    link: 'https://miro.com/app/board/uXjVIDk0EyY=/',
    status: 'completed'
  },
  {
    id: 3,
    number: 3,
    title: 'HW3: 設計解決方案',
    description: '根據前期研究，提出創新的設計解決方案，並進行初步原型設計。',
    link: '#',
    status: 'pending'
  },
  {
    id: 4,
    number: 4,
    title: 'HW4: 原型測試與迭代',
    description: '進行用戶測試，收集反饋，並基於結果進行設計迭代與優化。',
    link: '#',
    status: 'pending'
  },
  {
    id: 5,
    number: 5,
    title: 'HW5: 最終設計展示',
    description: '呈現最終設計成果，包括高保真原型和完整的設計系統。',
    link: '#',
    status: 'pending'
  }
];

// 狀態選項
const statuses = [
  { id: 'all', name: '全部' },
  { id: 'completed', name: '已完成' },
  { id: 'pending', name: '待完成' }
];

export default function HomeworkCollection() {
  const [selectedStatus, setSelectedStatus] = useState('all');
  
  // 根據選擇的狀態篩選作業
  const filteredHomeworks = selectedStatus === 'all' 
    ? homeworks 
    : homeworks.filter(hw => hw.status === selectedStatus);
  
  return (
    <section id="homeworks" className="py-20 bg-white">
      <div className="artisan-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="artisan-title text-3xl sm:text-4xl mb-6">使用者體驗設計 - 作業展示</h2>
          <p className="artisan-subtitle">
            這裡展示了使用者體驗設計課程中的所有作業成果，點擊卡片可查看詳細內容。
          </p>
        </div>
        
        <div className="mb-10 overflow-x-auto">
          <div className="flex space-x-4 pb-2 min-w-max">
            {statuses.map(status => (
              <button
                key={status.id}
                className={`px-5 py-2 rounded-full text-sm transition-colors ${
                  selectedStatus === status.id 
                    ? 'bg-accent-terracotta text-white' 
                    : 'bg-artisan-100 text-artisan-700 hover:bg-artisan-200'
                }`}
                onClick={() => setSelectedStatus(status.id)}
              >
                {status.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHomeworks.map(homework => (
            <HomeworkCard key={homework.id} homework={homework} />
          ))}
        </div>
      </div>
    </section>
  );
} 