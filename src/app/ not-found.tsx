import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Page not found</h2>
        <p className={styles.text}>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className={styles.link}>
          Go back home
        </Link>
      </div>
    </section>
  );
}