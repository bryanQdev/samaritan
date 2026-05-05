import { NavBar } from "./components/NavBar";
import { DocumentCard } from "./components/DocumentCard";

const testDocument = {
  id: '1',
  photo:'https://via.placeholder.com/300x200',
  name: 'Bryan',
  surname: 'Quispe',
  documentType: 'DNI',
  location: 'Madrid',
  expirationDate: '05-05-2028',
  publicationDate: '05-05-2026',
  isRecovered: false
}

function App(){
  return(
    <div className="bg-zinc-900 min-h-screen p-4">
      <NavBar/>
      <div className="mt-8 grid grid-cols-3 gap-4">
        <DocumentCard document={testDocument}/>
      </div>
    </div>
  )
}

export default App