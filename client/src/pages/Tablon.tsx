import { NavBar } from '../components/NavBar'
import { DocumentCard } from '../components/DocumentCard'
import { useEffect, useState } from 'react'
import { supabase } from '../supabase'
import type { FoundDocument } from '../types/document'
import { useSearch } from '../context/SearchContext'

export function Tablon() {
  const [documents, setDocuments] = useState<FoundDocument[]>([])
  const [loading, setLoading] = useState(true)
  const { search, filter } = useSearch()

  const filteredDocuments = documents.filter((doc)=> {
    const matchesSearch = search === '' ||
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.surname.toLowerCase(). includes(search.toLowerCase())
    const matchesFilter = filter === '' || doc.documentType === filter
    return matchesSearch && matchesFilter

  })


  useEffect(()=>{
    async function fetchDocuments(){
      const { data, error} = await supabase
    .from('documents')
    .select('*')
    .order('publication_date', {ascending: false})
  
      if (error) {
        console.error('Error al cargar documentos: ', error)

      } else {
        const mapped = data.map((doc: any) => ({
          id: doc.id,
          photo: doc.photo_url || 'https://placehold.co/300x200/3f3f46/ffffff?text=Documento',
          name: doc.name,
          surname: doc.surname,
          documentType: doc.document_type,
          location: doc.location,
          publicationDate: doc.publication_date,
          isRecovered: doc.is_recovered


        }))
        setDocuments(mapped)
      }
      setLoading(false)
    }
    fetchDocuments()
    }, [])


    return (
      <div className="bg-zinc-900 min-h-screen" style={{ background: 'linear-gradient(135deg, #09090b 0%, #0f172a 50%, #09090b 100%)'}}>
        <div className="md:px-8 px-4 py-4 navbar-blur">
          <NavBar/>
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          <div className="mb-10">
            <h2 className="text-white text-2xl font-bold mb-6">Documentos encontrados</h2>
            <p className="text-zinc-400 mb-6">Alguien los encontró. Puede que uno sea tuyo.</p>
            {loading ? (
              <p className="text-zinc-400">Cargando documentos...</p>
            ) : documents.length === 0 ? (
              <p className="text-zinc-400">No hay documentos publicados todavía.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDocuments.map((doc) => (
                  <DocumentCard key={doc.id} document={doc} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
}