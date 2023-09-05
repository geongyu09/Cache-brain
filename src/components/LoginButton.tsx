"use client";

import React from "react";
import StyledButton from "./ui/StyledButton";
import { useSession, signIn, signOut } from "next-auth/react";

export type Text = "로그인" | "로그아웃";

export default function LoginButton() {
  const session = useSession();
  const user = session.data?.user;

  let text: Text = "로그인";
  const handleLogin = user ? () => signOut() : () => signIn();
  if (user) text = "로그아웃";

  return <StyledButton text={text} handler={handleLogin} />;
}
