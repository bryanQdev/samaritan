import { NavBar } from '../components/NavBar'
import { DocumentCard } from '../components/DocumentCard'

export function Tablon() {
  const testDocuments = [
    {
      id: '1',
      photo: 'https://via.placeholder.com/300x200',
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
      photo: 'https://via.placeholder.com/300x200',
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
      photo: 'https://via.placeholder.com/300x200',
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
    <div className="bg-zinc-900 min-h-screen">
      <div className="border-b border-zinc-700 px-8 py-4">
        <NavBar />
      </div>
      <div className="max-w-6xl mx-auto px-8 py-10">
        <h2 className="text-white text-2xl font-bold mb-6">Documentos encontrados</h2>
        <div className="grid grid-cols-3 gap-6">
          {testDocuments.map((doc) => (
            <DocumentCard key={doc.id} document={doc} />
          ))}
        </div>
      </div>
    </div>
  )
}