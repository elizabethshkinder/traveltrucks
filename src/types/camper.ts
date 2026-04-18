export interface CamperImage {
  thumb: string;
  original: string;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: CamperImage[];
}

export interface CampersResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  campers: Camper[];
}

export interface Review {
  id: string;
  camperId: string;
  reviewer_name: string;
  comment: string;
  reviewer_rating: number;
  createdAt: string;
}

export interface BookingRequest {
  name: string;
  email: string;
}