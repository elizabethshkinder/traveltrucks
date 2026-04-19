import Image from "next/image";
import type { CamperImage } from "../../../types/camper-image";
import styles from "./CamperGallery.module.css";

interface CamperGalleryProps {
  gallery: CamperImage[];
}

export default function CamperGallery({ gallery }: CamperGalleryProps) {
  if (!gallery.length) return null;

  const mainImage = gallery[0];
  const thumbnails = gallery.slice(1, 4);

  return (
    <section className={styles.section}>
      <div className={styles.mainCard}>
        <Image
          className={styles.mainImage}
          src={mainImage.thumb}
          alt="Camper main image"
          width={696}
          height={412}
          priority
        />
      </div>

      {thumbnails.length > 0 && (
        <div className={styles.thumbGrid}>
          {thumbnails.map((image, index) => (
            <div key={image.id ?? index} className={styles.thumbCard}>
              <Image
                className={styles.thumbImage}
                src={image.thumb}
                alt={`Camper image ${index + 2}`}
                width={220}
                height={160}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}