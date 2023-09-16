"use client";
import {
  ClientSafeProvider,
  LiteralUnion,
  signIn,
  useSession,
} from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";
import StyledButton from "./ui/StyledButton";

export default function LoginSection() {
  const session = useSession();
  const user = session.data?.user;
  const router = useRouter();
  if (user) router.push(`/${user.username}`);
  return (
    <section className="w-96 h-96rounded-xl mx-auto flex justify-center flex-col gap-40">
      <StyledButton
        text="Sign In With Google"
        handler={() => signIn("google")}
      />
    </section>
  );
}
