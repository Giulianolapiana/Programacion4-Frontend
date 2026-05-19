import MainLayout from '../../components/layout/MainLayout'
import UserList from '../../components/users/UserList'
import styles from './Users.module.css'

export default function Users(){
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Usuarios</h1>
        <UserList />
      </div>
    </MainLayout>
  )
}
