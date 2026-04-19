"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";

import { createBookingRequest } from "../../../lib/api";
import { bookingSchema } from "../../../validations/bookingValidation";
import type { BookingPayload } from "../../../types/booking";
import styles from "./BookingForm.module.css";

interface BookingFormProps {
  camperId: string;
}

const initialValues: BookingPayload = {
  name: "",
  email: "",
};

export default function BookingForm({ camperId }: BookingFormProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Book your campervan now</h2>
      <p className={styles.text}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={bookingSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          try {
            const response = await createBookingRequest(camperId, values);

            toast.success(
              response.message || "Booking request sent successfully!"
            );

            resetForm();
          } catch (error) {
            toast.error((error as Error).message || "Something went wrong");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.fieldGroup}>
              <Field
                className={styles.input}
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Name*"
              />
              <ErrorMessage
                name="name"
                component="p"
                className={styles.error}
              />
            </div>

            <div className={styles.fieldGroup}>
              <Field
                className={styles.input}
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email*"
              />
              <ErrorMessage
                name="email"
                component="p"
                className={styles.error}
              />
            </div>

            <button
              className={styles.button}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}