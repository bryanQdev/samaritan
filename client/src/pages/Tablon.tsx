import { NavBar } from '../components/NavBar'
import { DocumentCard } from '../components/DocumentCard'

export function Tablon() {
  const testDocuments = [
    {
      id: '1',
      photo: 'https://placehold.co/300x200/3f3f46/ffffff?text=Documento',
      name: 'Juan',
      surname: 'García',
      documentType: 'DNI',
      location: 'Madrid',
      expirationDate: '2025-01-01',
      publicationDate: '2026-05-01',
      isRecovered: false
    },
    {
      id: '2',
      photo: 'https://placehold.co/300x200/3f3f46/ffffff?text=Documento',
      name: 'María',
      surname: 'López',
      documentType: 'Pasaporte',
      location: 'Barcelona',
      expirationDate: '2027-03-15',
      publicationDate: '2026-05-10',
      isRecovered: true
    },
    {
      id: '3',
      photo: 'https://placehold.co/300x200/3f3f46/ffffff?text=Documento',
      name: 'Carlos',
      surname: 'Martínez',
      documentType: 'NIE',
      location: 'Sevilla',
      expirationDate: '2026-08-20',
      publicationDate: '2026-05-12',
      isRecovered: false
    }
  ]

  return (
    <div className="bg-zinc-900 min-h-screen" style={{ background: 'linear-gradient(135deg, #09090b 0%, #0f172a 50%, #09090b 100%)'}}>
      <div className="px-8 py-4 navbar-blur">
        <NavBar/>
      </div>
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className= "mb-10">
          <h2 className="text-white text-2xl font-bold mb-6">Documentos encontrados</h2>
          <p className="text-white text-3x1 font-bold mb-2">Alguien los encontró. Puede que uno sea tuyo.</p>
        <div className="grid grid-cols-3 gap-6">
          {testDocuments.map((doc) => (
            <DocumentCard key={doc.id} document={doc} />
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}