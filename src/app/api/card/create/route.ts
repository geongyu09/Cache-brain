import { authOptions } from "@/service/auth";
import { makeNewCard } from "@/service/card";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session)
    return new Response(JSON.stringify({ message: "Authentication error" }), {
      status: 404,
    });
  const { card } = await request.json();
  if (!card)
    return new Response(JSON.stringify({ message: "Bad request" }), {
      status: 401,
    });
  const userId = session.user.id;
  const data = await makeNewCard(card, userId);
  return NextResponse.json(data);
}
