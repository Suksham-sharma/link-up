import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { NavLinks } from "../components/NavLinks";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "../lib/auth";
import { requireUser } from "../lib/hooks/auth-hook";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await requireUser();
  return (
    <div className="min-h-screen w-full grid md:grid-cols-[230px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden md:block  border-r bg-muted/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[64px] lg:px-6 ">
            <Link href={"/"} className="flex gap-x-4 items-center">
              <Image src={"/logo.png"} alt="Logo" width={44} height={44} />
              <h4 className="text-xl font-semibold">
                Link <span className="text-primary">UP</span>
              </h4>
            </Link>
          </div>

          <div className="flex-1 ">
            <nav className="grid items-start px-2 lg:px-4">
              <NavLinks />
            </nav>
          </div>
        </div>
      </div>

      <div className=" flex flex-col ">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-16">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="md:hidden shrink-0 border-primary/30"
                size={"icon"}
                variant={"outline"}
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className="flex flex-col">
              <nav className="grid gap-2">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>

          <div className="ml-auto flex items-center gap-x-4 ">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"secondary"}
                  size="icon"
                  className="rounded-full"
                >
                  <Image
                    alt="user-profile"
                    src={session?.user?.image || ""}
                    width={32}
                    height={32}
                    className="w-full h-full rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <form
                    className="w-full"
                    action={async () => {
                      "use server";
                      await signOut();
                    }}
                  >
                    <button className="w-full text-left">Logout</button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
