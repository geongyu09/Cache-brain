import { authOptions } from "@/service/auth";
import { getLearningCard } from "@/service/learn";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

type Props = {
  params: { cardId: string };
};

export async function GET(_: Request, { params: { cardId } }: Props) {
  const session = await getServerSession(authOptions);
  if (!session)
    return new Response(JSON.stringify({ message: "Authentication error!" }), {
      status: 401,
    });
  const userId = session.user.id;
  const data = await getLearningCard({ cardId, userId });
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);
  const body = await request.json();
  if (!session)
    return new Response(JSON.stringify({ message: "Authentication error!" }), {
      status: 401,
    });
  if (body == undefined)
    return new Response(JSON.stringify({ message: "Bad request" }), {
      status: 404,
    });
}
