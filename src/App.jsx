import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/navbar';
import { Home } from './pages/Home';
import { Apply } from './pages/Apply';
import { Simulator } from './pages/Simulator';


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Simulador" element={<Simulator/>} />
        <Route path="Solicitar" element={<Apply/>} />
      </Routes>

      <Footer/>
      
    </BrowserRouter>
    
  )
}

export default App

