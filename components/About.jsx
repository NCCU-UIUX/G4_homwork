export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img 
              src="/api/placeholder/600/600" 
              alt="攝影師" 
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">關於我</h2>
            <p className="text-lg text-gray-700 mb-4">
              你好！我是一位熱愛攝影的攝影師，致力於捕捉生活中最美麗的瞬間。
              擁有超過10年的經驗，我專注於人像、風景和活動攝影。
            </p>
            <p className="text-lg text-gray-700 mb-4">
              我的攝影理念是創造能講述故事並喚起情感的永恆影像。
              我相信每一刻都有其獨特的美，我努力在作品中捕捉這種美。
            </p>
            <p className="text-lg text-gray-700">
              當我不在相機後面時，你可以發現我在探索新地點，
              學習新技術，並從周圍的世界中尋找靈感。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
