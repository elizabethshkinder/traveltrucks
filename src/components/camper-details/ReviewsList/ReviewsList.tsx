import Rating from "@/components/shared/Rating/Rating";
import type { Review } from "../../../types/review";
import styles from "./ReviewsList.module.css";

interface ReviewsListProps {
  reviews: Review[];
}

export default function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Reviews</h2>

      {reviews.length === 0 ? (
        <p className={styles.message}>No reviews yet</p>
      ) : (
        <div className={styles.list}>
          {reviews.map((review) => (
            <article key={review.id} className={styles.card}>
              <div className={styles.header}>
                <div className={styles.avatar}>
                  {review.reviewer_name.charAt(0).toUpperCase()}
                </div>

                <div className={styles.meta}>
                  <h3 className={styles.name}>{review.reviewer_name}</h3>
                  <Rating rating={review.reviewer_rating} size={18} />
                </div>
              </div>

              <p className={styles.comment}>{review.comment}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}