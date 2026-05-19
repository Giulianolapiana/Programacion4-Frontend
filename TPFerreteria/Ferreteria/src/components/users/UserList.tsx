import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../services/usersApi'
import styles from './UserList.module.css'

type User = { id: number; name: string; email?: string }

export default function UserList(){
  const [users, setUsers] = useState<User[]>([])

  useEffect(()=>{
    fetchUsers().then(setUsers)
  },[])

  return (
    <div className={styles.list}>
      {users.map(u => (
        <div key={u.id} className={styles.row}>
          <div>{u.name}</div>
          <div className={styles.email}>{u.email}</div>
        </div>
      ))}
    </div>
  )
}
