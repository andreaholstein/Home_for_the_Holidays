// ---------- FXNALITY ----------
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage'
import RecoPage from "./Pages/RecoPage/RecoPage.jsx";
import CategoryPage from './Pages/CategoryPage/CategoryPage.jsx';
// ----------- STYLES -----------
import './App.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ChooseCategory" element={<CategoryPage />} />
          <Route path="/MovieToWatch" element={<RecoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
