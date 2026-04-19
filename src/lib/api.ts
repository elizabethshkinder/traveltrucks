import clientApi from "./clientApi";
import type { BookingPayload, BookingResponse } from "../types/booking";
import type { Camper, CampersParams, CampersResponse } from "../types/camper";
import type { Review } from "../types/review";

function buildQuery(params: CampersParams): string {
  const searchParams = new URLSearchParams();

  if (params.page !== undefined) {
    searchParams.set("page", String(params.page));
  }

  if (params.perPage !== undefined) {
    searchParams.set("perPage", String(params.perPage));
  }

  if (params.location) {
    searchParams.set("location", params.location);
  }

  if (params.form) {
    searchParams.set("form", params.form);
  }

  if (params.transmission) {
    searchParams.set("transmission", params.transmission);
  }

  if (params.engine) {
    searchParams.set("engine", params.engine);
  }

  return searchParams.toString();
}

export async function getCampers(
  params: CampersParams = {}
): Promise<CampersResponse> {
  const query = buildQuery(params);
  const url = query ? `/campers?${query}` : "/campers";

  const { data } = await clientApi.get<CampersResponse>(url);
  return data;
}

export async function getCamperById(camperId: string): Promise<Camper> {
  const { data } = await clientApi.get<Camper>(`/campers/${camperId}`);
  return data;
}

export async function getCamperReviews(camperId: string): Promise<Review[]> {
  const { data } = await clientApi.get<Review[]>(`/campers/${camperId}/reviews`);
  return data;
}

export async function createBookingRequest(
  camperId: string,
  bookingData: BookingPayload
): Promise<BookingResponse> {
  const { data } = await clientApi.post<BookingResponse>(
    `/campers/${camperId}/booking-requests`,
    bookingData
  );

  return data;
}