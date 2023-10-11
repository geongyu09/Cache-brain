import { authOptions } from "@/service/auth";
import { importCard } from "@/service/card";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const session = await getServerSession(authOptions);
  if (body == undefined || !body.cardId)
    return new Response("Bad request", { status: 404 });
  if (!session) return new Response("Authenticatoin Error", { status: 401 });
  const userId = session.user.id;
  const cardId = body.cardId;
  try {
    await importCard(userId, cardId);
    return NextResponse.json(true);
  } catch (e: any) {
    return new Response(e, { status: 401 });
  }
}
