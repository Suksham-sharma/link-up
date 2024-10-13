"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

export const GoogleAuthButton = () => {
  const { pending } = useFormStatus();
  return (
    <div>
      {pending ? (
        <Button variant="outline" className="w-full border-primary" disabled>
          <Loader2 className=" size-4 mr-2 animate-spin" /> Please Wait
        </Button>
      ) : (
        <Button variant="outline" className="w-full border-primary">
          <FaGoogle className="mr-2 " color="black" />
          Sign in with Google
        </Button>
      )}
    </div>
  );
};

export const GithubAuthButton = () => {
  const { pending } = useFormStatus();
  return (
    <div>
      {pending ? (
        <Button variant="outline" className="w-full border-primary" disabled>
          <Loader2 className=" size-4 mr-2 animate-spin" /> Please Wait
        </Button>
      ) : (
        <Button className="w-full bg-blue-500">
          <FaGithub className=" size-4 mr-2" color="black" />
          Sign in with Github
        </Button>
      )}
    </div>
  );
};
