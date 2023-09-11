import React from "react";
import HeaderForm from "./HeaderForm";
import Link from "next/link";
import NewCardButton from "./NewCardButton";
import MainIcon from "./MainIcon";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-4 py-4 border-b-2">
      <MainIcon position="header" />
      <HeaderForm />
      <nav className="flex w-full max-w-lg justify-between items-center">
        <Link href={"/"}>
          <h3>home</h3>
        </Link>
        <Link href={"/connect"}>
          <h3>connect</h3>
        </Link>
        {/* <Link href={"/"}> */}
        <h3>surport</h3>
        {/* </Link> */}
        <NewCardButton />
      </nav>
    </header>
  );
}
