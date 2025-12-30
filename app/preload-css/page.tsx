export default function PreloadCSS() {
  return (
    <>
      <head>
        <link rel="preload" href="/styles/demo.css" as="style" />
      </head>
      <main style={{ padding: '2rem' }}>
        <h1>CSS Preload Demo</h1>
        <p>
          Denna sida preloader ett externt CSS-file. Cloudflare kan skicka Early Hints
          för att börja ladda CSS innan HTML är färdig.
        </p>
      </main>
    </>
  );
}
