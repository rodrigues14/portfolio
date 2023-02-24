import { GlobalStyle } from "./components/GlobalStyle"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeProvider } from 'styled-components'
import { ThemeDark, ThemeLight } from "./components/UI/themes"
import { BtnTheme } from "./components/UI"
import SwitcherTheme from "./components/SwitcherTheme"
import { useState } from 'react';
import Home from "./pages/Home"
import Habilidades from "./pages/Habilidades"
import Projetos from "./pages/Projetos"

function AppRoutes() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme ? ThemeLight : ThemeDark}>
        <GlobalStyle />
        <BtnTheme onClick={toggleTheme}>
          <SwitcherTheme theme={theme} />
        </BtnTheme>
        <Header />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default AppRoutes
