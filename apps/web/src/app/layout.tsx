// web/layout.tsx

import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Libre_Baskerville } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@repo/ui";
import { Toaster } from "@repo/ui";
import { TooltipProvider } from "@repo/ui";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const libreBaskerville = Libre_Baskerville({ 
  weight: ['400', '700'],  // Libre Baskerville requires explicit weights
  subsets: ['latin'], 
  variable: '--font-serif' 
});

export const metadata: Metadata = {
  title: {
    default: "GMH Lab Studio",
    template: "%s - GMH Lab",
  },
  description: "Supporting wellbeing worldwide.",
  icons: "/favicon.ico"
};

export const viewport: Viewport = {
  themeColor: "#033c5a"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${libreBaskerville.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          forcedTheme="light"
        >
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>

        {/* Analytics can go here */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
