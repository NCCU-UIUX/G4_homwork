import Header from "./components/Header.jsx"; 
import HomeworkCollection from './components/HomeworkCollection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-artisan-50">
      <Header />
      <main>
        <HomeworkCollection />
      </main>
      <Footer />
    </div>
  )
}

export default App
