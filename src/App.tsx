import '@/shared/common/ui/init.css'
import '@/shared/common/ui/common.css'
import '@/App.css'

import Header from '@/shared/header/ui/header'
import Footer from '@/shared/footer/ui/footer'
import Container from '@/pages/container/ui/container'

function App() {
  return (
    <div className='app'>
      <Header />
      <Container />
      <Footer />
    </div>
  )
}

export default App
