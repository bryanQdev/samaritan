import { useState } from 'react'
import type { FoundDocument } from '../types/document'

interface Props {
  onSubmit: (document: FoundDocument) => void
}

export function DocumentForm({ onSubmit }: Props) {
    const[name, setName] = useState('')
    const[surname, setSurname] = useState('')
    const[documentType, setDocumentType] = useState('')
    const[documentPhoto, setDocumentPhoto] = useState<File | null>(null)
    const[location, setLocation] = useState('')

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        onSubmit({
          id: '',
          photo: '',
          name,
          surname,
          documentType,
          location,
          expirationDate: '',
          publicationDate: new Date().toLocaleDateString(),
          isRecovered: false
        })
      }


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder="Nombre"
        onChange={(e) => setName(e.target.value)} />
        <input type="text" value={surname} placeholder="Apellido"
        onChange={(e) => setSurname(e.target.value)} />
       <input type="file" accept="image/jpeg, image/png, image/jpg" 
       onChange={(e) => setDocumentPhoto(e.target.files?.[0] || null)}/>
       <select
       value={documentType}
       onChange={(e) => setDocumentType(e.target.value)} >
           <option value="DNI">DNI</option>
           <option value="NIE">NIE</option>
           <option value="Pasaporte">Pasaporte</option>
           <option value="Tarjeta sanitaria">Tarjeta Sanitaria</option>
   </select>
       <input type="text" value={location} placeholder="Ubicación"
       onChange={(e) => setLocation(e.target.value)} />

       <button type="submit">Publicar documento</button>   
      
    </form>
  )
}