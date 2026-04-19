import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "./Rating.module.css";

type RatingProps = {
  rating: number;
  reviews?: number;
  size?: number;
  showText?: boolean;
};

export default function Rating({
  rating,
  reviews,
  size = 16,
  showText = false,
}: RatingProps) {
  const roundedRating = Math.round(rating);

  return (
    <div className={styles.wrapper}>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((star) =>
          star <= roundedRating ? (
            <FaStar key={star} size={size} className={styles.filled} />
          ) : (
            <FaRegStar key={star} size={size} className={styles.empty} />
          )
        )}
      </div>

      {showText && (
        <span className={styles.text}>
          {rating.toFixed(1)}
          {reviews !== undefined ? ` (${reviews} Reviews)` : ""}
        </span>
      )}
    </div>
  );
}