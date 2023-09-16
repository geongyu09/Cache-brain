"use client";

import React from "react";
import StyledButton from "./ui/StyledButton";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export type Text = "로그인" | "로그아웃";

export default function LoginButton() {
  const session = useSession();
  const user = session.data?.user;
  let text: Text = "로그인";
  const router = useRouter();

  if (user) text = "로그아웃";
  const handleLogin = user ? () => signOut() : () => signIn();
  const handleRoute = () => router.push(`/${user?.username}`);
  return (
    <>
      <StyledButton text={text} handler={handleLogin} />
      {user && <StyledButton text="학습 페이지로 가기" handler={handleRoute} />}
    </>
  );
}
