import styles from "./loading.module.css";

export default function Loading() {
  return (
    <section className={styles.loader}>
      <p>Loading...</p>
    </section>
  );
}