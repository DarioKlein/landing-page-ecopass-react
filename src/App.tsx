import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Beneficios } from './pages/Beneficios'
import { PontosColeta } from './pages/PontosColeta'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-nos" element={<Beneficios />} />
      <Route path="/pontos-de-coleta" element={<PontosColeta />} />
    </Routes>
  )
}
