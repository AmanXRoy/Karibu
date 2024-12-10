import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Footer from "./components/shared/Footer"
import Navbar from "./components/shared/Navbar"
import TopBanner from './components/shared/TopBanner'
import AllCompetition from "./pages/AllCompetition"
import Details from "./pages/Details"

function App() {

  return (
    <>
      <div className="main">
        <TopBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-competition" element={<AllCompetition />} />
          <Route path="/detail" element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App