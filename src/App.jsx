import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Header from './components/Header/Header'


function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
