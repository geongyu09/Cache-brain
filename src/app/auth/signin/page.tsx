import { AuthProvider } from "@/context/AuthContext";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {
  const session = await getServerSession(AuthProvider);
  return <>hi</>;
}
