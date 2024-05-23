import { Navbar } from "@/systems"

export interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({children, ...rest}: MainLayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
