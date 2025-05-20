import '@/shared/common/ui/init.css'
import '@/App.css'
import Header from '@/shared/header/ui/header'
import Footer from '@/shared/footer/ui/footer'
import Faq from '@/pages/faq/ui/faq'

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='container'>
        <Faq />
      </div>
      <Footer />
    </div>
  )
}

export default App
