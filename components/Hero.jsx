export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gray-100">
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <img 
        src="/api/placeholder/1920/1080" 
        alt="首頁背景" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="container mx-auto px-4 relative z-1 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">捕捉精彩瞬間</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">令人驚嘆的攝影，訴說您的故事</p>
        <button className="mt-8 px-6 py-3 bg-white text-black hover:bg-gray-200 rounded">
          查看畫廊
        </button>
      </div>
    </section>
  )
}
