import { useState } from 'react'
import PixelImage from './PixelImage'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    alert('感謝您的留言！我們會盡快回覆您。')
    setFormData({ name: '', email: '', message: '' })
  }
  
  return (
    <section id="contact" className="py-20 bg-warm-200">
      <div className="container mx-auto px-4">
        <h2 className="pixel-title text-3xl font-bold text-center mb-12">聯絡我們</h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="w-full">
            <div className="pixel-box p-2 bg-warm-100 mb-6">
              <PixelImage 
                width={400} 
                height={300} 
                pattern="geometric" 
                alt="聯絡我們的像素圖"
              />
            </div>
            <div className="pixel-box p-6 bg-warm-50">
              <h3 className="text-xl font-pixel text-warm-800 mb-4">或直接聯絡：</h3>
              <p className="text-warm-900 mb-2">email@example.com</p>
              <p className="text-warm-900">(123) 456-7890</p>
            </div>
          </div>
          
          <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-6 pixel-box p-6 bg-warm-50">
              <div>
                <label htmlFor="name" className="block text-warm-900 mb-2 font-bold">姓名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pixel-input w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-warm-900 mb-2 font-bold">電子郵件</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pixel-input w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-warm-900 mb-2 font-bold">留言</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="pixel-input w-full"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="pixel-btn w-full"
              >
                發送訊息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
