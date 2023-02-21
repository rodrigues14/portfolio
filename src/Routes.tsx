import { GlobalStyle } from "./components/GlobalStyle"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Habilidades from "./pages/Habilidades"
import Header from "./components/Header"
import Footer from "./components/Footer"

function AppRoutes() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habilidades" element={<Habilidades />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
