import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import * as React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
}
