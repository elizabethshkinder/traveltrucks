import Link from "next/link";
import type { Camper } from "../../types/camper";

interface CamperCardProps {
  camper: Camper;
}

export default function CamperCard({ camper }: CamperCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "16px",
      }}
    >
      <h3>{camper.name}</h3>
      <p>Price: €{camper.price}</p>
      <p>Location: {camper.location}</p>
      <p>Rating: {camper.rating}</p>
      <p>{camper.description}</p>

      <Link
        href={`/catalog/${camper.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Show more
      </Link>
    </div>
  );
}