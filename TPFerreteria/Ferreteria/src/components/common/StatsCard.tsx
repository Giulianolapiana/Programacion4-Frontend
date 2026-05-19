import styles from "./StatsCard.module.css";

interface StatsCardProps {
    title: string;
    value: string;
}

function StatsCard({ title, value }: StatsCardProps) {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
}

export default StatsCard;