import Link from "next/link";
import Image from "next/image";
import type { Camper } from "../../../types/camper";
import Rating from "../../shared/Rating/Rating";
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
          <Rating
            rating={camper.rating}
            reviews={camper.totalReviews}
            showText
          />

          <div className={styles.metaItem}>
            <svg
              className={styles.metaIcon}
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use href="/sprite.svg#icon-map" />
            </svg>
            <span>{camper.location}</span>
          </div>
        </div>

        <p className={styles.description}>
          {camper.description.slice(0, 65)}...
        </p>

        <div className={styles.badges}>
          <span className={styles.badge}>
            <svg
              className={styles.badgeIcon}
              width="20"
              height="20"
              aria-hidden="true"
            >
              <use href="/sprite.svg#icon-petrol" />
            </svg>
            {camper.engine}
          </span>

          <span className={styles.badge}>
            <svg
              className={styles.badgeIcon}
              width="20"
              height="20"
              aria-hidden="true"
            >
              <use href="/sprite.svg#icon-automatic" />
            </svg>
            {camper.transmission}
          </span>

          <span className={styles.badge}>
            <svg
              className={styles.badgeIcon}
              width="20"
              height="20"
              aria-hidden="true"
            >
              <use href="/sprite.svg#icon-camper" />
            </svg>
            {camper.form}
          </span>
        </div>

        <Link href={`/catalog/${camper.id}`} className={styles.button}>
          Show more
        </Link>
      </div>
    </article>
  );
}