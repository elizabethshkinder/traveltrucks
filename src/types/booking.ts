export type BookingPayload = {
  name: string;
  email: string;
};

export type BookingResponse = {
  message: string;
  error?: string;
  statusCode?: number;
};