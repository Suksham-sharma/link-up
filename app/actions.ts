/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "./lib/db";
import { requireUser } from "./lib/hooks/auth-hook";
import { parseWithZod } from "@conform-to/zod";
import { onboardingSchema } from "./lib/zodSchemas";

export async function handleOnboardingSubmit(
  prevState: any,
  formData: FormData
) {
  const session = await requireUser();

  const validatedData = parseWithZod(formData, { schema: onboardingSchema });

  if (validatedData.status !== "success") {
    return validatedData.reply();
  }

  const data = await prisma.user.update({
    where: {
      id: session?.user?.id,
    },
    data: {
      userName: validatedData.value.userName,
      name: validatedData.value.fullName,
    },
  });
}
