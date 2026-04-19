import CamperInfo from "../CamperInfo/CamperInfo";
import CamperGallery from "../CamperGallery/CamperGallery";
import ReviewsList from "../ReviewsList/ReviewsList";
import BookingForm from "../BookingForm/BookingForm";
import type { Camper } from "../../../types/camper";
import type { Review } from "../../../types/review";
import styles from "./CamperDetailsLayout.module.css";

interface CamperDetailsLayoutProps {
  camper: Camper;
  camperId: string;
  reviews: Review[];
  isReviewsLoading: boolean;
  isReviewsError: boolean;
  reviewsError: Error | null;
}

export default function CamperDetailsLayout({
  camper,
  camperId,
  reviews,
  isReviewsLoading,
  isReviewsError,
  reviewsError,
}: CamperDetailsLayoutProps) {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <CamperInfo camper={camper} />

        <div className={styles.gallerySection}>
          <CamperGallery gallery={camper.gallery} />
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.reviewsColumn}>
            {isReviewsLoading ? (
              <p className={styles.message}>Loading reviews...</p>
            ) : isReviewsError ? (
              <p className={styles.message}>{reviewsError?.message}</p>
            ) : (
              <ReviewsList reviews={reviews} />
            )}
          </div>

          <div className={styles.formColumn}>
            <BookingForm camperId={camperId} />
          </div>
        </div>
      </div>
    </main>
  );
}