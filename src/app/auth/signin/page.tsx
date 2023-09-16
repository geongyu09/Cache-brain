import LoginSection from "@/components/LoginSection";
import { authOptions } from "@/service/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions);
  const route = session?.user.username;
  if (session) redirect(`/${route}`); //로그인 여부에 따른 리다이렉트

  return (
    <section className="w-full h-full flex justify-center items-center">
      <LoginSection />
    </section>
  );
}
