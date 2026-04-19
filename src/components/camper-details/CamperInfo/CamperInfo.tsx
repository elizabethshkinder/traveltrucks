import type { Camper } from "../../../types/camper";
import styles from "./CamperInfo.module.css";

interface CamperInfoProps {
  camper: Camper;
}

export default function CamperInfo({ camper }: CamperInfoProps) {
  return (
    <section className={styles.section}>
      <div className={styles.topRow}>
        <h1 className={styles.title}>{camper.name}</h1>
        <p className={styles.price}>€{camper.price}</p>
      </div>

      <div className={styles.meta}>
        <p className={styles.metaItem}>Rating: {camper.rating}</p>
        <p className={styles.metaItem}>{camper.location}</p>
      </div>

      <p className={styles.description}>{camper.description}</p>
    </section>
  );
}