// ---------- FXNALITY ----------
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// --------- COMPONENTS ---------
// import Header from "../../components/Header";
// import ChooseMovie from "../../components/ChooseMovie";
// import Footer from "../../components/Footer";
// ------------ PAGES ------------
import RecoPage from "./Pages/RecoPage/RecoPage.jsx";
// ----------- STYLES -----------
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Header from './components/Header/Header'



function App() {

  return (

    <>
      <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />}/> 
          {/* <Route path="/ChooseCategory" element={<ChooseMovie />}/> */}
          <Route path="/MovieToWatch" element={<RecoPage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>

  )
}

export default App
