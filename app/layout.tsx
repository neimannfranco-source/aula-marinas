import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aula Marinas – Portugués profesional para hotelería",
  description:
    "Programa de capacitación en portugués orientado a la excelencia en la atención al huésped brasileño en el Hotel Marinas Alto Manzano.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      style={{
        background: "#020617",
      }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          background: `
            radial-gradient(circle at 20% 10%, rgba(34,197,94,0.03), transparent 45%),
            radial-gradient(circle at 80% 20%, rgba(16,185,129,0.02), transparent 50%),
            linear-gradient(180deg, #020617 0%, #020617 60%, #03110c 100%)
          `,
          color: "#e5e7eb",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}