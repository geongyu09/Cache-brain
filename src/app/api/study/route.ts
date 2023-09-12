import { authOptions } from "@/service/auth";
import { postLearningCard } from "@/service/learn";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const { cardId } = await request.json();
  const isAllowed = session && cardId;
  if (!isAllowed) {
    if (!cardId)
      return new Response(JSON.stringify({ message: "Bad request" }), {
        status: 404,
      });
    return new Response(JSON.stringify({ message: "Authentication error!" }), {
      status: 401,
    });
  }
  const userId = session.user.id;
  const data = await postLearningCard({ cardId, userId });
  return NextResponse.json(data);
}
