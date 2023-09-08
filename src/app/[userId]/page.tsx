import { authOptions } from "@/service/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default async function UserDetailPage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return <section className="bg-slate-100 "></section>;
}
