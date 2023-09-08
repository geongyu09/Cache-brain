import React from "react";
import LoginButton from "./LoginButton";
import HeaderForm from "./HeaderForm";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-4 py-8 bg-slate-400">
      <HeaderForm />
    </header>
  );
}
