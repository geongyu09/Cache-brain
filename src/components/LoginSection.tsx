"use client";
import { ClientSafeProvider, LiteralUnion, signIn } from "next-auth/react";
import { BuiltInProviderType } from "../../node_modules/next-auth/src/providers/index";
import React from "react";

type Props = {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
};

export default function LoginSection({ providers }: Props) {
  return (
    <section className="w-96 h-96 bg-slate-300 rounded-xl m-auto">
      <h1>로그인</h1>
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name} className="bg-white">
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </section>
  );
}
