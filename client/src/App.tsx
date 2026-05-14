import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Tablon } from  './pages/Tablon'
import { Login } from './pages/Login'
import { Encontrado } from './pages/Encontrado'
import { Chat } from './pages/Chat'
import { NotFound} from './pages/NotFound'
import { Footer } from './components/Footer'
function App() {
  return (
    <BrowserRouter>
    <div className= "bg-zinc-900 min-h-screen">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/tablon" element={<Tablon/>} />
        <Route path="/encontrado" element={<Encontrado/>} />
        <Route path="/chat/:id" element={<Chat/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
      </div>

    </BrowserRouter>
  )
}

export default App