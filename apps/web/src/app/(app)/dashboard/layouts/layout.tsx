import { Header } from "@repo/ui/"

export default function LayoutsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 p-6">{children}</div>
    </div>
  )
}
