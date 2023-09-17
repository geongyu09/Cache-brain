import React from "react";
import HeaderForm from "./HeaderForm";
import Link from "next/link";
import NewCardButton from "./NewCardButton";
import MainIcon from "./MainIcon";
import RouteBackButton from "./RouteBackButton";

type Props = {
  position: "study" | "detail" | "new";
};

export default function Header({ position }: Props) {
  return (
    <header className="w-full flex justify-between items-center px-4 py-4 border-b-2">
      {position == "detail" ? <HeaderForm /> : <MainIcon position="header" />}
      <nav className="flex w-full max-w-lg justify-between items-center">
        <Link href={"/"}>
          <h3>home</h3>
        </Link>
        <Link href={"/connect"}>
          <h3>connect</h3>
        </Link>
        <h3>surpport</h3>
        {position !== "new" ? <NewCardButton /> : <RouteBackButton />}
      </nav>
    </header>
  );
}
