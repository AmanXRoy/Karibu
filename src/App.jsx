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
import Winner from "./components/Winner/Winner"
import Faq from "./components/Faq/Faq"
import Privacy from "./components/Privacy/Privacy"
import PurchaseTicket from "./components/purchaseTicket/PurchaseTicket"
import VerifyOTP from "./components/Login/verifyOTP/VerifyOTP"

function App() {
  const pathName = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathName])
  return (
    <>
      <div className="main">
        <TopBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-competition" element={<AllCompetition />} />
          <Route path="/detail" element={<Details />} />
          <Route path="/all-competition/detail" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lotteryDetails" element={<LotteryDetails />} />
          <Route path="/winner" element={<Winner />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacypolicy" element={<Privacy />} />
          <Route path="/purchaseticket" element={<PurchaseTicket />} />
          <Route path="/verifyotp" element={<VerifyOTP />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
