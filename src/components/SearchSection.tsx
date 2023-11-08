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
    <section className="w-full h-full absolute bg-white bottom-0 right-0 pl-80 pt-80">
      <CardListContent typeOwn={false} username={user!.username} />;
    </section>
  );
}
