import "./globals.css";

// Judul & deskripsi ini yang muncul di Google dan saat link dibagikan ke WhatsApp
export const metadata = {
  title: "Kampung Sayur Jum'at Barokah",
  description: "Bakti sosial setiap hari Jum'at. Mari berbagi keberkahan bersama warga.",
  openGraph: {
    title: "Kampung Sayur Jum'at Barokah",
    description: "Bakti sosial setiap hari Jum'at. Ayo donasi sekarang.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
