import { createContext, useContext, useState} from 'react'

interface SearchContextType {
    search: string
    setSearch: (value: string) => void
    filter: string
    setFilter: (value: string) => void
}

const SearchContext = createContext<SearchContextType>({
    search: '',
    setSearch: () => {},
    filter: '',
    setFilter: () => {}
})

export function SearchProvider({ children }: {children: React.ReactNode}) {
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')

    return(
        <SearchContext.Provider value={{ search, setSearch, filter, setFilter}}>{children}</SearchContext.Provider>
    )
}

export function useSearch(){
    return useContext(SearchContext)
}