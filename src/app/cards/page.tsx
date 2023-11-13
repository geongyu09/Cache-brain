import CardListContent from "@/components/pages/cards/CardListSection";
import { authOptions } from "@/service/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function UserDetailPage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!session) redirect("/");
  return <CardListContent typeOwn={false} username={user!.username} />;
}
