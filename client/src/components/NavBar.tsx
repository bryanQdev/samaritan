import { useState } from 'react'
import { Link } from 'react-router-dom'

export function NavBar() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')

  return (
    <nav className="flex items-center justify-between">
      <div>
        <Link to="/tablon" className="text-white font-bold text-xl">Samaritan</Link>
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
        <span className="text-zinc-400 cursor-pointer">Mis publicaciones</span>
        <span className="text-zinc-400 cursor-pointer">Ayuda</span>
      </div>
      <Link to="/encontrado">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold">
          Publicar documento
        </button>
      </Link>
    </nav>
  )
}