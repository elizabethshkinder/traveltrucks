import CamperInfo from "../../../components/camper-details/CamperInfo";
import CamperGallery from "../../../components/camper-details/CamperGallery";
import ReviewsList from "../../../components/camper-details/ReviewsList";
import BookingForm from "../../../components/camper-details/BookingForm";

export default function CamperDetailsPage() {
  return (
    <main style={{ padding: "40px" }}>
      <CamperInfo />

      <div style={{ marginTop: "32px" }}>
        <CamperGallery />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 400px",
          gap: "32px",
          marginTop: "40px",
          alignItems: "start",
        }}
      >
        <ReviewsList />
        <BookingForm />
      </div>
    </main>
  );
}