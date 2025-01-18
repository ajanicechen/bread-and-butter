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
      <body>
        <h1>Hi</h1>
        <p>Hi</p>
        {children}
      </body>
    </html>
  );
}
