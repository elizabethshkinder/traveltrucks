import Image from "next/image";
import type { CamperImage } from "../../types/camper";

interface CamperGalleryProps {
  gallery: CamperImage[];
}

export default function CamperGallery({ gallery }: CamperGalleryProps) {
  return (
    <section>
      <h2>Gallery</h2>

      {gallery.map((image, index) => (
        <div key={index}>
          <p>Image {index + 1}</p>
          <Image
            src={image.thumb}
            alt={`Camper image ${index + 1}`}
            width={200}
            height={150}
          />
        </div>
      ))}
    </section>
  );
}