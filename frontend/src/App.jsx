import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
const App = () => {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h2>About</h2>} />
        <Route path="/contact" element={<h2>Contact</h2>} />
        <Route path="/success" element={<h2>Success</h2>} />
        <Route path="/error" element={<h2>Error</h2>} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App