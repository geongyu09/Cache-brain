"use client";
import { redirect } from "next/navigation";
import CardListContent from "./CardListSection";
import { useSession } from "next-auth/react";

type Props = {
  goBack: () => void;
};

export default function SearchSection({ goBack }: Props) {
  const session = useSession();
  const user = session?.data?.user;
  if (!session) redirect("/");
  //   const [keyword, setKeyword] = useState("");
  return (
    <section
      className="w-1/2 h-1/2 absolute bg-white top-20 left-72"
      onClick={() => goBack()}
    >
      <CardListContent typeOwn={false} username={user!.username} />
    </section>
  );
}
