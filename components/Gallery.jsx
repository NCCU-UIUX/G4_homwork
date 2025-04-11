export default function Gallery() {
  const photos = [
    { id: 1, src: "/api/placeholder/600/400", alt: "照片 1", title: "自然" },
    { id: 2, src: "/api/placeholder/600/400", alt: "照片 2", title: "人像" },
    { id: 3, src: "/api/placeholder/600/400", alt: "照片 3", title: "城市" },
    { id: 4, src: "/api/placeholder/600/400", alt: "照片 4", title: "野生動物" },
    { id: 5, src: "/api/placeholder/600/400", alt: "照片 5", title: "建築" },
    { id: 6, src: "/api/placeholder/600/400", alt: "照片 6", title: "旅行" },
  ]
  
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">畫廊</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map(photo => (
            <div key={photo.id} className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}