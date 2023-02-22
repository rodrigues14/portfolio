import { GlobalStyle } from "./components/GlobalStyle"
import { BrowserRouter } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import AnimatedRoutes from "./components/AnimatedRoutes"

function AppRoutes() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
        <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
