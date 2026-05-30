import { Navbar2 } from "@repo/ui"
import { Footer2 } from "@repo/ui";
import { navigationData } from "@repo/ui/data/config/navigation";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>

      <header>
        <Navbar2 
          navigationData={navigationData.map(item => ({
          title: item.label,
          href: item.href,
          }))}
        />
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
