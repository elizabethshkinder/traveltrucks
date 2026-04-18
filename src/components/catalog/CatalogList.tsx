"use client";

import { useQuery } from "@tanstack/react-query";
import { getCampers } from "../../lib/api";
import CamperCard from "./CamperCard";

export default function CatalogList() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["campers"],
    queryFn: () => getCampers({ page: 1, perPage: 4 }),
  });

  if (isLoading) {
    return <p>Loading campers...</p>;
  }

  if (isError) {
    return <p>{(error as Error).message}</p>;
  }

  return (
    <section>
      <h2>Campers list</h2>

      {data?.campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </section>
  );
}