const HomeworkCard = ({ homework }) => {
  // Determine if an image should be displayed (using either image or posterLink)
  const displayImage = homework.image || homework.posterLink;
  const imageSrc = homework.image || homework.posterLink;
  
  // Helper function to get the display text based on homework ID
  const getDisplayText = (hw) => {
    if (hw.id === 6) return 'Final';
    if (hw.id === 7) return 'Revision Plan';
    return `HW${hw.number}`;
  };
  
  return (
    <div className="artisan-card overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative">
        <a href={homework.link} target="_blank" rel="noopener noreferrer">
          <div className={`w-full h-60 flex items-center justify-center ${
            homework.status === 'completed' 
              ? 'bg-accent-sage/70' 
              : 'bg-accent-terracotta'
          }`}>
            {displayImage ? (
              <img 
                src={imageSrc} 
                alt={homework.title} 
                className="w-full h-full object-cover" 
              />
            ) : (
              <span className="font-serif text-4xl font-bold text-white">
                {getDisplayText(homework)}
              </span>
            )}
          </div>
          <div className="absolute top-4 left-4">
            <span className={`artisan-tag ${
              homework.status === 'completed'
                ? 'bg-accent-olive/60 text-white'
                : 'bg-accent-olive/80 text-white'
            } font-bold`}>
              {getDisplayText(homework)}
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
          <div className="flex gap-2">
            <a 
              href={homework.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="artisan-btn-outline !py-2 !px-4 text-sm"
            >
              查看作業
            </a>
            {homework.posterLink && homework.posterLink !== homework.link && (
              <a 
                href={homework.posterLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="artisan-btn-outline !py-2 !px-4 text-sm bg-accent-sage/10"
              >
                查看海報
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeworkCard;