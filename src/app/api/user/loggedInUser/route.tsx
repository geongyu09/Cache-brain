import { authOptions } from "@/service/auth";
import { getUserInfo } from "@/service/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

//로그인한 사용자의 정보를 제공함.
export async function GET(_: Request) {
  const session = await getServerSession(authOptions);
  const username = session?.user.username;
  console.log(username);
  if (!username)
    return new Response(JSON.stringify({ message: " Authenticatoin error" }), {
      status: 401,
    });

  console.log("aaaalsakfjlksajlfaskdjflaksdfjl");
  const data = await getUserInfo(username, { own: false, learning: false });
  return NextResponse.json(data);
}
