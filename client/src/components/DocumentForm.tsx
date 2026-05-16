import { useState } from 'react'
import type { FoundDocument } from '../types/document'
import { supabase } from '../supabase'

interface Props {
  onSubmit: (document: FoundDocument) => void
}

export function DocumentForm({ onSubmit }: Props) {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [documentType, setDocumentType] = useState('')
  const [documentPhoto, setDocumentPhoto] = useState<File | null>(null)
  const [location, setLocation] = useState('')
  const [uploading,setUploading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setUploading(true)
    
    let photoUrl = ''

    if(documentPhoto){
      const fileName = `${Date.now()}-${documentPhoto.name}`
      const { error: uploadError } =await supabase.storage
        .from('documents')
        .upload(fileName, documentPhoto)

      if(uploadError){
        console.error('Error al subir foto:', uploadError)
      } else{
        const { data } = supabase.storage
        .from('documents')
        .getPublicUrl(fileName)
      photoUrl = data.publicUrl
      }
    }
    onSubmit({
      id: '',
      photo: photoUrl,
      name,
      surname,
      documentType,
      location,
      publicationDate: new Date().toLocaleDateString(),
      isRecovered: false
    })
  }

  const inputClass = "w-full bg-zinc-700 text-white placeholder-zinc-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
      <input
        type="text"
        value={name}
        placeholder="Nombre"
        onChange={(e) => setName(e.target.value)}
        className={inputClass}
      />
      <input
        type="text"
        value={surname}
        placeholder="Apellido"
        onChange={(e) => setSurname(e.target.value)}
        className={inputClass}
      />
      <input
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        onChange={(e) => setDocumentPhoto(e.target.files?.[0] || null)}
        className="text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-zinc-600 file:text-white"
      />
      <select
        value={documentType}
        onChange={(e) => setDocumentType(e.target.value)}
        className={inputClass}
      >
        <option value="DNI">DNI</option>
        <option value="NIE">NIE</option>
        <option value="Pasaporte">Pasaporte</option>
        <option value="Tarjeta sanitaria">Tarjeta Sanitaria</option>
      </select>
      <input
        type="text"
        value={location}
        placeholder="Ubicación"
        onChange={(e) => setLocation(e.target.value)}
        className={inputClass}
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
      >
        Publicar documento
      </button>
    </form>
  )
}