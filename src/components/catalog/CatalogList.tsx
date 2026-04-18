"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getCampers } from "../../lib/api";
import CamperCard from "./CamperCard";
import LoadMoreButton from "./LoadMoreButton";

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
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["campers", location, form, engine, transmission],
    queryFn: ({ pageParam = 1 }) =>
      getCampers({
        page: pageParam,
        perPage: 4,
        location,
        form,
        engine,
        transmission,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return nextPage <= lastPage.totalPages ? nextPage : undefined;
    },
  });

  if (isLoading) {
    return <p>Loading campers...</p>;
  }

  if (isError) {
    return <p>{(error as Error).message}</p>;
  }

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  return (
    <section>
      <h2>Campers list</h2>

      {campers.length === 0 ? (
        <p>No campers found</p>
      ) : (
        campers.map((camper) => <CamperCard key={camper.id} camper={camper} />)
      )}

      {hasNextPage && (
        <div style={{ marginTop: "24px" }}>
          <LoadMoreButton
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            isLoading={isFetchingNextPage}
          />
        </div>
      )}
    </section>
  );
}