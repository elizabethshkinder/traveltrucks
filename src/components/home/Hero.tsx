import Link from "next/link";

export default function Hero() {
  return (
    <section style={{ padding: "40px" }}>
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>

      <Link href="/catalog">
        <button style={{ marginTop: "20px" }}>
          View Now
        </button>
      </Link>
    </section>
  );
}