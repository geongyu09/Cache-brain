import { searchCard } from "@/service/card";

type Prop = {
  params: {
    keyword: string;
  };
};

export async function GET(_: Request, { params: { keyword } }: Prop) {
  const data = await searchCard(keyword);
  return new Response(JSON.stringify(data));
}
