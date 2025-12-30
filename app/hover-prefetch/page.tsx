'use client';

import { useRouter } from 'next/navigation';

export default function HoverPrefetch() {
  const router = useRouter();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Hover Prefetch (App Router)</h1>

      <a
        href="/about"
        onMouseEnter={() => router.prefetch('/about')}
        style={{ color: 'blue', textDecoration: 'underline' }}
      >
        Hover me
      </a>
    </main>
  );
}
