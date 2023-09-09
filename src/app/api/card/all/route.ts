import { getCards } from "@/service/card";
import { NextResponse } from "next/server";

export async function GET(_: Request) {
  const data = await getCards({ ownList: false, userId: "" });
  return NextResponse.json(data);
}
