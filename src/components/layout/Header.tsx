import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link href="/">Home</Link>
        <Link href="/catalog">Catalog</Link>
      </nav>
    </header>
  );
}