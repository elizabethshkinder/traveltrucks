"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
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
        onSubmit={async (values, { resetForm, setSubmitting, setStatus }) => {
          setStatus({ success: "", error: "" });

          try {
            const response = await createBookingRequest(camperId, values);

            setStatus({
              success: response.message || "Booking request sent successfully!",
              error: "",
            });

            resetForm();
          } catch (error) {
            setStatus({
              success: "",
              error: (error as Error).message || "Something went wrong",
            });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form className={styles.form}>
            <div className={styles.fieldGroup}>
              <Field
                className={styles.input}
                type="text"
                name="name"
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

            {status?.success && (
              <p className={styles.success}>{status.success}</p>
            )}

            {status?.error && <p className={styles.error}>{status.error}</p>}
          </Form>
        )}
      </Formik>
    </section>
  );
}