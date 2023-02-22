import { Routes, Route, useLocation } from 'react-router-dom'
import Habilidades from '../pages/Habilidades';
import Home from '../pages/Home';
import Projetos from '../pages/Projetos';

import { AnimatePresence } from 'framer-motion';

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </AnimatePresence>
  )
}
