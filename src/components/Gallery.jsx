import PixelImage from './PixelImage';

export default function Gallery() {
  const photos = [
    { id: 1, pattern: 'landscape', alt: "自然風景", title: "自然" },
    { id: 2, pattern: 'character', alt: "像素人物", title: "人像" },
    { id: 3, pattern: 'geometric', alt: "幾何圖形", title: "城市" },
    { id: 4, pattern: 'random', alt: "隨機像素", title: "野生動物" },
    { id: 5, pattern: 'item', alt: "像素物品", title: "建築" },
    { id: 6, pattern: 'landscape', alt: "旅行風景", title: "旅行" },
  ]
  
  return (
    <section id="gallery" className="py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        <h2 className="pixel-title text-3xl font-bold text-center mb-12">畫廊</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map(photo => (
            <div key={photo.id} className="group pixel-box p-2 hover:-translate-y-1 transition-transform duration-300">
              <div className="relative overflow-hidden">
                <div className="w-full h-64">
                  <PixelImage 
                    width={400} 
                    height={300} 
                    pattern={photo.pattern} 
                    alt={photo.alt}
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-pixel">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}