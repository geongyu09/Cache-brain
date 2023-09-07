"use client";
import {
  ClientSafeProvider,
  LiteralUnion,
  signIn,
  useSession,
} from "next-auth/react";
import { BuiltInProviderType } from "../../node_modules/next-auth/src/providers/index";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
};

export default function LoginSection({ providers }: Props) {
  const session = useSession();
  const user = session.data?.user;
  const router = useRouter();
  if (user) router.push(`/${user.username}`);
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
