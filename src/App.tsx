import './shared/styles/init.css'
import './App.css'
import Header from './shared/ui/header/header'
import Footer from './shared/ui/footer/footer'

function App() {
  return (
    <div className='app'>
      <Header />
      {/* <div className='container'>
        <div className="content">
        <h1>자주 묻는 질문<em>궁금하신 내용을 빠르게 찾아보세요.</em></h1>
        <i className="sticky-checker"/>
        <ul className="tabs">
          <li className="active">
            <a><span>서비스 도입</span></a>
          </li>
          <li>
            <a><span>서비스 이용</span></a>
            </li>
          </ul>
        </div>
      </div> */}
      <Footer />
    </div>
  )
}

export default App
