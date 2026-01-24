import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Project documentation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#033c5a]">
          <main className="min-h-screen flex items-center justify-center bg-background p-8">{children}</main>
      </body>
    </html>
  );
}