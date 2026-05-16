import { NavBar } from '../components/NavBar'
import { DocumentForm } from '../components/DocumentForm'
import type { FoundDocument } from '../types/document'
import { supabase } from '../supabase'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export function Encontrado() {
  const { user } =useAuth()
  const navigate = useNavigate()

  async function handleSubmit(document: FoundDocument) {
    const { error } = await supabase
    .from('documents')
    .insert({
      name: document.name,
      surname: document.surname,
      document_type: document.documentType,
      location: document.location,
      photo_url: document.photo,
      publication_date: document.publicationDate,
      is_recovered: false,
      user_id: user?.uid
    })  


  if (error){
    console.error('Error al publicar: ', error)
  } else {
    navigate('/tablon')
  }
  }

  return (
    <div className="bg-zinc-900 min-h-screen">
      <div className="navbar-blur px-8 py-4">
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