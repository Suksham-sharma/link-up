import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import { handleOnboardingSubmit } from "../actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { onboardingSchema } from "../lib/zodSchemas";

function Onboarding() {
  const [lastResult, action] = useFormState(handleOnboardingSubmit, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: onboardingSchema });
    },
  });
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>
            {" "}
            Welcome to Link <span className="text-primary">Up </span>
          </CardTitle>
          <CardDescription>
            {" "}
            Please add following info to get Started !!
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent className="flex flex-col gap-y-5 ">
            <div className="grid gap-y-2">
              <Label>Full Name</Label>
              <Input
                placeholder="John Doe"
                className="focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary"
              />
            </div>
            <div className="grid gap-y-2">
              <Label> UserName</Label>
              <div className="flex rounded-md">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-muted text-sm text-muted-foreground">
                  Linkup.com/
                </span>
                <Input
                  placeholder="example-user1"
                  className="rounded-l-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Submit</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default Onboarding;
