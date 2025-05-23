import '@/shared/styles/init.css'
import '@/shared/styles/common.css'
import '@/App.css'

import Header from '@/widgets/header/ui/header'
import Footer from '@/widgets/footer/ui/footer'
import Container from '@/widgets/container/ui/container'

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
