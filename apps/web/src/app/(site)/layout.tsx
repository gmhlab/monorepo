import { Navbar2 } from "@repo/ui"
import { Footer2 } from "@repo/ui";

const navigationData = [
  { title: 'Home', href: '#' },
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'Website', href: '#' },
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
      <footer>
        <Footer2 className="container mx-auto"/>
      </footer>
    </>
  )
}
