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
  return (
    <form>
        <input type="text" value={name} placeholder="Nombre" />
        <input type="text" value={surname} placeholder="Apellido" />
        <input type="text" value={documentType} placeholder="Tipo de documento" />
       <input type="file" accept="image/jpeg, image/png, image/jpg"  />
      
    </form>
  )
}