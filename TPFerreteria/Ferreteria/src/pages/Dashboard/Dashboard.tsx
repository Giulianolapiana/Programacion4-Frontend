import MainLayout from "../../components/layout/MainLayout";
import StatsCard from "../../components/common/StatsCard";

import { products } from "../../data/products";

import styles from "./Dashboard.module.css";

function Dashboard() {
    const lowStockProducts = products.filter((product) => product.stock < 5);

    return (
        <MainLayout>
        <div className={styles.dashboard}>
            <h1 className={styles.title}>Dashboard</h1>

            <div className={styles.cards}>
            <StatsCard title="Productos" value="120" />

            <StatsCard title="Ventas del día" value="25" />

            <StatsCard title="Clientes" value="48" />

            <StatsCard
                title="Stock bajo"
                value={lowStockProducts.length.toString()}
            />
            </div>

            <section className={styles.section}>
            <h2>Productos con poco stock</h2>

            <div className={styles.table}>
                {lowStockProducts.map((product) => (
                <div key={product.id} className={styles.row}>
                    <span>{product.name}</span>
                    <span>Stock: {product.stock}</span>
                </div>
                ))}
            </div>
            </section>
        </div>
        </MainLayout>
    );
}

export default Dashboard;
