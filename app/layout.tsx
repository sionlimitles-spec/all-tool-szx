import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "All Tool SXZ — Alat Online dalam Satu Tempat",
  description: "Kumpulan alat online gratis untuk semua kebutuhan. Tanpa install, langsung pakai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
