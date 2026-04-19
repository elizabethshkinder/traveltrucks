import CamperInfo from "../CamperInfo/CamperInfo";
import CamperGallery from "../CamperGallery/CamperGallery";
import ReviewsList from "../ReviewsList/ReviewsList";
import BookingForm from "../BookingForm/BookingForm";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
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
        <section className={styles.topSection}>
          <div className={styles.leftColumn}>
            <CamperGallery gallery={camper.gallery ?? []} />
          </div>

          <aside className={styles.rightColumn}>
            <div className={styles.infoBlock}>
            <CamperInfo camper={camper} />
            </div>
            <div className={styles.infoBlock}>
            <VehicleDetails camper={camper} />
            </div>
          </aside>
        </section>

        <section className={styles.bottomSection}>
          <div className={styles.reviewsColumn}>
            <h2 className={styles.sectionTitle}>Reviews</h2>

            {isReviewsLoading ? (
              <p className={styles.message}>Loading reviews...</p>
            ) : isReviewsError ? (
              <p className={styles.message}>
                {reviewsError?.message ?? "Failed to load reviews."}
              </p>
            ) : (
              <ReviewsList reviews={reviews} />
            )}
          </div>

          <div className={styles.formColumn}>
            <BookingForm camperId={camperId} />
          </div>
        </section>
      </div>
    </main>
  );
}