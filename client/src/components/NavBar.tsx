import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useAuth } from '../context/AuthContext'


export function NavBar() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')
  const { user } = useAuth()
  const navigate = useNavigate()

  async function handleSignOut() {
    await signOut(auth)
    navigate('/')
  }

  return (
    <nav className="flex items-center justify-between">
      <div>
        <Link to="/tablon" className="logo-glow text-xl">Samaritan</Link>
      </div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar por nombre y apellido..."
        className="bg-zinc-700 text-white px-4 py-2 rounded-lg w-64 placeholder-zinc-400"
      />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="bg-zinc-700 text-white px-4 py-2 rounded-lg"
      >
        <option value="">Todos</option>
        <option value="DNI">DNI</option>
        <option value="NIE">NIE</option>
        <option value="Pasaporte">Pasaporte</option>
        <option value="Tarjeta sanitaria">Tarjeta Sanitaria</option>
      </select>
      <div className="flex gap-4">
        <span className="text-zinc-400 cursor-pointer hover:text-white transition-colors">Mis publicaciones</span>
        <span className="text-zinc-400 cursor-pointer hover:text-white transition-colors">Ayuda</span>
      </div>
      <div className= "flex items-center gap-3">
        {user?.photoURL && (
          <img
            src={user.photoURL}
            alt={user.displayName || 'Usuario'}
            className= "w-8 h-8 rounded-full"
            />
        )}

      
      
      <Link to="/encontrado">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold">
          Publicar documento
        </button>
      </Link>
      <button 
      onClick={handleSignOut}
      className="text-zinc-400 hover:text-white text-sm transition-colors cursor-pointer"> 
        Cerrar sesión
      </button>
    </div>
    </nav>
  )
}