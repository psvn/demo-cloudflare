export default function PreloadImage() {
  return (
    <>
      <head>
        <link rel="preload" href="/images/hero.jpg" as="image" />
      </head>
      <main style={{ padding: '2rem' }}>
        <h1>Image Preload Demo</h1>
        <p>
          Denna sida preloader en hero-image. Cloudflare kan skicka Early Hints för att börja
          ladda bilden innan HTML är färdig.
        </p>
        <img src="/images/hero.jpg" alt="Hero" width={600} />
      </main>
    </>
  );
}
