
import { Link,useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useAuth } from '../context/AuthContext'
import { useSearch } from '../context/SearchContext'


export function NavBar() {
  const {search, setSearch, filter, setFilter} = useSearch()
  const { user } = useAuth()
  const navigate = useNavigate()

  async function handleSignOut() {
    await signOut(auth)
    navigate('/')
  }

  return (
    <nav className="flex items-center justify-between gap-4">
      <div className="shrink-o">
        <Link to="/tablon" className="logo-glow text-xl">Samaritan</Link>
      </div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar por nombre y apellido..."
        className="hidden md:block bg-zinc-700 text-white px-4 py-2 rounded-lg lg:w-64 w-48 placeholder-zinc-400"
      />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="hidden md:block bg-zinc-700 text-white px-4 py-2 rounded-lg"
      >
        <option value="">Todos</option>
        <option value="DNI">DNI</option>
        <option value="NIE">NIE</option>
        <option value="Pasaporte">Pasaporte</option>
        <option value="Tarjeta sanitaria">Tarjeta Sanitaria</option>
      </select>
      <div className="flex intems-center gap-3 shrink-0">
        <span className="text-zinc-400 cursor-pointer hover:text-white transition-colors">Mis publicaciones</span>
        <span className="text-zinc-400 cursor-pointer hover:text-white transition-colors">Ayuda</span>
      </div>
      <div className= "flex items-center gap-3 shrink-0">
        {user?.photoURL && (
          <img
            src={user.photoURL}
            alt={user.displayName || 'Usuario'}
            className= "w-8 h-8 rounded-full hidden sm:block"
            />
        )}

      
      
      <Link to="/encontrado">
        <button className="bg-green-500 text-white px-3 py-2 rounded-lg font-semibold text-sm lg:text-base lg:px-4">
          Publicar documento
        </button>
      </Link>
      <button 
      onClick={handleSignOut}
      className="block text-zinc-400 hover:text-white text-sm transition-colors cursor-pointer"> 
        Cerrar sesión
      </button>
    </div>
    </nav>
  )
}