
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/main/Main'


function App() {

  return (
    <>
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
        <Header />
        <Main />
        <Footer/>
      </div>
    </>
  )
}

export default App
