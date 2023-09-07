import LoginSection from "@/components/LoginSection";
import { authOptions } from "@/service/auth";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions);
  const route = session?.user.username;
  if (session) redirect(`/${route}`); //로그인 여부에 따른 리다이렉트

  const providers = await getProviders();

  return <LoginSection providers={providers}></LoginSection>;
}
