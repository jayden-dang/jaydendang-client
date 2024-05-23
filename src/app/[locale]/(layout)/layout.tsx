import MainLayout from "@/components/layouts/MainLayout";
import { ReactNode } from "react";

export interface NavbarLayoutProps {
  children: ReactNode
}

function NavbarLayout({children}: NavbarLayoutProps) {
  return <MainLayout>{children}</MainLayout>
}

export default NavbarLayout
