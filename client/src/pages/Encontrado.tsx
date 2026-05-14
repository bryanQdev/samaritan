import { NavBar } from '../components/NavBar'
import { DocumentForm } from '../components/DocumentForm'
import type { FoundDocument } from '../types/document'

export function Encontrado() {
  function handleSubmit(document: FoundDocument) {
    console.log('Documento publicado:', document)
  }

  return (
    <div className="bg-zinc-900 min-h-screen">
      <div className="border-b border-zinc-700 px-8 py-4">
        <NavBar />
      </div>
      <div className="max-w-lg mx-auto px-8 py-10">
        <h1 className="text-white text-3xl font-bold mb-2">He encontrado un documento</h1>
        <p className="text-zinc-400 mb-8">Rellena el formulario para publicarlo en el tablón. El propietario podrá contactarte.</p>
        <DocumentForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}