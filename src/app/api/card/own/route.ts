import { authOptions } from "@/service/auth";
import { getCards } from "@/service/card";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(_: Request) {
  const session = await getServerSession(authOptions);
  if (!session)
    return new Response(JSON.stringify({ message: "Authentication error!" }), {
      status: 401,
    });
  const user = session?.user;
  const data = await getCards({ ownList: true, userId: user.id });
  console.log(data);
  return NextResponse.json(data);
}
