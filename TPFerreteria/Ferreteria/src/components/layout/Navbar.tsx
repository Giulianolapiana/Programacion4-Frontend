import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <header className={styles.navbar}>
            <h1>Panel Administrativo</h1>
            <div className={styles.user}>
                <span>Don Roberto</span>
            </div>
        </header>
    );
}

export default Navbar;