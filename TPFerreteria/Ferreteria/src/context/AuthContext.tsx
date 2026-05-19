import { createContext, useState, type ReactNode } from 'react'

type User = { id: number; name: string } | null

interface AuthContextValue {
  user: User
  setUser: (u: User) => void
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null)
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
