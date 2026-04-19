import type { Camper } from "../../../types/camper";
import styles from "./VehicleDetails.module.css";

interface VehicleDetailsProps {
  camper: Camper;
}

export default function VehicleDetails({ camper }: VehicleDetailsProps) {
  const badges = [
    camper.transmission,
    camper.engine,
    camper.form,
    ...(camper.amenities ?? []).slice(0, 3),
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Vehicle details</h2>

      <div className={styles.badges}>
        {badges.map((item) => (
          <span key={item} className={styles.badge}>
            {item}
          </span>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.list}>
        <div className={styles.row}>
          <span>Form</span>
          <span>{camper.form}</span>
        </div>
        <div className={styles.row}>
          <span>Length</span>
          <span>{camper.length}</span>
        </div>
        <div className={styles.row}>
          <span>Width</span>
          <span>{camper.width}</span>
        </div>
        <div className={styles.row}>
          <span>Height</span>
          <span>{camper.height}</span>
        </div>
        <div className={styles.row}>
          <span>Tank</span>
          <span>{camper.tank}</span>
        </div>
        <div className={styles.row}>
          <span>Consumption</span>
          <span>{camper.consumption}</span>
        </div>
      </div>
    </section>
  );
}