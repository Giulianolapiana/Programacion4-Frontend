import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>Ferretería</h2>

      <nav className={styles.nav}>
        <NavLink to="/" end className={linkClass}>
          Dashboard
        </NavLink>
        <NavLink to="/products" className={linkClass}>
          Productos
        </NavLink>
        <NavLink to="/users" className={linkClass}>
          Usuarios
        </NavLink>
        <NavLink to="/clients" className={linkClass}>
          Clientes
        </NavLink>
        <NavLink to="/sales" className={linkClass}>
          Ventas
        </NavLink>
        <NavLink to="/stock" className={linkClass}>
          Stock
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;