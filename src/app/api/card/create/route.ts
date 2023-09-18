import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  const session = await getServerSession();
  if (!session)
    return new Response(JSON.stringify({ message: "Bad request" }), {
      status: 401,
    });
}
