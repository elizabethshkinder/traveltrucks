import Link from "next/link";
import Image from "next/image";
import type { Camper } from "../../../types/camper";
import styles from "./CamperCard.module.css";

interface CamperCardProps {
  camper: Camper;
}

export default function CamperCard({ camper }: CamperCardProps) {
  const previewImage = camper.gallery?.[0]?.thumb || camper.coverImage || "";

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {previewImage ? (
          <Image
            src={previewImage}
            alt={camper.name}
            fill
            className={styles.image}
            sizes="292px"
          />
        ) : (
          <div className={styles.imagePlaceholder}>No image</div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.topRow}>
          <h3 className={styles.title}>{camper.name}</h3>
          <p className={styles.price}>€{camper.price}</p>
        </div>

        <div className={styles.metaRow}>
          <span className={styles.metaItem}>★ {camper.rating}</span>
          <span className={styles.metaItem}>
            ({camper.totalReviews} Reviews)
          </span>
          <span className={styles.metaItem}>{camper.location}</span>
        </div>

        <p className={styles.description}>
          {camper.description.slice(0, 65)}...
        </p>

        <div className={styles.badges}>
          <span className={styles.badge}>{camper.engine}</span>
          <span className={styles.badge}>{camper.transmission}</span>
          <span className={styles.badge}>{camper.form}</span>
        </div>

        <Link href={`/catalog/${camper.id}`} className={styles.button}>
          Show more
        </Link>
      </div>
    </article>
  );
}