import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { GithubAuthButton, GoogleAuthButton } from "./SubmitButton";
import { signIn } from "../lib/auth";

export const AuthModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-[4px]"> Get Started for Free </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px] ">
        <DialogHeader className="flex flex-row gap-x-2 items-center justify-center">
          <Image src={"/logo.png"} alt="Logo" width={44} height={44} />
          <h4 className="text-3xl font-semibold">
            Link <span className="text-primary">UP</span>
          </h4>
        </DialogHeader>
        <div className="flex flex-col mt-5 gap-3">
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <GoogleAuthButton />
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <GithubAuthButton />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
