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
import NotFound from "./pages/NotFound"

function AppRoutes() {
  const themeCurrent = localStorage.getItem("Theme dark")
  const checkTheme = (themeCurrent === "true" ? false : true )
  const [theme, setTheme] = useState(checkTheme);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
    localStorage.setItem("Theme dark", String(theme));
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme ? ThemeLight : ThemeDark}>
        <GlobalStyle />
        <BtnTheme onClick={toggleTheme}>
          <SwitcherTheme theme={theme} />
        </BtnTheme>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default AppRoutes
