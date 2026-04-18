"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCamperById } from "../../../lib/api";
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

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["camper", camperId],
    queryFn: () => getCamperById(camperId),
    enabled: Boolean(camperId),
  });

  if (isLoading) {
    return <p>Loading camper details...</p>;
  }

  if (isError) {
    return <p>{(error as Error).message}</p>;
  }

  if (!data) {
    return <p>Camper not found</p>;
  }

  return (
    <main style={{ padding: "40px" }}>
      <CamperInfo camper={data} />

      <div style={{ marginTop: "32px" }}>
        <CamperGallery gallery={data.gallery} />
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