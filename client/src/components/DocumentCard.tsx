import { Link } from 'react-router-dom'
import type { FoundDocument } from '../types/document'

interface Props {
  document: FoundDocument
}

export function DocumentCard({ document }: Props) {
  return (
    <div className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700/50 hover: border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 card-glow"
      style={{ background: 'linear-gradient(145deg, #1c1c1f, #141416)'}}>
      <div className="relative">
        <img
          src={document.photo}
          alt={`Este documento es de ${document.name} ${document.surname}`}
          className="w-full h-48 object-cover opacity-90"
        />
        {document.isRecovered && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Recuperado
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg">{document.documentType} encontrado en {document.location}</h3>
        <p className="text-zinc-500 text-sm mt-1">{document.publicationDate} • {document.location}</p>
        <Link to={`/chat/${document.id}`}>
          <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg font-semibold transition-all duration-300 btn-gradient">
            Contactar
          </button>
        </Link>
      </div>
    </div>
  )
}