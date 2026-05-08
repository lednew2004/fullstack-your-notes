import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHatDispaly = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br" className={`${redHatDispaly}`}>
      <body className="min-h-full flex flex-col bg-zinc-900">{children}</body>
    </html>
  );
}
