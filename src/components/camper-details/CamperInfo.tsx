import type { Camper } from "../../types/camper";

interface CamperInfoProps {
  camper: Camper;
}

export default function CamperInfo({ camper }: CamperInfoProps) {
  return (
    <section>
      <h1>{camper.name}</h1>
      <p>€{camper.price}</p>
      <p>{camper.location}</p>
      <p>Rating: {camper.rating}</p>
      <p>{camper.description}</p>
    </section>
  );
}