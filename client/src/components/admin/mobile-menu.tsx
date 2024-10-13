import { AdminNav } from "@/components/admin/admin-nav";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenu2 } from "@tabler/icons-react";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <IconMenu2 />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="text-start">
          <SheetTitle>Admin</SheetTitle>
        </SheetHeader>
        <div className="py-8">
          <AdminNav />
        </div>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
