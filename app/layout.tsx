import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aula Marinas – Português hoteleiro profissional",
  description: "Capacitação em português aplicado à hotelaria para a equipe do Marinas Alto Manzano.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, padding: 0, background: "#0a0f0d" }}>
        {children}
      </body>
    </html>
  );
}
