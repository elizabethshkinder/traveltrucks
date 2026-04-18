import type { Review } from "../../types/camper";

interface ReviewsListProps {
  reviews: Review[];
}

export default function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <section>
      <h2>Reviews</h2>

      {reviews.length === 0 ? (
        <p>No reviews yet</p>
      ) : (
        reviews.map((review) => (
          <div
            key={review.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "12px",
              padding: "16px",
              marginBottom: "16px",
            }}
          >
            <h3>{review.reviewer_name}</h3>
            <p>Rating: {review.reviewer_rating}</p>
            <p>{review.comment}</p>
          </div>
        ))
      )}
    </section>
  );
}