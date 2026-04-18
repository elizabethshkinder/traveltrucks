"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCamperById, getCamperReviews } from "../../../lib/api";
import CamperInfo from "../../../components/camper-details/CamperInfo";
import CamperGallery from "../../../components/camper-details/CamperGallery";
import ReviewsList from "../../../components/camper-details/ReviewsList";
import BookingForm from "../../../components/camper-details/BookingForm";

interface CamperDetailsPageProps {
  params: Promise<{
    camperId: string;
  }>;
}

export default function CamperDetailsPage({
  params,
}: CamperDetailsPageProps) {
  const { camperId } = React.use(params);

  const {
    data: camper,
    isLoading: isCamperLoading,
    isError: isCamperError,
    error: camperError,
  } = useQuery({
    queryKey: ["camper", camperId],
    queryFn: () => getCamperById(camperId),
    enabled: Boolean(camperId),
  });

  const {
    data: reviews = [],
    isLoading: isReviewsLoading,
    isError: isReviewsError,
    error: reviewsError,
  } = useQuery({
    queryKey: ["reviews", camperId],
    queryFn: () => getCamperReviews(camperId),
    enabled: Boolean(camperId),
  });

  if (isCamperLoading) {
    return <p>Loading camper details...</p>;
  }

  if (isCamperError) {
    return <p>{(camperError as Error).message}</p>;
  }

  if (!camper) {
    return <p>Camper not found</p>;
  }

  return (
    <main style={{ padding: "40px" }}>
      <CamperInfo camper={camper} />

      <div style={{ marginTop: "32px" }}>
        <CamperGallery gallery={camper.gallery} />
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
        <div>
          {isReviewsLoading ? (
            <p>Loading reviews...</p>
          ) : isReviewsError ? (
            <p>{(reviewsError as Error).message}</p>
          ) : (
            <ReviewsList reviews={reviews} />
          )}
        </div>

        <BookingForm camperId={camperId} />
      </div>
    </main>
  );
}