import type { Camper } from "../../../types/camper";
import Rating from "../../shared/Rating/Rating";
import styles from "./CamperInfo.module.css";

interface CamperInfoProps {
  camper: Camper;
}

export default function CamperInfo({ camper }: CamperInfoProps) {
  const reviewsCount =
  typeof camper.reviews === "number" ? camper.reviews : 0;

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{camper.name}</h1>

      <div className={styles.metaRow}>
        <div className={styles.ratingBlock}>
          <Rating
            rating={camper.rating}
            reviews={reviewsCount}
            size={16}
            showText
            variant="compact"
          />
        </div>

        <div className={styles.locationBlock}>
          <svg className={styles.mapIcon} aria-hidden="true">
            <use href="/sprite.svg#icon-map" />
          </svg>
          <span className={styles.metaText}>{camper.location}</span>
        </div>
      </div>

      <p className={styles.price}>€{camper.price}</p>

      <p className={styles.description}>{camper.description}</p>
    </section>
  );
}