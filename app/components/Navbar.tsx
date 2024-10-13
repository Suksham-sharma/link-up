import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AuthModal } from "./AuthModal";

export const Navbar = () => {
  return (
    <div
      className="w-[90%] h-18 px-4 border-gray-700 border-[1px] flex items-center z-50 mt-5  rounded-2xl mx-auto p-6
      bg-secondary/5 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border-primary/10"
    >
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Link href="/">
          <div className="hover:opacity-85 transition items-center gap-x-2 hidden md:flex">
            <Image src={"/logo.png"} alt="Logo" width={44} height={44} />
            <div className={"text-2xl text-black pb-1 mt-1 font-semibold"}>
              Link <span className="text-primary">Up</span>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-x-4">
          <Link href="/dashboard">
            <Button
              className=" hover:text-primary transition"
              variant={"outline"}
            >
              Dashboard
            </Button>
          </Link>
          <AuthModal />
        </div>
      </div>
    </div>
  );
};
