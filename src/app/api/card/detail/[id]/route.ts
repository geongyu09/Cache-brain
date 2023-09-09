import { getCardDetail } from "@/service/card";
import { NextResponse } from "next/server";

type Props = {
  params: {
    id: string;
  };
};

export async function GET(_: Request, { params: { id } }: Props) {
  const data = await getCardDetail(id);
  return NextResponse.json(data);
}
