import { DetailCard } from "@/model/card";
import { authOptions } from "@/service/auth";
import { editCard } from "@/service/card";
import { getServerSession } from "next-auth";

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);
  const body: DetailCard | undefined = await request.json();
  if (body == undefined)
    return new Response(JSON.stringify({ message: "Bad Request" }), {
      status: 404,
    });
  if (!session)
    return new Response(JSON.stringify({ message: "Authentication Error" }), {
      status: 401,
    });
  const data = await editCard(body);
  console.log(data);
  return new Response(JSON.stringify(data));
}
