"use client";
import React, { useState } from "react";
import LoginButton from "./LoginButton";
import { useSession } from "next-auth/react";

export default function HomeLoginComponent() {
  const [show, setShow] = useState(false);
  const user = useSession();
  return (
    <div className="flex gap-10 items-center mb-32 px-20 py-7 rounded-xl border-2 hover:bg-slate-200 transition-all ">
      <h3 className="text-xl">Q : 바로 시작할 수 있는 방법은 무엇일까요?</h3>
      {show ? (
        <LoginButton />
      ) : (
        <span onClick={() => setShow(true)}>정답 보기</span>
      )}
    </div>
  );
}
