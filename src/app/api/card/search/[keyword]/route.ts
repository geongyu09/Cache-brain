type Prop = {
  params: {
    search: string;
  };
};

export async function GET(
  request: Request,
  { params }: { params: { keyword: string } }
) {
  return new Response(JSON.stringify(params.keyword));
}
