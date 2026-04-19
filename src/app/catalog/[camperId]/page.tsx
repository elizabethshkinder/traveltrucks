"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCamperById, getCamperReviews } from "../../../lib/api";
import CamperDetailsLayout from "../../../components/camper-details/CamperDetailsLayout/CamperDetailsLayout";

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
    <CamperDetailsLayout
      camper={camper}
      camperId={camperId}
      reviews={reviews}
      isReviewsLoading={isReviewsLoading}
      isReviewsError={isReviewsError}
      reviewsError={(reviewsError as Error) ?? null}
    />
  );
}