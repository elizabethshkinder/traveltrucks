import Image from "next/image";
import type { CamperImage } from "../../../types/camper-image";
import styles from "./CamperGallery.module.css";

interface CamperGalleryProps {
  gallery: CamperImage[];
}

export default function CamperGallery({ gallery }: CamperGalleryProps) {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {gallery.map((image, index) => (
          <div key={image.id ?? index} className={styles.card}>
            <Image
              className={styles.image}
              src={image.thumb}
              alt={`Camper image ${index + 1}`}
              width={292}
              height={312}
            />
          </div>
        ))}
      </div>
    </section>
  );
}