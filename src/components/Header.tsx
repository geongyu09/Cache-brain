import React from "react";
import LoginButton from "./LoginButton";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center p-2 bg-slate-400">
      <div className="flex ">
        {/* <div>icon</div> */}
        <h1>CacheBrain</h1>
      </div>
      <LoginButton />
    </header>
  );
}
