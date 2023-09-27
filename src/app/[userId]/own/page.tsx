import CardListContent from "@/components/CardListSection";
import { authOptions } from "@/service/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    userId: string;
  };
};

export default async function UserDetailPage({ params: { userId } }: Props) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!session || user?.username !== userId) redirect("/");

  return <CardListContent typeOwn={true} username={user.username} />;
}
