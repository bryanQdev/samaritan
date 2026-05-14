import { NavBar } from '../components/NavBar'
import { DocumentForm } from '../components/DocumentForm'
import type { FoundDocument } from '../types/document'

export function Encontrado() {
  function handleSubmit(document: FoundDocument) {
    console.log('Documento publicado:', document)
  }

  return (
    <div className="bg-zinc-900 min-h-screen">
      <NavBar />
      <div className="max-w-lg mx-auto p-8">
        <h1 className="text-white text-3xl font-bold mb-8">He encontrado un documento</h1>
        <DocumentForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}