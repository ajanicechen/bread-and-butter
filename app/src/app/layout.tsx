import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JUST | Bread and butter",
  description: "Bread & Butter event—a moment to share insights and connect with clients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="JUST Bread and butter event" content="JUST" />
      <body>
        {children}
      </body>
    </html>
  );
}
