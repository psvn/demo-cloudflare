import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function PreloadFont() {
  return (
    <main className={inter.className} style={{ padding: '2rem' }}>
      <h1>Font Preload Demo</h1>
      <p>
        Denna sida använder <code>next/font</code> för att ladda Inter-fonten automatiskt.
        Cloudflare kan skicka Early Hints för fonten.
      </p>
    </main>
  );
}
