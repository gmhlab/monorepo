import { Navbar5 } from "@repo/ui";
import { Footer3 } from "@repo/ui";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar5 />
      <main>
        {children}
      </main>
      <footer>
        <Footer3 />
      </footer>
    </>
  )
}
