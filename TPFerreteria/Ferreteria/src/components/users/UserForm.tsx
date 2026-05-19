import React, { useState } from 'react'
import styles from './UserForm.module.css'

export default function UserForm(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submit = (e:any) => {
    e.preventDefault()
    // placeholder: aquí se llamaría al service para crear usuario
    setName('')
    setEmail('')
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Nombre" />
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">Crear</button>
    </form>
  )
}
