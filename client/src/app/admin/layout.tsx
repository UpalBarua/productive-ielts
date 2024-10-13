import { AdminNav } from "@/components/admin/admin-nav";
import { MobileMenu } from "@/components/admin/mobile-menu";
import React from "react";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: Readonly<AdminLayoutProps>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(10rem,16%)_,1fr]">
      <header className="grid-container fixed left-0 top-0 z-10 w-full border-b bg-background/75 py-2 backdrop-blur md:hidden">
        <div className="flex items-center justify-start gap-x-5">
          <MobileMenu />
          <h1 className="text-lg font-medium">Admin</h1>
        </div>
      </header>
      <aside className="fixed hidden h-full w-full min-w-[10rem] max-w-[16%] border-r bg-secondary py-6 ps-6 md:block">
        <h1 className="text-lg font-medium">Admin</h1>
        <div className="py-6">
          <AdminNav />
        </div>
      </aside>
      <main className="col-start-2">{children}</main>
    </div>
  );
}
