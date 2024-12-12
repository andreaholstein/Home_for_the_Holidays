import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// --------- COMPONENTS ---------
import Header from './components/Header/Header';
// import ChooseMovie from "../../components/ChooseMovie";
// import Footer from "../../components/Footer";
// ------------ PAGES ------------
import HomePage from './components/HomePage/HomePage'
import RecoPage from "./Pages/RecoPage/RecoPage.jsx";
import './App.scss'
import HomePage from './components/HomePage/HomePage'
import Header from './components/Header/Header'



function App() {

  return (

    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/ChooseCategory" element={<ChooseMovie />}/> */}
          <Route path="/MovieToWatch" element={<RecoPage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>

  )
}

export default App
