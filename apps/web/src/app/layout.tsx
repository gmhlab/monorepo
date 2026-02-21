import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@repo/ui";

export const metadata: Metadata = {
  title: "Web App",
  description: "Main application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}