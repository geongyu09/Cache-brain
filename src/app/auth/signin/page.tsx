import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginSection from "@/components/LoginSection";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  const providers = await getProviders();

  return <LoginSection providers={providers}></LoginSection>;
}
