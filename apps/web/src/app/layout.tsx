import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider, TooltipProvider } from "@repo/ui";

export const metadata: Metadata = {
  title: "Web App",
  description: "Main application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider defaultTheme="system" storageKey="gmh-theme">
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}