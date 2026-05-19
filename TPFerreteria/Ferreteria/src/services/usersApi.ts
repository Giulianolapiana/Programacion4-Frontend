import { users } from '../data/users'
import type { User } from '../data/users'

export const fetchUsers = async (): Promise<User[]> => {
  return users
}

export const getUser = async (id: number): Promise<User | undefined> => users.find(u=>u.id===id)
