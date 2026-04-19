import styles from "../loading.module.css";

export default function CatalogLoading() {
  return (
    <section className={styles.loader}>
      <p>Loading catalog...</p>
    </section>
  );
}