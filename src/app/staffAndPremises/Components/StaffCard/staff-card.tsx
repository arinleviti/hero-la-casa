import Image from 'next/image';
import styles from './staff-card.module.css';
import { StaffCard } from '../../../Services/staffPremises';

export default function StaffFunc({ imageUrl, name, description }: StaffCard) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className={styles.image}
                    priority
                />
            </div>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
}
