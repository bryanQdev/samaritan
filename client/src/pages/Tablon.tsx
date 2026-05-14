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
      <NavBar />
      <div className="p-8 grid grid-cols-3 gap-6">
      {testDocuments.map((doc) => (
  <DocumentCard key={doc.id} document={doc} />
))}
        
      </div>
    </div>
  )
}