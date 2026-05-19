export type User = { id: number; name: string; email?: string }

export const users: User[] = [
  { id: 1, name: 'Admin', email: 'admin@local' },
  { id: 2, name: 'María Pérez', email: 'maria@correo.com' },
  { id: 3, name: 'Juan Gómez', email: 'juan@correo.com' }
]
