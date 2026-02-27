import { Navbar2 } from "@repo/ui"
import { Footer2 } from "@repo/ui";

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
