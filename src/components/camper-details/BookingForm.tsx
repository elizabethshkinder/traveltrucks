"use client";

import { FormEvent, useState } from "react";
import { createBookingRequest } from "../../lib/api";

interface BookingFormProps {
  camperId: string;
}

export default function BookingForm({ camperId }: BookingFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    try {
      setIsSubmitting(true);

      const response = await createBookingRequest(camperId, {
        name,
        email,
      });

      setSuccessMessage(response.message);
      setName("");
      setEmail("");
    } catch (error) {
      setErrorMessage((error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section>
      <h2>Book your campervan now</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name*"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <br />
        <br />

        <input
          type="email"
          placeholder="Email*"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />
        <br />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>

      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </section>
  );
}