import type {
  BookingRequest,
  Camper,
  CampersResponse,
  Review,
} from "../types/camper";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
}

export interface GetCampersParams {
  page?: number;
  perPage?: number;
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
}

function buildQuery(params: GetCampersParams): string {
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
  params: GetCampersParams = {}
): Promise<CampersResponse> {
  const query = buildQuery(params);
  const url = query ? `${BASE_URL}/campers?${query}` : `${BASE_URL}/campers`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch campers");
  }

  const data: CampersResponse = await response.json();
  return data;
}

export async function getCamperById(camperId: string): Promise<Camper> {
  const response = await fetch(`${BASE_URL}/campers/${camperId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch camper details");
  }

  const data: Camper = await response.json();
  return data;
}

export async function getCamperReviews(camperId: string): Promise<Review[]> {
  const response = await fetch(`${BASE_URL}/campers/${camperId}/reviews`);

  if (!response.ok) {
    throw new Error("Failed to fetch camper reviews");
  }

  const data: Review[] = await response.json();
  return data;
}

export async function createBookingRequest(
  camperId: string,
  bookingData: BookingRequest
): Promise<{ message: string }> {
  const response = await fetch(`${BASE_URL}/campers/${camperId}/booking-requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  if (!response.ok) {
    throw new Error("Failed to create booking request");
  }

  const data: { message: string } = await response.json();
  return data;
}