// importação de rotas
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home';
import UserPerson from './pages/user-person/User-person';
import Profissional from './pages/profissional/Profissional';
import Footer from './components/footer/Footer'


function App() {

  return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Routes>
            <Route path='/pessoa-usuaria' element={<UserPerson />} />
          </Routes>
          <Routes>
            <Route path='/profissional' element={<Profissional />} />
          </Routes>
          <Footer />
        </BrowserRouter>
  )
}

export default App
