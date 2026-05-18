import type { Metadata } from "next";
import { Cormorant_Garamond, Heebo } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FOREST | מטבח ים תיכוני מודרני",
  description: "תפריט המסעדה — FOREST מטבח ים תיכוני מודרני",
  openGraph: {
    title: "FOREST | מטבח ים תיכוני מודרני",
    description: "תפריט המסעדה — FOREST מטבח ים תיכוני מודרני",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${cormorant.variable} ${heebo.variable}`}>
      <body className="font-heebo bg-cream text-charcoal">
        {children}
      </body>
    </html>
  );
}
