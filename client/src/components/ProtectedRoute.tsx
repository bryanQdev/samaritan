import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="bg-zinc-900 min-h-screen flex items-center justify-center">
        <p className="text-zinc-400">Cargando...</p>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/" />
  }

  return <>{children}</>
}