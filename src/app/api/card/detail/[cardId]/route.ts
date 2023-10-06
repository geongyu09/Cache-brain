import { getCardDetail, putProgress } from "@/service/card";
import { NextResponse } from "next/server";

type Props = {
  params: {
    cardId: string;
  };
};

export async function GET(_: Request, { params: { cardId } }: Props) {
  const data = await getCardDetail(cardId);
  return NextResponse.json(data);
}

export async function PUT(request: Request, { params: { cardId } }: Props) {
  const body = await request.json();
  if (body == undefined)
    return new Response(JSON.stringify({ message: "Bad request" }), {
      status: 404,
    });
  const { content, progress } = body;
  await putProgress({ cardId, content, progress });
  return NextResponse.json({ message: "good response" });
}
