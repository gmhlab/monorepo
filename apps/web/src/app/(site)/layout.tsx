import { Navbar1, Navbar2, Navbar3, Navbar4, Navbar5 } from "@repo/ui"
import { Footer2, Footer1, Footer3 } from "@repo/ui";

const navigationData = [
  { title: 'Home', href: '/' },
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'Website', href: '/gmh' },
  { title: 'Login', href: '/login' }
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Navbar4 />
        <Navbar2 navigationData={navigationData} />
      </header>
      <main>
        {children}
      </main>
      <footer className="border-t border-dashed">
        <Footer2 />
      </footer>
    </>
  )
}
