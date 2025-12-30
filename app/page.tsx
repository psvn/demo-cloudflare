import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Next.js Preload & Prefetch Demo</h1>
      <ul>
        <li><Link href="/preload-font">Preload Font</Link></li>
        <li><Link href="/preload-css">Preload CSS</Link></li>
        <li><Link href="/preload-image">Preload Image</Link></li>
        <li><Link href="/hover-prefetch">Hover Prefetch</Link></li>
      </ul>
    </main>
  );
}
