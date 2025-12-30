'use client';
import { useRouter } from 'next/router';

export default function HoverPrefetch() {
  const router = useRouter();
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Hover Prefetch Demo</h1>
      <p>Hovra över länken för att prefetch About-sidan.</p>
      <a
        href="/about"
        onMouseEnter={() => router.prefetch('/about')}
        style={{ color: 'blue', textDecoration: 'underline' }}
      >
        Hover me to prefetch About Page
      </a>
    </main>
  );
}
