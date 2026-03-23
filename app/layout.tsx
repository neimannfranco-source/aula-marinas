import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aula Marinas",
  description: "Plataforma de capacitación Hotel Marina Manzanos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}