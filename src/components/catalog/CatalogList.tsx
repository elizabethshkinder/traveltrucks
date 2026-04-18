"use client";

import { useQuery } from "@tanstack/react-query";
import { getCampers } from "../../lib/api";
import CamperCard from "./CamperCard";

interface CatalogListProps {
  location: string;
  form: string;
  engine: string;
  transmission: string;
}

export default function CatalogList({
  location,
  form,
  engine,
  transmission,
}: CatalogListProps) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["campers", location, form, engine, transmission],
    queryFn: () =>
      getCampers({
        page: 1,
        perPage: 4,
        location,
        form,
        engine,
        transmission,
      }),
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

      {data?.campers.length === 0 ? (
        <p>No campers found</p>
      ) : (
        data?.campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))
      )}
    </section>
  );
}