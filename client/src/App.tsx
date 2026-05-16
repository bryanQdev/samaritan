import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Tablon } from  './pages/Tablon'
import { Login } from './pages/Login'
import { Encontrado } from './pages/Encontrado'
import { Chat } from './pages/Chat'
import { NotFound} from './pages/NotFound'
import { Footer } from './components/EntidadesColaboradoras'
import { AuthProvider } from './context/AuthContext'
import { ProtectedRoute } from './components/ProtectedRoute' 
function App() {
  return (
  <AuthProvider>
    <BrowserRouter>
    <div className= "bg-zinc-900 min-h-screen">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/tablon" element={<ProtectedRoute><Tablon/></ProtectedRoute>} />
        <Route path="/encontrado" element={<ProtectedRoute><Encontrado/> </ProtectedRoute>} />
        <Route path="/chat/:id" element={<ProtectedRoute><Chat/></ProtectedRoute>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
      </div>  

    </BrowserRouter>
    </AuthProvider>
  )
}
  
export default App