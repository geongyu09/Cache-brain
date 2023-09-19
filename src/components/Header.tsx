import React from "react";
import HeaderForm from "./HeaderForm";
import Link from "next/link";
import NewCardButton from "./NewCardButton";
import MainIcon from "./MainIcon";
import RouteBackButton from "./RouteBackButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/service/auth";

type Props = {
  position: "study" | "detail" | "new";
};

export default async function Header({ position }: Props) {
  const session = await getServerSession(authOptions);
  const username = session?.user.username;
  return (
    <header className="w-full flex justify-between items-center px-4 py-4 border-b-2">
      {position == "detail" ? <HeaderForm /> : <MainIcon position="header" />}
      <nav className="flex w-full max-w-lg justify-between items-center">
        <Link href={"/"}>
          <h3>home</h3>
        </Link>
        <Link href={`/${username}`}>
          <h3>cards</h3>
        </Link>
        <Link href={"/contact"}>
          <h3>contact</h3>
        </Link>
        {position !== "new" ? <NewCardButton /> : <RouteBackButton />}
      </nav>
    </header>
  );
}
