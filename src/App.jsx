import { Routes, Route, useLocation } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Footer from "./components/shared/Footer"
import Navbar from "./components/shared/Navbar"
import TopBanner from './components/shared/TopBanner'
import AllCompetition from "./pages/AllCompetition"
import Details from "./pages/Details"
import Login from "./components/Login/Login"
import LotteryDetails from "./pages/LotteryDetails"
import { useEffect } from "react"

function App() {
const pathName = useLocation()

useEffect(()=>{
  window.scrollTo(0,0)
},[pathName])
  return (
    <>
      <div className="main">
        <TopBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-competition" element={<AllCompetition />} />
          <Route path="/detail" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lotteryDetails" element={<LotteryDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
