"use client";

import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export const SignIn = () => (
  <Button
    variant={"outline"}
    onClick={() => signIn("github", { callbackUrl: "/" })}
  >
    Log in
  </Button>
);
