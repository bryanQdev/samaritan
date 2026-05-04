import type {FoundDocument} from '../types/document'

interface Props {
    document: FoundDocument
}

export function DocumentCard({document}:Props){
    return (
        <div className="bg-zinc-800 rounded-xl overflow-hidden">
            <div className="relative">
                <img src={document.photo} alt = {`Este documento es de ${document.name} ${document.surname}`}
                className="w-full h-48 object-cover" />
                {document.isRecovered &&(<span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">Recuperado</span>)}
            </div>
            <div className="p-4">
                <h3>{document.documentType} encontrado en {document.location}</h3>
            
                <p className="text-zinc-400 text-sm mt-1">{document.publicationDate} • {document.location}</p>
                <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg font-semibold">Contactar</button>
            </div>
            <p>{document.name}</p>
            <p>{document.surname}</p>
            <p>{document.documentType}</p>
            <p>{document.location}</p>
            <p>{document.expirationDate}</p>
            <p>{document.publicationDate}</p>
        </div>
    )
}